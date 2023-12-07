import prismadb from "@/lib/prismadb";

export const getAllRemplacements = async () => {
  const remplacements = await prismadb.remplacement.findMany();
  console.log("[getAllRemplacements]", remplacements);
  return remplacements;
};
