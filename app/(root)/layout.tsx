import Navbar from "@/components/Navbar";

import { Separator } from "@/components/ui/separator";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Navbar />
      <div className="flex-1">{children}</div>
      <footer className="mt-16">
        <Separator />
        <p className="h-24 flex text-sm items-center justify-center text-muted-foreground">
          Développé par Émile Tremblay. Tous droits réservés.
        </p>
      </footer>
    </>
  );
}
