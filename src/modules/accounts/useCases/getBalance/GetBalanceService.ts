import { inject, injectable } from 'tsyringe';
import { IAccountsRepository } from '../../repositories/IAccountsRepository';
import { AppError } from '../../../../errors/AppError';
import { BalanceData } from '../../types/BalanceData';

@injectable()
class GetBalanceService {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  async execute(accountId: string): Promise<BalanceData> {
    const account = await this.accountsRepository.findById(accountId);

    if (!account) throw new AppError('Account not found.', 404);

    const currentBalance = await this.accountsRepository.getBalance(accountId);

    const balanceData = {
      balance: currentBalance,
    };

    return balanceData;
  }
}

export { GetBalanceService };
