/*
  Warnings:

  - You are about to drop the column `number` on the `accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[account]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `account` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "accounts_number_key";

-- AlterTable
ALTER TABLE "accounts" DROP COLUMN "number",
ADD COLUMN     "account" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "accounts_account_key" ON "accounts"("account");
