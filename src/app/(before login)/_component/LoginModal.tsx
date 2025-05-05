"use client";

import CloseButton from "@/app/_component/Close-button";
import Link from "next/link";

export default function LoginModal() {
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white w-2/5 h-2/3 rounded-lg shadow-lg flex flex-col p-2">
        <CloseButton />
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
