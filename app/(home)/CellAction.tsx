"use client";
import {
  MoreHorizontal,
  ArrowUpDown,
  Trash,
  Edit,
  CheckCircle2,
  Check,
  HelpCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Remplacement } from "@prisma/client";
import { ApprouverForm } from "./components/ApprouverForm";
import { useState } from "react";

interface CellActionProps {
  data: Remplacement;
}
export default function CellAction({ data }: CellActionProps) {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const onDelete = async () => {
    try {
      await axios.delete(`/api/${data.id}`);
      router.refresh();

      toast({ title: "Remplacement supprimé" });
    } catch (error) {
      toast({
        title:
          "an error occurred while deleting the item, please try again later",
      });
      console.error(error);
    }
  };
  return (
    <Dialog>
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
            onClick={() => {
              router.push(`/${data.id}`);
            }}
          >
            <Edit className="h-4 w-4 mr-2" />
            Modifier
          </DropdownMenuItem>
          {data.statut === "en attente" && (
            <DialogTrigger asChild>
              <DropdownMenuItem>
                <Check className=" h-4 w-4 mr-2" />
                Approuver
              </DropdownMenuItem>
            </DialogTrigger>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onDelete}>
            <Trash className="h-4 w-4 mr-2" />
            Supprimer
          </DropdownMenuItem>
        </DropdownMenuContent>
        <DialogContent>
          <TooltipProvider delayDuration={200}>
            <DialogHeader>
              <DialogTitle className="flex gap-2 items-center">
                Approuver le remplacement
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className=" text-muted-foreground hover:fill-muted " />
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className=" p-4 space-y-4">
                    <h1 className="text-lg">Ne pas oublier de: </h1>
                    <p className=" text-muted-foreground">
                      1. Échanger les quarts concernés dans workday
                    </p>
                    <p className=" text-muted-foreground">
                      2. Remplacer les noms dans l'horaire des pauses
                    </p>
                  </TooltipContent>
                </Tooltip>
              </DialogTitle>
              <ApprouverForm initialData={data} />
            </DialogHeader>
          </TooltipProvider>
        </DialogContent>
      </DropdownMenu>
    </Dialog>
  );
}
