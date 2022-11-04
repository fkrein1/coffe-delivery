/*
  Warnings:

  - You are about to drop the column `cep` on the `order` table. All the data in the column will be lost.
  - Added the required column `zip` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" DROP COLUMN "cep",
ADD COLUMN     "zip" TEXT NOT NULL;
