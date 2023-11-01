import { prisma } from '../../../../../database/postgresql/PrismaService';
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
    method,
    accountId,
  }: ICreateTransactionDTO): Promise<TransactionData> {
    const transaction = await prisma.transaction.create({
      data: {
        value,
        description,
        method,
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

  async updateReverseStatus(id: string): Promise<void> {
    await prisma.transaction.update({
      where: {
        id,
      },
      data: {
        wasReversed: true,
      },
    });
  }
}

export { TransactionsRepository };
