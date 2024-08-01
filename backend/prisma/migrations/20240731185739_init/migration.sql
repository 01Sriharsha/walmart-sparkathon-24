-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "walmartID" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_walmartID_key" ON "Admin"("walmartID");
