import { Transaction } from '@prisma/client';
import { TransactionData } from '../types/TransactionData';

interface ICreateTransactionDTO {
  value: number;
  description: string;
  accountId: string;
}

interface ITransactionsRepository {
  findById(id: string): Promise<Transaction>;
  listByAccountId(accountId: string): Promise<TransactionData[]>;
  create({
    value,
    description,
    accountId,
  }: ICreateTransactionDTO): Promise<TransactionData>;
}

export { ICreateTransactionDTO, ITransactionsRepository };
