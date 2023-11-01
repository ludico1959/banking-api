import { inject, injectable } from 'tsyringe';
import { ICardsRepository } from '../../repositories/ICardsRepository';
import { AppError } from '../../../../errors/AppError';
import { IAccountsRepository } from '../../../accounts/repositories/IAccountsRepository';
import { PaginetedCards } from '../../types/PaginetedCards';

@injectable()
class ListCardsByAccountService {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository,
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  async execute(accountId: string): Promise<PaginetedCards> {
    const cards = await this.cardsRepository.listByAccountId(accountId);

    if (cards.length === 0) throw new AppError('Cards not found.', 404);

    const account = await this.accountsRepository.findById(accountId);

    const paginetedCards = {
      id: account.id,
      branch: account.branch,
      account: account.account,
      cards,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
    };

    return paginetedCards;
  }
}

export { ListCardsByAccountService };
