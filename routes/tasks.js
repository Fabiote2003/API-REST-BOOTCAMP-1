const {Router} = require('express');

const tasksRouter = Router();

const {tasksGet, tasksPost, tasksGetById, tasksPut, tasksDelete} = require('../controllers/tasks');

tasksRouter.get('/', tasksGet);

tasksRouter.get('/:id', tasksGetById);

tasksRouter.post('/', tasksPost);

tasksRouter.put('/:id', tasksPut);

tasksRouter.delete('/:id', tasksDelete);

module.exports = tasksRouter;