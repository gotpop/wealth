/*
  Warnings:

  - The `imageWidth` column on the `TabItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `imageHeight` column on the `TabItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "TabItem" DROP COLUMN "imageWidth",
ADD COLUMN     "imageWidth" INTEGER,
DROP COLUMN "imageHeight",
ADD COLUMN     "imageHeight" INTEGER;
