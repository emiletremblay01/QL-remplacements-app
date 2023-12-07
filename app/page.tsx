import { useRouter } from "next/router";

export default function MainPage() {
  useRouter().replace("/home");
  return <></>;
}
