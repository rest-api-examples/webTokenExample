const express = require('express');
const router = express.Router();
const user = require('../models/user_model');
const bcrypt = require('bcryptjs');
const dotenv=require('dotenv');
dotenv.config();
const jwt=require('jsonwebtoken');

router.post('/', function (request, response) {
    console.log(process.env.MY_SQL);
    //console.log(request.body);
    user.login(request.body.username, function (err, result) {
        if (request.body.username && request.body.password) {
            if (err) {
                response.json(err);
            }
            else {
                if (result.length > 0) {
                const hashedPassword = result[0].password;
                console.log(hashedPassword);
                bcrypt.compare(request.body.password, hashedPassword, function (err, compareResult) {

                    if(compareResult){
                        console.log("Kirjautuminen ok");
                        const token=generateAccessToken({username: request.body.username})
                        response.send(token);
                    }
                    else{
                        console.log("Väärä salasana");
                        response.send(false);
                    }
                })
            }
            else {
                console.log("tunnusta ei ole tietokannassa");
                response.send(false);  
            }
            }
        }
        else {
            console.log("tunnus tai salasana puuttuu");
            response.send(false);
        }
    });
});

function generateAccessToken(username) {
    dotenv.config();
    return jwt.sign(username, process.env.MY_TOKEN, { expiresIn: '1800s' });
  }

module.exports = router;