import prismadb from "@/lib/prismadb";

export const getAllRemplacements = async () => {
  const remplacements = await prismadb.remplacement.findMany({
    where: {
      statut: "en attente",
    },
  });
  console.log("[getAllRemplacements]", remplacements);
  return remplacements;
};
