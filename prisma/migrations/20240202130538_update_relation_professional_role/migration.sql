-- AlterTable
ALTER TABLE `professional` ADD COLUMN `roleId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Professional` ADD CONSTRAINT `Professional_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
