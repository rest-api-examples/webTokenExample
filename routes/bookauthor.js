const express = require('express');
const router = express.Router();
const book=require('../models/book_model');

router.get('/',function(request, response){
book.getBooksByAuthors(function(err, result){
    if(err){
        response.json(err);
    }
    else{
        response.json(result);
    }
});
});

module.exports=router;