"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { is } from "date-fns/locale";

export default function LoginPage() {
  const router = useRouter();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value.length === 4) {
      const fetch = async () => {
        let isValid = false;
        try {
          const response = await axios.post("/api/auth", { nip: value });
          if (response.status === 200) {
            isValid = true;
            router.push("/");
            return;
          }
        } catch (error) {
          console.error(error);
        } finally {
          setValue("");
          if (!isValid) {
            toast({ title: "NIP invalide" });
          }
        }
      };

      fetch();
    }
  }, [value]);
  return (
    <div className="flex flex-col items-center mt-64 space-y-2">
      <InputOTP
        maxLength={4}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        Entrez votre NIP à 4 chiffres pour vous connecter. <br /> (même que pour
        UberEats)
      </div>
    </div>
  );
}
