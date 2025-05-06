"use client";

import CloseButton from "@/app/_component/Close-button";
import Link from "next/link";

export default function LoginModal() {
  return (
    <div className="modal-outer">
      <div className="modal-container">
        <CloseButton />
        <div className="modal-content">
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
