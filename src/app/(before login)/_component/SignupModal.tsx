import CloseButton from "@/app/_component/Close-button";

export default function SignupModal() {
  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white w-2/5 h-2/3 rounded-lg shadow-lg flex flex-col p-2 gap-4">
        <CloseButton />
        <h1 className="text-2xl font-bold">계정을 생성하세요</h1>
        <input
          type="text"
          placeholder="이름"
          className="rounded-sm border border-brand-grey h-16 p-2 w-full"
        />
        <input
          type="text"
          placeholder="휴대폰"
          className="rounded-sm border border-brand-grey h-16 p-2 w-full "
        />
        <button className="rounded-full bg-brand-grey p-2 w-full mt-auto">
          계정 생성
        </button>
      </div>
    </div>
  );
}
