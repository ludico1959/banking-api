/*
  Warnings:

  - You are about to drop the column `personId` on the `transactions` table. All the data in the column will be lost.
  - Added the required column `personId` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_personId_fkey";

-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "personId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "personId",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_personId_fkey" FOREIGN KEY ("personId") REFERENCES "people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
