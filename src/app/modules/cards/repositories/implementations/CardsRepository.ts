import { Card, Type } from '@prisma/client';
import { prisma } from '../../../../../database/postgresql/PrismaService';
import { ICreateCardDTO, ICardsRepository } from '../ICardsRepository';
import { CardData } from '../../types/CardData';

class CardsRepository implements ICardsRepository {
  async create({
    type,
    number,
    cvv,
    accountId,
    personId,
  }: ICreateCardDTO): Promise<Card> {
    const card = await prisma.card.create({
      data: {
        type,
        number,
        cvv,
        accountId,
        personId,
      },
    });

    return card;
  }

  async listByAccountId(accountId: string): Promise<CardData[]> {
    const cards = await prisma.card.findMany({
      select: {
        id: true,
        number: true,
        cvv: true,
        type: true,
        createdAt: true,
        updatedAt: true,
        accountId: false,
        personId: false,
      },
      where: {
        accountId,
      },
    });

    return cards;
  }

  async listByPersonId(personId: string): Promise<CardData[]> {
    const cards = await prisma.card.findMany({
      select: {
        id: true,
        number: true,
        cvv: true,
        type: true,
        createdAt: true,
        updatedAt: true,
        accountId: false,
        personId: false,
      },
      where: {
        personId,
      },
    });

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
