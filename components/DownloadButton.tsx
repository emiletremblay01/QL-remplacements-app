"use client";
import { convertToCSV } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { Remplacement } from "@/types";
import Papa from 'papaparse';

export const DownloadButton = ({
  data,
  fileName,
}: {
  data: Remplacement[];
  fileName: string;
}) => {
  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatDataForCSV = (data: Remplacement[]) => {
    // Format data for PapaParse
    const csvData = data.map(item => ({
      "Date de la demande": formatDate(new Date(item.dateDemande)),
      "Date du quart": formatDate(new Date(item.dateQuart)),
      "Heures du quart": item.heuresQuart,
      "Poste": item.posteQuart,
      "Nom de l'equipier": item.nomEquipier,
      "Nom de l'equipier remplaçant": item.nomEquipierRemplacant,
      "Directeur": item.remplacementEffectuePar,
    }));

    return Papa.unparse(csvData, {
      delimiter: ",",
      header: true,
      encoding: "utf-8",
    });
  };

  const handleDownload = () => {
    const csvData = formatDataForCSV(data);

    // Create a Blob with UTF-8 encoding
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);

    // Create a link element and trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Revoke the Object URL to free up resources
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button onClick={handleDownload}>
      Télécharger
      <DownloadIcon className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default DownloadButton;
