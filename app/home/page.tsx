import { revalidatePath } from "next/cache";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { getAllRemplacements } from "@/actions/get-all-remplacements";

export default async function HomePage() {
  revalidatePath("/home");
  console.log("Home page revalidated");
  const remplacements = await getAllRemplacements();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={remplacements} />
    </div>
  );
}
