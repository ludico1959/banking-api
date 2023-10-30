import { prisma } from '../../../../database/PrismaService';
import {
  ICreateTransactionDTO,
  ITransactionsRepository,
} from '../ITransactionsRepository';
import { TransactionData } from '../../types/TransactionData';
import { Transaction } from '@prisma/client';

class TransactionsRepository implements ITransactionsRepository {
  async create({
    value,
    description,
    accountId,
  }: ICreateTransactionDTO): Promise<TransactionData> {
    const transaction = await prisma.transaction.create({
      data: {
        value,
        description,
        accountId,
      },
    });

    return transaction;
  }

  async listByAccountId(accountId: string): Promise<TransactionData[]> {
    const transactions = await prisma.transaction.findMany({
      select: {
        id: true,
        value: true,
        description: true,
        createdAt: true,
        updatedAt: true,
        accountId: false,
      },
      where: {
        accountId,
      },
    });

    return transactions;
  }

  async findById(id: string): Promise<Transaction> {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id,
      },
    });

    return transaction;
  }
}

export { TransactionsRepository };
