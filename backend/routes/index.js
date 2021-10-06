const router = require('express').Router();

const portfolio = require('./portfolio');

router.get('/', (req,res) => {
    res.json({
        success: false,
        message: 'Please do not call /api as it is on the server'
    })
});

router.use('/portfolio', portfolio)

/*Exports*/
module.exports = router