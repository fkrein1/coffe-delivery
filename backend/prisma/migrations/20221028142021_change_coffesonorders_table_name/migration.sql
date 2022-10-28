/*
  Warnings:

  - You are about to drop the `CoffesOnOrders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CoffesOnOrders" DROP CONSTRAINT "CoffesOnOrders_coffeeId_fkey";

-- DropForeignKey
ALTER TABLE "CoffesOnOrders" DROP CONSTRAINT "CoffesOnOrders_orderId_fkey";

-- DropTable
DROP TABLE "CoffesOnOrders";

-- CreateTable
CREATE TABLE "coffees_orders" (
    "orderId" TEXT NOT NULL,
    "coffeeId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "coffees_orders_pkey" PRIMARY KEY ("orderId","coffeeId")
);

-- AddForeignKey
ALTER TABLE "coffees_orders" ADD CONSTRAINT "coffees_orders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coffees_orders" ADD CONSTRAINT "coffees_orders_coffeeId_fkey" FOREIGN KEY ("coffeeId") REFERENCES "coffee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
