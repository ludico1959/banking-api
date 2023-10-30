import { inject, injectable } from 'tsyringe';
import { ICardsRepository } from '../../repositories/ICardsRepository';
import { AppError } from '../../../../errors/AppError';
import { CardData } from '../../types/CardData';

@injectable()
class ListCardsByPersonService {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository,
  ) {}

  async execute(peopleId: string): Promise<CardData[]> {
    const cards = await this.cardsRepository.listByPersonId(peopleId);

    if (cards.length === 0) throw new AppError('Cards not found.', 404);

    return cards;
  }
}

export { ListCardsByPersonService };
