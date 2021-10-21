/*Import*/
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./backend/routes');

const app = express(); 

app.use(bodyParser.json());

/* //Retorna o acesso do banco de dados - utilizado para testar a conexão
app.get('/', (req,res) => {
    res.json({ 
        'success' : true
    });
}); */

// A ordem agora é fundamental!!!
app.use('/api', api); 

//Servidor se comunicar com o frontend
if ( process.env.NODE.ENV === 'production' ) {

    //Express entregar os assets de produção (exemplo: mains.js ou css.js da pasta build/static do frontend)
    app.use (express.static('frontend/build'));
    
    //Express entregar o index.html (caminho)
    const path = require('path')
    app.get ('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT;
app.listen(PORT);