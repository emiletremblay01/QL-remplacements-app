import { MoreHorizontal, ArrowUpDown, Trash, Edit } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Remplacement } from "@prisma/client";

interface CellActionProps {
  data: Remplacement;
}
export default function CellAction({ data }: CellActionProps) {
  const router = useRouter();

  const onDelete = async () => {
    try {
      await axios.delete(`/api/${data.id}`);
      router.refresh();

      toast({ title: "product deleted" });
    } catch (error) {
      toast({
        title:
          "an error occurred while deleting the product, please try again later",
      });
      console.error(error);
    }
  };
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
          onClick={() => {
            router.push(`/${data.id}`);
          }}
        >
          <Edit className="h-4 w-4 mr-2" />
          Modifier
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onDelete}>
          <Trash className="h-4 w-4 mr-2" />
          Supprimer
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
