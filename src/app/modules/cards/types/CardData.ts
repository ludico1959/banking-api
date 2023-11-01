import { Type } from '@prisma/client';

export type CardData = {
  id: string;
  cvv: string;
  type: Type;
  createdAt: Date;
  updatedAt: Date;
};
