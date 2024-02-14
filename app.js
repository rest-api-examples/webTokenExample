const express=require('express');
const port=3000;
const app=express();
const bookRouter=require('./routes/book.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, function(){
    console.log("Express esimerkki portissa "+port);
});

app.get('/',function(request,response){
    response.send("Nodemon testi Express API esimerkki ilman tietokantaa portissa "+port);
});

app.use('/book', bookRouter);


module.exports=app;