import { Router } from 'express';
import { CreateAccountController } from '../modules/accounts/useCases/createAccount/CreateAccountController';
import { ListAccountsController } from '../modules/accounts/useCases/listAccountsByPerson/ListAccountsController';
import { GetBalanceController } from '../modules/accounts/useCases/getBalance/GetBalanceController';

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
