const express = require('express');
const router = express.Router();
const user=require('../models/user_model');

router.get('/',function(request, response){
    user.getAllUsers(function(err, result){
        if(err){
            response.json(err);
        }
        else{
            response.json(result);
        }    
    });
});

router.get('/:un',function(request, response){
    user.getOneUser(request.params.un,function(err, result){
        if(err){
            response.json(err);
        }
        else{
            response.json(result[0]);
        }  
    });
});

router.post('/',function(request, response){
    user.addUser(request.body, function(err, result){
        if(err){
            response.json(err);
        }
        else{
            response.json(result.affectedRows);
        }  
    });
});

router.put('/:un',function(request,response){
    user.updateUser(request.params.un, request.body, function(err, result){
        if(err){
            console.log(err);
            response.json("error");
        }
        else{
            response.json(result.affectedRows);
        }  
    });
});

module.exports=router;