import { inject, injectable } from 'tsyringe';
import { IAccountsRepository } from '../../repositories/IAccountsRepository';
import { AccountData } from '../../types/AccountData';
import { IPeopleRepository } from '../../../people/repositories/IPeopleRepository';
import { AppError } from '../../../../errors/AppError';

@injectable()
class ListAccountsService {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
    @inject('PeopleRepository')
    private peopleRepository: IPeopleRepository,
  ) {}

  async execute(peopleId: string): Promise<AccountData[]> {
    const personExists = await this.peopleRepository.findById(peopleId);

    if (!personExists) throw new AppError('Person not found.', 404);

    const accounts = await this.accountsRepository.listByPerson(peopleId);

    if (accounts.length === 0) throw new AppError('Accounts not found.', 404);

    return accounts;
  }
}

export { ListAccountsService };
