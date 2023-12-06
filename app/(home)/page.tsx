import { columns } from "./columns";
import { DataTable } from "./data-table";
import { getAllRemplacements } from "@/actions/get-all-remplacements";

export default async function Home() {
  // const blob = await axios.get("/api");
  // console.log(blob.data);
  const remplacements = await getAllRemplacements();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={remplacements} />
    </div>
  );
}
