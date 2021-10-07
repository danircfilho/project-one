/*Import*/
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

/*does not need "backend/routes/index.js" (by default will read index file)*/
const api = require('./backend/routes');

const app = express(); 

//Read file .env (test)
/* console.log('Test .env = Name of test file mongo DB is: ', process.env.MONGO_TEST); */

app.use(bodyParser.json());

/*routes*/
app.get('/', (req,res) => {
    res.json({ 
        'success' : true
    });
});

app.use('/api', api); //"use" - middleware - express

const PORT = process.env.PORT;
app.listen(PORT);