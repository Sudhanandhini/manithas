-- RenameColumn (preserves existing data)
ALTER TABLE `customer` CHANGE COLUMN `domain` `driveLink` VARCHAR(191) NULL;
