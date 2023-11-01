import { Account } from '@prisma/client';
import { AccountData } from '../types/AccountData';

interface ICreateAccountDTO {
  branch: string;
  account: string;
  personId: string;
}

interface IAccountsRepository {
  findByAccountAndBranch(account: string, branch: string): Promise<Account>;
  findById(id: string): Promise<Account>;
  listByPerson(personId: string): Promise<AccountData[]>;
  create({
    branch,
    account,
    personId,
  }: ICreateAccountDTO): Promise<AccountData>;
  updateBalance(accountId: string, value: number): Promise<void>;
  getBalance(accountId: string): Promise<number>;
}

export { ICreateAccountDTO, IAccountsRepository };
