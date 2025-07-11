"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Main from "../_component/main";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/i/flow/login");
  }, [router]);

  return <Main />;
}
