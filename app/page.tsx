"use client";
import { useRouter } from "next/navigation";

export default function MainPage() {
  useRouter().replace("/home");
  return <></>;
}
