/*
  Warnings:

  - Added the required column `password` to the `people` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "people" ADD COLUMN     "password" TEXT NOT NULL;
