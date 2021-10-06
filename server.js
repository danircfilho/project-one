/*Import*/
const express = require('express');

const bodyParser = require('body-parser);

/*does not need "backend/routes/index.js" (by default will read index file)*/
const api = require('./backend/routes');

const app = express(); 

app.use(bodyParser.json())

/*routes*/
app.get('/', (req,res) => {
    res.json({ 
        'success' : true
    });
});

app.use('/api', api); //"use" - middleware - express

const PORT = 3080;
app.listen(PORT);