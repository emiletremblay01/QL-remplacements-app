import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between py-6 px-6 ">
        <div>
          <Button asChild>
            <Link href="/">Accueil</Link>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/nouvelle-demande">
              <Plus className="mr-2 h-4 w-4" /> Nouvelle demande
            </Link>
          </Button>

          <ModeToggle />
        </div>
      </nav>
      <Separator className="mb-16" />
    </>
  );
}
