const express=require('express');
const router=express.Router();
const borrow=require('../models/borrow_model');

router.get('/',function(request, response){
    borrow.getAllBorrows(function(err, result){
        if(err){
            response.json(err);
        }
        else{
            response.json(result);
        }
    })

});

module.exports=router;