const router = require('express').Router();
const Portfolio = require('../models/Portfolio'); 

router.get('/', async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne({
            /* slug: req.params.slug */
        })

        res.json ({
            success : true,
            data: portfolio
        })

    }catch(err) {
        res.json ({
            success: false,
            message: err
        })
    }    
}); 

router.post('/', async (req, res) => {
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    });
  
    try {
        const savedPortfolio = await Portfolio.save()
        res.json ({
            success: true,
            data: savedPortfolio
        })

    }catch(err) {
        res,json ({
            success: false,
            message: err
        })
    }
});

/* Update */
/* router.patch('/:slug', async (req, res) => {    
    try {
        const updatePortfolio = await Portfolio.updateOne(
            {
                slug: req.params.slug
            },
            {
                title: req.body.title,
                require: req.body.require
        })

        res.json ({
            success: true,
        })

    }catch(err) {
        res.json ({
            success: false,
            message: err
        })
    }
}); */

/*Exports*/
module.exports = router

