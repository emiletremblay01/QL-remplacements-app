"use client";
import { convertToCSV } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

export const DownloadButton = ({
  data,
  fileName,
}: {
  data: unknown[];
  fileName: string;
}) => {
  const handleDownload = () => {
    const csvData = convertToCSV(data);

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
