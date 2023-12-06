import { columns } from "./columns";
import { DataTable } from "./data-table";
import prismadb from "@/lib/prismadb";

export default async function Home() {
  // const blob = await axios.get("/api");
  // console.log(blob.data);
  const remplacements = await prismadb.remplacement.findMany();
  console.log(remplacements);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={remplacements} />
    </div>
  );
}
