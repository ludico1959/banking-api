import { Router } from 'express';
import { GetBalanceController } from '../app/modules/accounts/useCases/getBalance/GetBalanceController';
import { CreateAccountController } from '../app/modules/accounts/useCases/createAccount/CreateAccountController';
import { ListAccountsController } from '../app/modules/accounts/useCases/listAccountsByPerson/ListAccountsController';

const accountsRoutes = Router();

const createAccountController = new CreateAccountController();
const listAccountsController = new ListAccountsController();
const getBalanceController = new GetBalanceController();

accountsRoutes.post(
  '/people/:peopleId/accounts',
  createAccountController.handle,
);
accountsRoutes.get('/people/:peopleId/accounts', listAccountsController.handle);
accountsRoutes.get('/accounts/:accountId/balance', getBalanceController.handle);

export { accountsRoutes };
