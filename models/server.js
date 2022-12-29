const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.usersPath = '/api/users';
        this.rolesPath = '/api/roles';
        this.tasksPath = '/api/tasks';
        
        //Conectar a base datos
        this.db = require('../database/config');

        //Middlewares
        this.middlewares();

        //Rutas de la aplicación
        this.routes();
    }

    middlewares() {
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/usuarios'));
        this.app.use(this.rolesPath, require('../routes/roles'));
        this.app.use(this.tasksPath, require('../routes/tasks'));
    }

    listen() {
        this.app.listen(this.port)
    }
}

module.exports = Server;