"use client";
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

    return Papa.unparse(csvData);
  };

  const handleDownload = () => {
    const csvData = formatDataForCSV(data);
    
    // Create a Blob object for the CSV data
    const blob = new Blob([csvData], { type: 'text/csv' });
    
    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary <a> element to trigger the download
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'data.csv';  // Specify the file name
    document.body.appendChild(a);
    
    // Programmatically click the <a> element to trigger the download
    a.click();
    
    // Cleanup: remove the <a> element and revoke the URL
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <Button onClick={handleDownload}>
      Télécharger
      <DownloadIcon className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default DownloadButton;
