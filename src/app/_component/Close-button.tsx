"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CloseButton() {
  const router = useRouter();
  return (
    <Image
      src="/close.svg"
      alt="close"
      width={20}
      height={20}
      className="cursor-pointer"
      onClick={() => router.back()}
    />
  );
}
