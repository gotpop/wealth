-- CreateTable
CREATE TABLE "Tab" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Tab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TabItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "imageTitle" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageWidth" TEXT NOT NULL,
    "imageHeight" TEXT NOT NULL,
    "tabId" TEXT NOT NULL,

    CONSTRAINT "TabItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TabItem" ADD CONSTRAINT "TabItem_tabId_fkey" FOREIGN KEY ("tabId") REFERENCES "Tab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
