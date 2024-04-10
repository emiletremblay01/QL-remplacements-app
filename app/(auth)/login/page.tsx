"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function LoginPage() {
  const [value, setValue] = React.useState("");

  return (
    <div className="space-y-2">
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
        {value.length === 4 ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div>
    </div>
  );
}
