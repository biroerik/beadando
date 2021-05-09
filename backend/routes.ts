import { Router } from 'express';
import { CategoryController } from './src/controller/category.controller';
import { DvdController } from './src/controller/dvd.controller';
import { UserController } from './src/controller/user.controller';

export function getRouter() {
    const router = Router();

    const userController = new UserController();
    const dvdController = new DvdController();
    const categoryController = new CategoryController();

    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', userController.update);
    router.delete('/users/:id', userController.delete);

    router.get('/dvds', dvdController.getAll);
    router.get('/dvds/:id', dvdController.getOne);
    router.post('/dvds', dvdController.create);
    router.put('/dvds', dvdController.update);
    router.delete('/dvds/:id', dvdController.delete);

    router.get('/categories', categoryController.getAll);
    router.get('/categories/:id', categoryController.getOne);
    router.post('/categories', categoryController.create);
    router.put('/categories', categoryController.update);
    router.delete('/categories/:id', categoryController.delete);

    return router;
}
