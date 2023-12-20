// TODO: Add loading skeleton
// TODO: Add Statut handling vs Courriel envoyé
// TODO: Add toggle for couriel envoyé inside datatable
// TODO: Change Affichage de colonnes columns names
// TODO: Clean up code imports

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

import { getLatestRemplacements } from "@/lib/utils";

export const revalidate = 0;
export default async function HomePage() {
  const remplacements = await getLatestRemplacements();
  return (
    <div className="container mx-auto py-10 space-y-2">
      <h1 className=" font-semibold text-muted-foreground text-lg">
        Remplacements des jours à venir
      </h1>
      <DataTable columns={columns} data={remplacements} />
    </div>
  );
}
