import { Method, Transaction } from '@prisma/client';
import { TransactionData } from '../types/TransactionData';

interface ICreateTransactionDTO {
  value: number;
  description: string;
  method: Method;
  accountId: string;
}

interface ITransactionsRepository {
  findById(id: string): Promise<Transaction>;
  listByAccountId(accountId: string): Promise<TransactionData[]>;
  create({
    value,
    description,
    method,
    accountId,
  }: ICreateTransactionDTO): Promise<TransactionData>;
  updateReverseStatus(id: string): Promise<void>;
}

export { ICreateTransactionDTO, ITransactionsRepository };
