import { Router } from 'express';
import { GetBalanceController } from '../app/modules/accounts/useCases/getBalance/GetBalanceController';
import { CreateTransactionController } from '../app/modules/transactions/useCases/createTransaction/CreateTransactionController';
import { ListTransactionsController } from '../app/modules/transactions/useCases/listTransactionByAccount/ListCardsByAccountController';
import { RevertTransactionController } from '../app/modules/transactions/useCases/revertTransaction/RevertTransactionController';
import { ListCardsByAccountController } from '../app/modules/cards/useCases/listCardsByAccount/ListCardsByAccountController';
import { CreateCardController } from '../app/modules/cards/useCases/createCard/CreateCardController';

const accountsRoutes = Router();

const createTransactionController = new CreateTransactionController();
const listTransactionsController = new ListTransactionsController();
const revertTransactionController = new RevertTransactionController();
const getBalanceController = new GetBalanceController();
const createCardController = new CreateCardController();
const listCardsByAccountController = new ListCardsByAccountController();

accountsRoutes.get('/:accountId/balance', getBalanceController.handle);
accountsRoutes.get('/:accountId/cards', listCardsByAccountController.handle);
accountsRoutes.post(':accountId/cards', createCardController.handle);
accountsRoutes.get(
  '/:accountId/transactions',
  listTransactionsController.handle,
);
accountsRoutes.post(
  '/:accountId/transactions',
  createTransactionController.handle,
);
accountsRoutes.post(
  '/:accountId/transactions/:transactionId/revert',
  revertTransactionController.handle,
);

export { accountsRoutes };
