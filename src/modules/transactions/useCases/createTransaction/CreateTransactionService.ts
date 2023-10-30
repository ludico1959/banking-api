import { inject, injectable } from 'tsyringe';
import { Method } from '@prisma/client';
import { AppError } from '../../../../errors/AppError';
import { IAccountsRepository } from '../../../accounts/repositories/IAccountsRepository';
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';
import { TransactionData } from '../../types/TransactionData';

interface IRequest {
  value: number;
  description: string;
  method: string;
}

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
    { value, description, method }: IRequest,
  ): Promise<TransactionData> {
    const account = await this.accountsRepository.findById(accountId);

    if (!account) throw new AppError('Account does not exist.', 404);

    let transactionMethod: Method;
    let newBalance: number;

    switch (method) {
      case 'debit':
        transactionMethod = Method.DEBIT;

        if (Number(account.balance) < value)
          throw new AppError('Insufficient funds.');

        newBalance = Number(account.balance) - value;

        break;
      case 'credit':
        transactionMethod = Method.CREDIT;

        newBalance = Number(account.balance) + value;

        break;
      default:
        throw new AppError('Invalid transaction method.');
    }

    await this.accountsRepository.updateBalance(accountId, newBalance);

    const transaction = await this.transactionsRepository.create({
      value,
      description,
      method: transactionMethod,
      accountId,
    });

    const transactionData = {
      id: transaction.id,
      value: transaction.value,
      description: transaction.description,
      createdAt: transaction.createdAt,
      updatedAt: transaction.updatedAt,
    };

    return transactionData;
  }
}

export { CreateTransactionService };
