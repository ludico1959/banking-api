import { Card, Type } from '@prisma/client';
import { CardData } from '../types/CardData';

interface ICreateCardDTO {
  type: Type;
  number: string;
  cvv: string;
  accountId: string;
  personId: string;
}

interface ICardsRepository {
  findById(id: string): Promise<Card>;
  findByNumber(number: string): Promise<Card>;
  findByType(cardType: Type): Promise<Card>;
  listByAccountId(accountId: string): Promise<CardData[]>;
  listByPersonId(personId: string): Promise<CardData[]>;
  create({
    type,
    number,
    cvv,
    accountId,
    personId,
  }: ICreateCardDTO): Promise<Card>;
}

export { ICreateCardDTO, ICardsRepository };
