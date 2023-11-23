import { Remplacement } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import useContext from "@/hooks/useContext";
async function getData(): Promise<Remplacement[]> {
  return [];
}
const remplacements: Remplacement[] = [
  {
    id: "1",
    nomEquipier: "John Doe",
    dateDemande: new Date("2023-10-31"),
    recuPar: "Supervisor",
    dateQuart: new Date("2023-10-31"),
    posteQuart: "Front Desk",
    heuresQuart: "8 hours",
    raison: "Vacation",
    courrielEnvoye: "oui",
    statut: "en attente",
    nomEquipierRemplacant: "Jane Smith",
    remplacementEffectuePar: "Manager",
  },
  {
    id: "2",
    nomEquipier: "Alice Johnson",
    dateDemande: new Date(),
    recuPar: "Manager",
    dateQuart: new Date(),
    posteQuart: "Kitchen",
    heuresQuart: "6 hours",
    courrielEnvoye: "non",
    statut: "accepté",
    nomEquipierRemplacant: "Bob Brown",
    remplacementEffectuePar: "Supervisor",
  },
  {
    id: "3",
    nomEquipier: "Eva Williams",
    dateDemande: new Date("2024-01-22"),
    recuPar: "Supervisor",
    dateQuart: new Date("2024-01-22"),
    posteQuart: "Security",
    heuresQuart: "12 hours",
    raison: "Sick Leave",
    statut: "refusé",
    courrielEnvoye: "oui",
    nomEquipierRemplacant: "Chris Davis",
    remplacementEffectuePar: "Manager",
  },
];
export default async function Home() {
  // const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={remplacements} />
    </div>
  );
}
