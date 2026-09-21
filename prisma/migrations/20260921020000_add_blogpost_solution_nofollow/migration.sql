-- AlterTable
ALTER TABLE `blogpost` ADD COLUMN `nofollow` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `solution` ADD COLUMN `nofollow` BOOLEAN NOT NULL DEFAULT false;
