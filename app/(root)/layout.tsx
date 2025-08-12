import Navbar from "@/components/Navbar";
import { auth } from "@/actions/auth-server-actions";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuth = await auth();
  console.log(isAuth);
  if (!isAuth) {
    redirect("/login");
  }
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
