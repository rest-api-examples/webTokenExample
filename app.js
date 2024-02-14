const express=require('express');
const port=3000;
const app=express();
const bookRouter=require('./routes/book.js');
const userRouter=require('./routes/user.js');
const loginRouter=require('./routes/login.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, function(){
    console.log("Express esimerkki portissa "+port);
});

app.get('/',function(request,response){
    response.send("Nodemon testi Express API esimerkki ilman tietokantaa portissa "+port);
});

app.use('/book', bookRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);


module.exports=app;