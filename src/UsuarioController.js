const Database = require('./Database.js');

class UsuarioController {

    constructor() {
        
    }

    async get() {
        const d = await new Database();
        const result = await d.query('SELECT * FROM USUARIO');
        console.log(result);
    }
}

module.exports = UsuarioController;

