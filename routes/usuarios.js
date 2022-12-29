const { Router } = require('express');
const {usuariosGet, usuariosPost, usuariosGetById, usuariosPut, usuariosDelete} = require('../controllers/usuarios');

const usersRouter = Router();

usersRouter.get('/', usuariosGet);  

usersRouter.get('/:id', usuariosGetById);

usersRouter.post('/', usuariosPost);

usersRouter.put('/:id', usuariosPut);

usersRouter.delete('/:id', usuariosDelete);

module.exports = usersRouter;




