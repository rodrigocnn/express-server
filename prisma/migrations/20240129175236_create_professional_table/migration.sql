-- CreateTable
CREATE TABLE `Professional` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `birth` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `rg` VARCHAR(20) NOT NULL,
    `cpf` VARCHAR(20) NULL,
    `address` VARCHAR(60) NOT NULL,
    `district` VARCHAR(80) NOT NULL,
    `city` VARCHAR(80) NOT NULL,
    `state` VARCHAR(80) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
