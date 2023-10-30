import { inject, injectable } from 'tsyringe';
import { Method } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';
import { IAccountsRepository } from '../../../accounts/repositories/IAccountsRepository';
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';
import { TransactionData } from '../../types/TransactionData';

@injectable()
class CreateTransactionService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  async execute(
    accountId: string,
    transactionId: string,
    description: string,
  ): Promise<TransactionData> {
    const account = await this.accountsRepository.findById(accountId);

    if (!account) throw new AppError('Account does not exist.', 404);

    const transaction =
      await this.transactionsRepository.findById(transactionId);

    if (!transaction) throw new AppError('Transaction does not exist.', 404);

    let transactionMethod: Method;
    let newBalance: number;

    switch (transaction.method) {
      case Method.DEBIT:
        transactionMethod = Method.CREDIT;

        newBalance = Number(account.balance) + Number(transaction.value);

        break;
      case Method.CREDIT:
        transactionMethod = Method.DEBIT;

        if (account.balance < transaction.value)
          throw new AppError(
            'Insuficient funds for reverting transaction.',
            404,
          );

        newBalance = Number(account.balance) - Number(transaction.value);

        break;
      default:
        throw new AppError('Invalid transaction method.');
    }

    await this.accountsRepository.updateBalance(accountId, newBalance);

    const revertedTransaction = await this.transactionsRepository.create({
      value: Number(transaction.value),
      description,
      method: transactionMethod,
      accountId,
    });

    const transactionData = {
      id: revertedTransaction.id,
      value: revertedTransaction.value,
      description: revertedTransaction.description,
      createdAt: revertedTransaction.createdAt,
      updatedAt: revertedTransaction.updatedAt,
    };

    return transactionData;
  }
}

export { CreateTransactionService };
