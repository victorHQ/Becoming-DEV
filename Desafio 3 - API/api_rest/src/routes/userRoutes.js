import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deve existir
// router.get('/', loginRequired, userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista um usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
Nomes de funções para controllers

index -> lista todos os usuários; - GET
store/create -> cria um novo usuário; - POST
delete -> apaga um usuários; - DELETE
show -> mostra um usuários; - GET
update -> atualiza um usuário; - PATCH / PUT
*/
