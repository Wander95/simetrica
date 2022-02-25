const { Router } = require('express');
const userController = require('../controllers/user.controller');
const { postMiddleware,putMiddleware } = require('../validators/user.validator');


const UserRouter = Router();

UserRouter.get('/user', userController.getAll)
UserRouter.get('/user/:userId',userController.getOne)
UserRouter.post('/user',postMiddleware() , userController.create)
UserRouter.put('/user/:userId',putMiddleware(), userController.update)
UserRouter.delete('/user/:userId', userController.delete)

module.exports = UserRouter;