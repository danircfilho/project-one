/*Import*/
const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.json({
        'success' : true
    });
});

app.get('/testdb', (req,res) => {
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
            data: data //can only return date that equals date:date
        });
}); 

const PORT = 3080;
app.listen(PORT);