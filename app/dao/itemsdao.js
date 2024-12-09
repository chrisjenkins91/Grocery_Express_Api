const pool = require('../config/dbconfig');


class ItemDao {

    constructor() {
        this.pool = pool
    }


    findAll(req, res) {
        pool.query('SELECT * FROM items', (err, rows) => {
            if(err) {
                console.log(err)
            } else {
                console.log(rows)
                res.send(rows)
            }
        })
    }

    findItemCategory(req, res) {
        pool.query('SELECT items.name AS item_name, category.name AS category_name FROM (items INNER JOIN category ON items.category = category.id);', (err, rows) => {
            if(err) {
                console.log(err)
            } else {
                console.log(rows)
                res.send(rows);
            }
        })
    }


}

module.exports = ItemDao;