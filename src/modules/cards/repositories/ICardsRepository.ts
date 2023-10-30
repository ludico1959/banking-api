import { Card, Type } from '@prisma/client';

interface ICreateCardDTO {
  type: Type;
  number: string;
  cvv: string;
  accountId: string;
}

interface ICardsRepository {
  findById(id: string): Promise<Card>;
  findByNumber(number: string): Promise<Card>;
  findByType(cardType: Type): Promise<Card>;
  list(): Promise<Card[]>;
  create({ type, number, cvv, accountId }: ICreateCardDTO): Promise<Card>;
}

export { ICreateCardDTO, ICardsRepository };
