"use client";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { Remplacement } from "@/types";
import Papa from "papaparse";
import { CSVLink } from "react-csv";

export const DownloadButton = ({ data }: { data: Remplacement[] }) => {
  const formatDate = (date: Date): string => {
    const formatter = new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'long'
    });

    return formatter.format(date);
  };

  const formatDateWithHour = (date: Date): string => {
    // Create an Intl.DateTimeFormat object for French locale with the desired options
    const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: undefined // Exclude year from the date part
    });

    const timeFormatter = new Intl.DateTimeFormat('fr-FR', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false // Use 24-hour format
    });

    // Format date and time separately
    const formattedDate = dateFormatter.format(date);
    const formattedTime = timeFormatter.format(date);

    // Combine formatted date and time
    return `${formattedDate}, ${formattedTime}`;
  };
  const csvData = data.map((item) => ({
    "Année": (new Date(item.dateDemande)).getFullYear(),
    "Date de la demande": formatDate(new Date(item.dateDemande)),
    "Date du quart": formatDate(new Date(item.dateQuart)),
    "Heures du quart": item.heuresQuart,
    "Poste": item.posteQuart,
    "Nom de l'équipier": item.nomEquipier,
    "Nom de l'equipier remplaçant": item.nomEquipierRemplacant,
    "Directeur": item.remplacementEffectuePar,
    "Date d'envoi du courriel": formatDateWithHour(new Date(item.at(-1))),
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
