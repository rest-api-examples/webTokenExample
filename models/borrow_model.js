const db=require('../database');

const borrow={
    getAllBorrows(callback){
        return db.query('SELECT id_book, DATE_FORMAT(borrow_date,"%d.%m.%Y : %h.%i.%s") as borrow_date FROM borrow',callback);
    }
}

module.exports=borrow;