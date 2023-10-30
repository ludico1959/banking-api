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
  list(): Promise<Card[]>;
  create({ type, number, cvv, accountId }: ICreateCardDTO): Promise<void>;
}

export { ICreateCardDTO, ICardsRepository };
