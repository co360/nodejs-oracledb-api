const Database = require('../database/Database.js');

module.exports = { 

    async getAll(req, res) {
        console.log(req.body);
        const d = await new Database();
        const result = await d.query('SELECT * FROM USUARIO WHERE LOGIN_USUARIO = :LOGIN_USUARIO', req.body);
        res.send(result);        
    }    
}



