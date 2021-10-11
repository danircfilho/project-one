/*Import*/
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

/* does not need "backend/routes/index.js" (by default will read index file) */
const api = require('./backend/routes');

const app = express(); 

app.use(bodyParser.json());

/* Routes */
app.get('/', (req,res) => {
    res.json({ 
        'success' : true
    });
});

/* "use" - middleware - express */
app.use('/api', api); 

const PORT = process.env.PORT;
app.listen(PORT);