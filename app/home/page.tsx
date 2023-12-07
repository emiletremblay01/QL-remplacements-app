import { Remplacement } from "@/types";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import prismadb from "@/lib/prismadb";
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
