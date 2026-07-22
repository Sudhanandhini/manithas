-- AlterTable
ALTER TABLE `solution` ADD COLUMN `awards` VARCHAR(191) NULL,
    ADD COLUMN `categories` VARCHAR(191) NULL,
    ADD COLUMN `client` VARCHAR(191) NULL,
    ADD COLUMN `ctaLink` VARCHAR(191) NULL,
    ADD COLUMN `ctaText` VARCHAR(191) NULL,
    ADD COLUMN `galleryImageOne` VARCHAR(191) NULL,
    ADD COLUMN `galleryImageThree` VARCHAR(191) NULL,
    ADD COLUMN `galleryImageTwo` VARCHAR(191) NULL,
    ADD COLUMN `subContentText` TEXT NULL,
    ADD COLUMN `subContentTitle` VARCHAR(191) NULL;
