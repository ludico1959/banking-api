import { Router } from 'express';
import { CreateTransactionController } from '../modules/transactions/useCases/createTransaction.ts/CreateTransactionController';

const transactionsRoutes = Router();

const createTransactionController = new CreateTransactionController();
// const listTransactionsController = new ListTransactionsController();

transactionsRoutes.post(
  '/:accountId/transactions',
  createTransactionController.handle,
);
// transactionsRoutes.get(
//   '/:accountId/transactions',
//   listTransactionsController.handle,
// );

export { transactionsRoutes };
