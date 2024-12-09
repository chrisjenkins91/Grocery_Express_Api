const express = require('express');
const router = express.Router();

//? ex. https: //localhost:4001/items
router.use('/items', require('./api/itemroutes'));

module.exports = router;