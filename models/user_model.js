const db=require('../database');
const bcrypt=require('bcryptjs');

const user={
    getAllUsers(callback){
        return db.query('SELECT * FROM user',callback);
    },
    getOneUser(un, callback){
        return db.query('SELECT * FROM user WHERE username=?',[un], callback);
    },
    addUser(addData, callback){
        bcrypt.hash(addData.password,10,function(err, hashedPassword){
            return db.query('INSERT INTO user VALUES(?,?,?)',[addData.username,addData.fname,hashedPassword],callback);
        })
    },
    updateUser(un,updateData,callback){
        bcrypt.hash(updateData.password,10,function(err,hashedPassword){
            return db.query('UPDATE user SET username=?, fname=?, password=? WHERE username=?',[updateData.username, updateData.fname,hashedPassword, un],callback);
        })
    },
    login(uname, callback){
        console.log(uname);
        return db.query('SELECT password FROM user WHERE username=?',[uname], callback);
    }
}

module.exports=user;