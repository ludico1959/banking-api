import { Account } from '@prisma/client';
import { prisma } from '../../../../database/PrismaService';
import { ICreateAccountDTO, IAccountsRepository } from '../IAccountsRepository';
import { AccountData } from '../../types/AccountData';

class AccountsRepository implements IAccountsRepository {
  async create({
    branch,
    account,
    personId,
  }: ICreateAccountDTO): Promise<void> {
    await prisma.account.create({
      data: {
        branch,
        account,
        personId,
      },
    });
  }

  async listByPerson(personId: string): Promise<AccountData[]> {
    const accounts = await prisma.account.findMany({
      where: {
        personId,
      },
      select: {
        id: true,
        branch: true,
        account: true,
        createdAt: true,
        updatedAt: true,
        personId: false,
      },
    });

    return accounts;
  }

  async findByAccountAndBranch(
    account: string,
    branch: string,
  ): Promise<Account> {
    const foundAccount = await prisma.account.findFirst({
      where: {
        account,
        branch,
      },
    });

    return foundAccount;
  }
}

export { AccountsRepository };
