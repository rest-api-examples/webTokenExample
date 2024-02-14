const express = require('express');
const router = express.Router();
const user = require('../models/user_model');
const bcrypt = require('bcryptjs');

router.post('/', function (request, response) {
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
                        response.send(true);
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

module.exports = router;