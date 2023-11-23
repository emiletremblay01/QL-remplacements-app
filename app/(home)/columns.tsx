"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Remplacement } from "@/types";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Remplacement>[] = [
  {
    accessorKey: "nomEquipier",
    header: "Nom de l'équipier",
  },
  {
    accessorKey: "dateDemande",
    header: "Date de la demande",
    cell: ({ row }) => {
      const formatter = new Intl.DateTimeFormat("fr-CA", {
        day: "2-digit",
        month: "short",
      });
      const formatted = formatter.format(row.getValue("dateDemande") as Date);

      return <div className="">{formatted}</div>;
    },
  },
  {
    accessorKey: "recuPar",
    header: "Reçu par",
  },
  {
    accessorKey: "dateQuart",
    header: "Date du quart",
    cell: ({ row }) => {
      const formatter = new Intl.DateTimeFormat("fr-CA", {
        day: "2-digit",
        month: "short",
      });
      const formatted = formatter.format(row.getValue("dateQuart") as Date);

      return <div className="">{formatted}</div>;
    },
  },
  {
    accessorKey: "posteQuart",
    header: "Poste du quart",
  },
  {
    accessorKey: "heuresQuart",
    header: "Heures du quart",
  },
  {
    accessorKey: "raison",
    header: "Raison",
  },
  {
    accessorKey: "courrielEnvoye",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Courriel envoyé?
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const statut = row.getValue("courrielEnvoye") as "oui" | "non";

      return (
        <div
          className={cn("", {
            "text-red-800 animate-pulse": statut === "non",
          })}
        >
          {statut.toUpperCase()}
        </div>
      );
    },
  },
  {
    accessorKey: "statut",
    header: () => <div className="text-left w-24">Statut</div>,
    cell: ({ row }) => {
      const statut = row.getValue("statut") as string;

      return (
        <div
          className={cn("px-2 py-1 flex justify-center w-full rounded-full", {
            "bg-yellow-100 text-yellow-800": statut === "en attente",
            "bg-green-100 text-green-800": statut === "accepté",
            "bg-red-100 text-red-800": statut === "refusé",
          })}
        >
          <p className="shrink-0 text-xs">{statut.toUpperCase()}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "nomEquipierRemplacant",
    header: "Nom de l'équipier remplaçant",
  },
  {
    accessorKey: "remplacementEffectuePar",
    header: "Remplacement effectué par",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
