const {Router} = require('express');

const rolesRouter = Router();

const {rolesGet, rolesPost, rolesGetById, rolesPut, rolesDelete} = require('../controllers/roles');

rolesRouter.get('/', rolesGet);

rolesRouter.get('/:id', rolesGetById);

rolesRouter.post('/', rolesPost);

rolesRouter.put('/:id', rolesPut);

rolesRouter.delete('/:id', rolesDelete);

module.exports = rolesRouter;


