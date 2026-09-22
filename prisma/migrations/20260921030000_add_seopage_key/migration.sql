-- AlterTable
-- `key` has been in prisma/schema.prisma since commit b888998 (2026-09-15) and is
-- read by app/layout.tsx on every single request (getPageLinksMap()), but no
-- migration ever added the column - it only ever existed on the local dev
-- database (added out-of-band, outside migration history). Any environment
-- whose database was created purely from `prisma migrate deploy` (i.e. a real
-- production database) is missing this column entirely, which throws on every
-- page load once the code path that reads it actually runs.
ALTER TABLE `seopage` ADD COLUMN `key` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `SeoPage_key_key` ON `seopage`(`key`);
