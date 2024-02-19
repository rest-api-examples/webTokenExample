const express=require('express');
const port=3000;
const app=express();
const bookRouter=require('./routes/book.js');
const userRouter=require('./routes/user.js');
const loginRouter=require('./routes/login.js');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, function(){
    console.log("Express esimerkki portissa "+port);
});

app.get('/',function(request,response){
    response.send("Nodemon testi Express API esimerkki ilman tietokantaa portissa "+port);
});

//suojaamattomat reitit
app.use('/login', loginRouter);

//suojatut reitit
app.use(authenticateToken);
app.use('/user', userRouter);
app.use('/book', bookRouter);


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    console.log("token = "+token);
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.MY_TOKEN, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }

module.exports=app;