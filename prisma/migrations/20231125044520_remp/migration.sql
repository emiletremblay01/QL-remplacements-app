/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Remplacement" (
    "id" SERIAL NOT NULL,
    "nomEquipier" TEXT NOT NULL,
    "dateDemande" TIMESTAMP(3) NOT NULL,
    "recuPar" TEXT NOT NULL,
    "dateQuart" TIMESTAMP(3) NOT NULL,
    "posteQuart" TEXT NOT NULL,
    "heuresQuart" TEXT NOT NULL,
    "raison" TEXT,
    "courrielEnvoye" TEXT NOT NULL,
    "statut" TEXT NOT NULL,
    "nomEquipierRemplacant" TEXT NOT NULL,
    "remplacementEffectuePar" TEXT NOT NULL,

    CONSTRAINT "Remplacement_pkey" PRIMARY KEY ("id")
);
