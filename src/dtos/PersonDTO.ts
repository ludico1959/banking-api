import { Category } from '@prisma/client';

export type PersonDTO = {
  id?: string;
  name: string;
  document: string;
  category?: Category;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
