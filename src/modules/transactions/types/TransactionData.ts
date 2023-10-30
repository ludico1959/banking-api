import { Decimal } from '@prisma/client/runtime/library';

export type TransactionData = {
  id: string;
  value: Decimal;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};
