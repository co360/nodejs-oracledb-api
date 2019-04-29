const express = require('express');
const routes = express.Router();


const UsuarioController = require('./controller/UsuarioController.js');
const ComprasAcimaDezMilController = require('./controller/ComprasAcimaDezMilController.js');

routes.post('/usuarios', UsuarioController.getAll);

routes.post('/compras', ComprasAcimaDezMilController.getAll);



module.exports = routes;