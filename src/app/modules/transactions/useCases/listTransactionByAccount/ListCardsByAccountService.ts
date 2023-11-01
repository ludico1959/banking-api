import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { IAccountsRepository } from '../../../accounts/repositories/IAccountsRepository';
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository';
import { TransactionData } from '../../types/TransactionData';

@injectable()
class ListTransactionsService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  async execute(accountId: string): Promise<TransactionData[]> {
    const accountExists = await this.accountsRepository.findById(accountId);

    if (!accountExists) throw new AppError('Account not found.', 404);

    const transactions =
      await this.transactionsRepository.listByAccountId(accountId);

    if (transactions.length === 0)
      throw new AppError('Transactions not found.', 404);

    return transactions;
  }
}

export { ListTransactionsService };
