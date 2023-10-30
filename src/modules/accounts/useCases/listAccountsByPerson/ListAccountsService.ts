import { inject, injectable } from 'tsyringe';
import { IAccountsRepository } from '../../repositories/IAccountsRepository';
import { AccountData } from '../../types/AccountData';

@injectable()
class ListAccountsService {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  async execute(peopleId: string): Promise<AccountData[]> {
    const accounts = await this.accountsRepository.listByPerson(peopleId);

    return accounts;
  }
}

export { ListAccountsService };
