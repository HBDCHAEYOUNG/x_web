import CloseButton from "@/app/_component/Close-button";

export default function SignupModal() {
  return (
    <div className="modal-outer">
      <div className="modal-container">
        <CloseButton />
        <div className="modal-content">
          <h1 className="text-2xl font-bold">계정을 생성하세요</h1>
          <input type="text" placeholder="이름" className="input-style" />
          <input type="text" placeholder="휴대폰" className="input-style" />
          <button className="button-style mt-auto">계정 생성</button>
        </div>
      </div>
    </div>
  );
}
