import { Type } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { ICardsRepository } from '../../repositories/ICardsRepository';
import { AppError } from '../../../../errors/AppError';
import {
  validateBranchAndCvv,
  validateCardNumber,
} from '../../../../utils/validatorRegex';
import { IAccountsRepository } from '../../../accounts/repositories/IAccountsRepository';
import { CardData } from '../../types/CardData';

interface IRequest {
  cvv: string;
  number: string;
  type: string;
}

@injectable()
class CreateCardService {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository,
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  async execute(
    accountId: string,
    { cvv, number, type }: IRequest,
  ): Promise<CardData> {
    if (!validateBranchAndCvv(cvv)) throw new AppError('Invalid CVV number.');

    if (!validateCardNumber(number)) throw new AppError('Invalid card number.');

    const accountExists = await this.accountsRepository.findById(accountId);

    if (!accountExists) throw new AppError('Account does not exist.', 404);

    const cardAlreadyExists = await this.cardsRepository.findByNumber(number);

    if (cardAlreadyExists) throw new AppError('Card already exists.');

    let typeCard: Type;

    switch (type) {
      case 'physical':
        typeCard = Type.PHYSICAL;
        break;
      case 'virtual':
        typeCard = Type.VIRTUAL;
        break;
      default:
        throw new AppError('Invalid card type.');
    }

    if (typeCard === Type.PHYSICAL) {
      const physicalCardAlreadyExists =
        await this.cardsRepository.findByType(typeCard);

      if (physicalCardAlreadyExists)
        throw new AppError('Physical card already exists.');
    }

    const card = await this.cardsRepository.create({
      cvv,
      number,
      type: typeCard,
      accountId,
      personId: accountExists.personId,
    });

    const cardData = {
      id: card.id,
      cvv: card.cvv,
      number: card.number.slice(15, 19),
      type: card.type,
      createdAt: card.createdAt,
      updatedAt: card.updatedAt,
    };

    return cardData;
  }
}

export { CreateCardService };
