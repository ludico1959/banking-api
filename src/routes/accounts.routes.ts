import { Router } from 'express';
import { CreateAccountController } from '../modules/accounts/useCases/createAccount/CreateAccountController';

const accountsRoutes = Router();

const createAccountController = new CreateAccountController();

accountsRoutes.post('/:peopleId/accounts', createAccountController.handle);

export { accountsRoutes };
