import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-4 px-6 mb-16">
      <div>
        <Button asChild>
          <Link href="/">Accueil</Link>
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button asChild>
          <Link href="/nouvelle-demande">Nouvelle demande</Link>
        </Button>

        <ModeToggle />
      </div>
    </nav>
  );
}
