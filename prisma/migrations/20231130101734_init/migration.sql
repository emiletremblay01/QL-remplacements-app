/*
  Warnings:

  - The primary key for the `Remplacement` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Remplacement" DROP CONSTRAINT "Remplacement_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Remplacement_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Remplacement_id_seq";
