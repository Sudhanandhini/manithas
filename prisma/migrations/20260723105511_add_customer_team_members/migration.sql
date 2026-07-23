-- AlterTable
ALTER TABLE `customer` ADD COLUMN `teamOwnerId` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `Customer_teamOwnerId_idx` ON `Customer`(`teamOwnerId`);

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_teamOwnerId_fkey` FOREIGN KEY (`teamOwnerId`) REFERENCES `Customer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
