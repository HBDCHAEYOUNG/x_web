"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white w-2/5 h-2/3 rounded-lg shadow-lg flex flex-col p-2">
        <Image
          src="/close.svg"
          alt="close"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => router.back()}
        />
        <div className="flex flex-col gap-4 mx-auto w-1/2 pt-10">
          <h1 className="text-2xl font-bold">X가입하기</h1>
          <input
            type="text"
            placeholder="이메일"
            className="rounded-full border border-brand-grey p-2 w-full"
          />
          <input
            type="text"
            placeholder="비밀번호"
            className="rounded-full border border-brand-grey p-2 w-full"
          />
          <button className="bg-black text-white px-4 p-2 rounded-full w-full">
            다음
          </button>
          <p className="text-sm text-gray-500">
            이미 계정이 있으신가요? <Link href="/login">가입하기</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
