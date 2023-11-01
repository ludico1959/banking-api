import { Router } from 'express';
import { CreateTransactionController } from '../app/modules/transactions/useCases/createTransaction/CreateTransactionController';
import { ListTransactionsController } from '../app/modules/transactions/useCases/listTransactionByAccount/ListCardsByAccountController';
import { RevertTransactionController } from '../app/modules/transactions/useCases/revertTransaction/RevertTransactionController';

const transactionsRoutes = Router();

const createTransactionController = new CreateTransactionController();
const listTransactionsController = new ListTransactionsController();
const revertTransactionController = new RevertTransactionController();

transactionsRoutes.post(
  '/:accountId/transactions',
  createTransactionController.handle,
);
transactionsRoutes.post(
  '/:accountId/transactions/:transactionId/revert',
  revertTransactionController.handle,
);
transactionsRoutes.get(
  '/:accountId/transactions',
  listTransactionsController.handle,
);

export { transactionsRoutes };
