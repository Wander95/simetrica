const { Router } = require('express');
const UserRouter = require('./user.routes');


const RootRouter = Router();


RootRouter.use(UserRouter)

module.exports = RootRouter;