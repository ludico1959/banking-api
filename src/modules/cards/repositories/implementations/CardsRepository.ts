import { Card, Type } from '@prisma/client';
import { prisma } from '../../../../database/PrismaService';
import { ICreateCardDTO, ICardsRepository } from '../ICardsRepository';

class CardsRepository implements ICardsRepository {
  async create({
    type,
    number,
    cvv,
    accountId,
  }: ICreateCardDTO): Promise<Card> {
    const card = await prisma.card.create({
      data: {
        type,
        number,
        cvv,
        accountId,
      },
    });

    return card;
  }

  async list(): Promise<Card[]> {
    const cards = await prisma.card.findMany();

    return cards;
  }

  async findByNumber(number: string): Promise<Card> {
    const card = await prisma.card.findUnique({
      where: {
        number,
      },
    });

    return card;
  }

  async findById(id: string): Promise<Card> {
    const card = await prisma.card.findUnique({
      where: {
        id,
      },
    });

    return card;
  }

  async findByType(typeCard: Type): Promise<Card> {
    const card = await prisma.card.findFirst({
      where: {
        type: typeCard,
      },
    });

    return card;
  }
}

export { CardsRepository };
