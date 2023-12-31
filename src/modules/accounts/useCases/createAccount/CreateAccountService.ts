import { inject, injectable } from 'tsyringe';
import { IAccountsRepository } from '../../repositories/IAccountsRepository';
import { AppError } from '../../../../errors/AppError';
import { IPeopleRepository } from '../../../people/repositories/IPeopleRepository';
import {
  validateAccount,
  validateBranchAndCvv,
} from '../../../../utils/validatorRegex';
import { AccountData } from '../../types/AccountData';

interface IRequest {
  branch: string;
  account: string;
}

@injectable()
class CreateAccountService {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
    @inject('PeopleRepository')
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute(
    peopleId: string,
    { branch, account }: IRequest,
  ): Promise<AccountData> {
    const personExists = await this.peopleRepository.findById(peopleId);

    if (!personExists) throw new AppError('Person not found.', 404);

    if (!validateAccount(account))
      throw new AppError('Invalid account number.');

    if (!validateBranchAndCvv(branch))
      throw new AppError('Invalid branch number.');

    const accountAlreadyExists =
      await this.accountsRepository.findByAccountAndBranch(account, branch);

    if (accountAlreadyExists) throw new AppError('Account already exists.');

    const createdAccount = await this.accountsRepository.create({
      branch,
      account,
      personId: peopleId,
    });

    const accountData = {
      id: createdAccount.id,
      branch: createdAccount.branch,
      account: createdAccount.account,
      createdAt: createdAccount.createdAt,
      updatedAt: createdAccount.updatedAt,
    };

    return accountData;

    return createdAccount;
  }
}

export { CreateAccountService };
