const router = require('express').Router();

router.get('/', (req,res) => {
    //example acess db
    const data = [
        {
            id: 1,
            name: 'Project 1',
            createdAt: '2021-01-01' 
        },
        {
            id: 2,
            name: 'Project 2',
            createdAt: '2021-01-01' 
        },
        {
            id: 3,
            name: 'Project 3',
            createdAt: '2021-01-01' 
        }
    ];
        res.json({
            success : true,
            data //can only return 'data' that equals 'data:data'
        });
}); 

/* router.post('/', (req, res) => {
    res.json(req.body)
}); */

/*Exports*/
module.exports = router