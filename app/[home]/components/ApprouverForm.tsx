"use client";

import axios from "axios";
import { useState } from "react";
import { Remplacement } from "@prisma/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";

interface RemplacementFormProps {
  initialData: Remplacement | null;
}
const formSchema = z.object({
  nomEquipier: z.string().min(2, {
    message: "nomEquipier must be at least 2 characters.",
  }),
  dateDemande: z.date({ required_error: "dateDemande is required." }),
  recuPar: z.string().min(2, {
    message: "recuPar must be at least 2 characters.",
  }),
  dateQuart: z.date({ required_error: "dateQuart is required." }),
  posteQuart: z.string({ required_error: "posteQuart is required." }),
  heuresQuart: z.string({ required_error: "heuresQuart is required." }),

  courrielEnvoye: z.enum(["oui", "non"], {
    required_error: "Selectionner oui ou non.",
  }),
  statut: z.enum(["en attente", "approuvé", "refusé"], {
    required_error: "Selectionner un statut.",
  }),
  nomEquipierRemplacant: z.string(),
  remplacementEffectuePar: z.string(),
});

export function ApprouverForm({ initialData }: RemplacementFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
          ...initialData,
          statut: "approuvé",
          courrielEnvoye: initialData.courrielEnvoye === "oui" ? "oui" : "non",
          nomEquipierRemplacant: initialData.nomEquipierRemplacant ?? "",
          remplacementEffectuePar: initialData.remplacementEffectuePar ?? "",
        }
      : {
          statut: "approuvé",
        },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      if (initialData) {
        await axios.patch(`/api/${initialData.id}`, values);
        router.refresh();
        router.push("/home");
        toast({ title: "Remplacement approuvé avec succès." });
      } else {
        await axios.post("/api", values);
        router.push("/home");
        toast({ title: "Remplacement ajouté avec succès." });
      }
    } catch (error) {
      toast({ title: "something went wrong" });
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex w-full justify-center pt-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6 items-center"
        >
          <div className="w-2/3 max-w-md  space-y-4">
            <FormField
              control={form.control}
              name="nomEquipierRemplacant"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remplaçant</FormLabel>
                  <FormControl>
                    <Input placeholder="Mathieu L." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="remplacementEffectuePar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remplacement effectué par:</FormLabel>
                  <FormControl>
                    <Input placeholder="Samuel C." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="self-center w-fit"
          >
            APPROUVER
          </Button>
        </form>
      </Form>
    </div>
  );
}
