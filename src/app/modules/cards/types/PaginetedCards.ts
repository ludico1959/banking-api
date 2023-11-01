import { CardData } from './CardData';

export type PaginetedCards = {
  id: string;
  branch: string;
  account: string;
  cards: CardData[];
  createdAt: Date;
  updatedAt: Date;
};
