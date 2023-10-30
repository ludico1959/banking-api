import { Router } from 'express';
import { CreateAccountController } from '../modules/accounts/useCases/createAccount/CreateAccountController';
import { ListAccountsController } from '../modules/accounts/useCases/listAccountsByPerson/ListAccountsController';

const accountsRoutes = Router();

const createAccountController = new CreateAccountController();
const listAccountsController = new ListAccountsController();

accountsRoutes.post('/:peopleId/accounts', createAccountController.handle);
accountsRoutes.get('/:peopleId/accounts', listAccountsController.handle);

export { accountsRoutes };
