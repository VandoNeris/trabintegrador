import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'

// -- TICKET --
import { CreateTicketController } from './controllers/ticket/CreateTicketController';
import { DetailTicketController } from './controllers/ticket/DetailTicketController';

import { isAuthenticated } from './middlewares/isAuthenticated'
import { ListTicketsController } from './controllers/ticket/ListTicketsController';
import { FinishTicketController } from './controllers/ticket/FinishTicketController';
import { DashTicketController } from './controllers/ticket/DashTicketController';


const router = Router();

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated,  new DetailUserController().handle )

// -- ROTAS TICKET --

router.post('/ticket', isAuthenticated, new CreateTicketController().handle)
router.get('/ticket/detail', isAuthenticated, new DetailTicketController().handle )

router.get('/tickets', isAuthenticated, new ListTicketsController().handle)
router.put('/ticket/finish', isAuthenticated, new FinishTicketController().handle)
router.get('/tickets/totais', isAuthenticated, new DashTicketController().handle)



export { router }; 