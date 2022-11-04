/*
  Warnings:

  - Made the column `number` on table `order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "order" ALTER COLUMN "number" SET NOT NULL;
