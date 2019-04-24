const Database = require('./Database.js');

class UsuarioController { 

    async get() {
        const d = await new Database();
        const result = await d.query('SELECT * FROM USUARIO');
        return result;
    }
}

module.exports = UsuarioController;

