import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div className="flex justify-around h-screen items-center">
      <Image src="/hicon.svg" alt="logo" width={300} height={300} />
      <div className="border-blue-500 flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold">지금 일어나고 있는 일</h1>
        <p className="text-2xl font-bold">지금 가입하세요.</p>
        <Link
          href="/i/flow/signup"
          className="bg-brand-blue w-2/3 text-center text-white font-bold rounded-full p-2"
        >
          계정 만들기
        </Link>
        <div className="flex flex-col gap-2">
          <span>이미 트위터에 가입하셨나요?</span>
          <Link
            href="/login"
            className=" w-2/3 rounded-full border font-bold text-center text-brand-blue border-brand-grey p-2"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
