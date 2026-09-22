-- AlterTable
ALTER TABLE `Customer`
    ADD COLUMN `websiteExpiryDate` DATETIME(3) NULL,
    ADD COLUMN `websiteReminderSentAt` DATETIME(3) NULL,
    ADD COLUMN `websiteExpiredNotifiedAt` DATETIME(3) NULL;
