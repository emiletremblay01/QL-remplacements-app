import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

// false | 'force-cache' | 0 | number
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nomEquipier,
      dateDemande,
      recuPar,
      dateQuart,
      posteQuart,
      heuresQuart,
    } = body;

    if (!nomEquipier) {
      return new NextResponse("nomEquipier required", { status: 400 });
    }

    if (!dateDemande) {
      return new NextResponse("dateDemande required", { status: 400 });
    }

    if (!recuPar) {
      return new NextResponse("recuPar required", { status: 400 });
    }

    if (!dateQuart) {
      return new NextResponse("dateQuart required", { status: 400 });
    }

    if (!posteQuart) {
      return new NextResponse("posteQuart required", { status: 400 });
    }

    if (!heuresQuart) {
      return new NextResponse("heuresQuart required", { status: 400 });
    }

    const remplacement = await prismadb.remplacement.create({
      data: {
        nomEquipier: nomEquipier,
        dateDemande: dateDemande,
        recuPar: recuPar,
        dateQuart: dateQuart,
        posteQuart: posteQuart,
        heuresQuart: heuresQuart,

        statut: "en attente",
        nomEquipierRemplacant: "",
        remplacementEffectuePar: "",
      },
    });

    return NextResponse.json(remplacement);
  } catch (error) {
    console.log("[REMPLACEMENT_POST]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(req: Request): Promise<NextResponse> {
  try {
    const remplacements = await prismadb.remplacement.findMany();

    return NextResponse.json(remplacements);
  } catch (error) {
    console.log("[REMPLACEMENT_GET]", error);
    return new NextResponse("Internal Server Error!!!", { status: 500 });
  }
}
