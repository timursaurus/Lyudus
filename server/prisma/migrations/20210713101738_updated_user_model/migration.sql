/*
  Warnings:

  - Added the required column `alias` to the `Community` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `community` ADD COLUMN `alias` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `profile` ADD COLUMN `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `password` VARCHAR(191) NOT NULL;
