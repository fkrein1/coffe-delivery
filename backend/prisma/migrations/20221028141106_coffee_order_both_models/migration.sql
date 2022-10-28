-- CreateTable
CREATE TABLE "coffee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "coffee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoffesOnOrders" (
    "orderId" TEXT NOT NULL,
    "coffeeId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "CoffesOnOrders_pkey" PRIMARY KEY ("orderId","coffeeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "coffee_name_key" ON "coffee"("name");

-- AddForeignKey
ALTER TABLE "CoffesOnOrders" ADD CONSTRAINT "CoffesOnOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoffesOnOrders" ADD CONSTRAINT "CoffesOnOrders_coffeeId_fkey" FOREIGN KEY ("coffeeId") REFERENCES "coffee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
