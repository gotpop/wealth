-- DropForeignKey
ALTER TABLE "TabItem" DROP CONSTRAINT "TabItem_tabId_fkey";

-- AddForeignKey
ALTER TABLE "TabItem" ADD CONSTRAINT "TabItem_tabId_fkey" FOREIGN KEY ("tabId") REFERENCES "Tab"("id") ON DELETE CASCADE ON UPDATE CASCADE;
