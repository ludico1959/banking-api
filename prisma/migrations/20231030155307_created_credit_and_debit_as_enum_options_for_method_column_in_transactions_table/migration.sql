/*
  Warnings:

  - Added the required column `method` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Method" AS ENUM ('CREDIT', 'DEBIT');

-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "balance" SET DEFAULT 0.00;

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "method" "Method" NOT NULL;
