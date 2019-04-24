const express = require('express');
const UsuarioController = require('./UsuarioController.js');

const app = express();

async function run(req, res) {
    const c = new UsuarioController();
    const result = await c.get();
        
    res.send(result);   
}

app.get('/', run);

app.listen(3001);
