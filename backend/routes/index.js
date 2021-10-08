/* The index.js file is the gateway that manages all requests */
const router = require('express').Router();
const portfolio = require('./portfolio');
require('../db/mongodbConnection'); 

/* Route Management - call only /api */
router.get('/', (req,res) => {
    res.json({
        success: false,
        message: 'Please do not call /api as it is on the server'
    })
});

/* call only /api/portfolio */
router.use('/portfolio', portfolio);

/* Exports */
module.exports = router