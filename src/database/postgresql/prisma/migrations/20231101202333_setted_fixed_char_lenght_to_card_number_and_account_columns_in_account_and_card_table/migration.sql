/*
  Warnings:

  - You are about to alter the column `account` on the `accounts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(9)`.
  - You are about to alter the column `number` on the `cards` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(19)`.

*/
-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "account" SET DATA TYPE CHAR(9);

-- AlterTable
ALTER TABLE "cards" ALTER COLUMN "number" SET DATA TYPE CHAR(19);
