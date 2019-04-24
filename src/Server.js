const UsuarioController = require('./UsuarioController.js');

async function run() {
    const c = new UsuarioController();
    const result = c.get();
    console.log(result);
   
}

run();
