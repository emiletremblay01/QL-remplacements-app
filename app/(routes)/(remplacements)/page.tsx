// TODO: Add loading skeleton
// TODO: Add Statut handling vs Courriel envoyé
// TODO: Add toggle for couriel envoyé inside datatable
// TODO: Change Affichage de colonnes columns names
// TODO: Clean up code imports

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

import { getRemplacements } from "@/lib/utils";

export const revalidate = 0;
export default async function HomePage() {
  const remplacements = await getRemplacements();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={remplacements} />
    </div>
  );
}
