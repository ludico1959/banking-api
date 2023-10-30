/*
  Warnings:

  - You are about to drop the column `method` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "method";

-- DropEnum
DROP TYPE "Method";
