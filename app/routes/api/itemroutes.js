const daoClass = require('../../dao/itemsdao')

const dao = new daoClass();

const express = require('express');
const router = express.Router();

//? ex. https://localhost:4001/items/
router.get('/', (req, res) => {
    dao.findAll(req, res);
})

router.get('/category', (req, res) => {
    dao.findItemCategory(req, res);
})

module.exports = router;