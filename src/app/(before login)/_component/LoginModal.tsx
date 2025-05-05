"use client";

import CloseButton from "@/app/_component/Close-button";
import Link from "next/link";

export default function LoginModal() {
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white w-2/5 h-4/5 rounded-lg shadow-lg flex flex-col p-2">
        <CloseButton />
        <div className="flex flex-col gap-4 common-padding pt-10">
          <h1 className="text-2xl font-bold">X가입하기</h1>
          <input type="text" placeholder="이메일" className="input-style" />
          <input type="text" placeholder="비밀번호" className="input-style" />
          <button className="button-style">다음</button>
          <p className="text-sm text-gray-500">
            이미 계정이 있으신가요?{" "}
            <Link href="/login" className="text-brand-blue">
              가입하기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
