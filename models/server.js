const cors = require('cors');
const express = require('express');
class Server{
    constructor()
    {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //Middlewares
        this.middlewares();

        this.routes();
    }

    middlewares()
    {
        //cors
        this.app.use(cors());
        //parseo y lectura del body
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes()
    {
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }

    listen()
    {
        this.app.listen( this.port, ()=>{
            console.log('Servidor corriendo en el puerto: ',this.port);
        });
    }
}

module.exports = Server;