import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IAccountsRepository } from '../../../accounts/repositories/IAccountsRepository';
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';
import { TransactionData } from '../../types/TransactionData';

interface IRequest {
  value: number;
  description: string;
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
    { value, description }: IRequest,
  ): Promise<TransactionData> {
    const accountExists = await this.accountsRepository.findById(accountId);

    if (!accountExists) throw new AppError('Account does not exists.', 404);

    if (Number(accountExists.balance) < value)
      throw new AppError('Insufficient funds.');

    const newBalance = Number(accountExists.balance) - value;

    await this.accountsRepository.updateBalance(accountId, newBalance);

    const transaction = await this.transactionsRepository.create({
      value,
      description,
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
