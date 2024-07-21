"use client";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { Remplacement } from "@/types";
import Papa from "papaparse";
import { CSVLink } from "react-csv";

export const DownloadButton = ({ data }: { data: Remplacement[] }) => {
  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const csvData = data.map((item) => ({
    "Date de la demande": formatDate(new Date(item.dateDemande)),
    "Date du quart": formatDate(new Date(item.dateQuart)),
    "Heures du quart": item.heuresQuart,
    Poste: item.posteQuart,
    "Nom de l'équipier": item.nomEquipier,
    "Nom de l'equipier remplaçant": item.nomEquipierRemplacant,
    Directeur: item.remplacementEffectuePar,
  }));

  const final = Papa.unparse(csvData);

  return (
    <Button asChild>
      <CSVLink data={final} filename={"remplacements.csv"}>
        Télécharger
        <DownloadIcon className="ml-2 h-4 w-4" />
      </CSVLink>
    </Button>
  );
};

export default DownloadButton;
