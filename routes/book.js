const express = require('express');
const router = express.Router();
const book=require('../models/book_model');

router.get('/',function(request,response){
    book.getAllBooks(function(err, result){
        if(err){
            console.log(err);
            response.json(err.errno);
        }
        else{
            response.json(result);
        }
        
    })
});

router.get('/:id',function(request, response){
    book.getOneBook(request.params.id,function(err,result){
        if(err){
            console.log(err);
            response.json(err.errno);
        }
        else{
            response.json(result[0]);
        }
    })
});

router.post('/',function(request,response){
    book.addBook(request.body,function(err,result){
        if(err){
            console.log(err);
            response.json(err.errno);
        }
        else{
            response.json(result);
        }
    });
});

router.put('/:id',function(request, response){
    book.updateBook(request.body, request.params.id, function(err, result){
        if(err){
            console.log(err);
            response.json(err.errno);
        }
        else {
            console.log(result.affectedRows);
            if(result.affectedRows==1){
                response.send(1)
            }
            else {
                response.send(0);
            }
        }
    });
});

router.delete('/:id',function(request,response){
    book.deleteBook(request.params.id, function(err, result){
        if(err){
            console.log(err);
            response.json(err.errno); 
        }
        else{
            response.json(result);
        }
    });
});

module.exports=router