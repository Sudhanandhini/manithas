-- AlterTable
ALTER TABLE `Ticket` ADD COLUMN `ticketNumber` INT NULL;

-- Backfill existing rows in creation order, so ticket #1 is the very first
-- ticket ever raised (across all customers), not per-customer.
SET @rownum := 0;
UPDATE `Ticket` SET `ticketNumber` = (@rownum := @rownum + 1) ORDER BY `createdAt` ASC, `id` ASC;

-- Make it required and auto-incrementing for all future rows. InnoDB
-- initializes the AUTO_INCREMENT counter to MAX(ticketNumber) + 1 from the
-- backfilled data above, so new tickets continue the same sequence.
ALTER TABLE `Ticket` MODIFY COLUMN `ticketNumber` INT NOT NULL AUTO_INCREMENT,
    ADD UNIQUE INDEX `Ticket_ticketNumber_key`(`ticketNumber`);
