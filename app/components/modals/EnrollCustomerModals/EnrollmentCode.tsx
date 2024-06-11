import React, { useEffect, useRef, useState } from "react";

function EnrollmentCode() {
  const [code, setCode] = useState(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleEnterCode = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const codes = [...code];
    if (e.key === "Backspace") {
      codes[index] = "";
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (/^\d$/.test(e.key)) {
      if (codes[index] !== "" && Number(codes[index]) >= 0 && index < 5) {
        console.log("yeah");
        inputRefs.current[index + 1]?.focus();
        codes[index + 1] = e.key;
        setCode(codes);
        return;
      }
      if (!Number(codes[index])) {
        codes[index] = e.key;
      }
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
    setCode(codes);
  };

  const enrollCode = code.map((_, index) => (
    <input
      type="number"
      ref={(el) => (inputRefs.current[index] = el)}
      className="block w-[60px] h-[60px] text-center focus:outline-2 text-primary_700 outline-primary_700 p-2 rounded-lg bg-primary_100"
      key={index}
      value={code[index]}
      onKeyDown={(e) => handleEnterCode(e, index)}
      onChange={() => {}} // Prevent React warning for controlled input without onChange
    />
  ));

  return (
    <div className="w-full">
      <p className="text-center mb-3">
        Please enter the code sent to the linked phone number
      </p>
      <div className="flex gap-3 justify-center">{enrollCode}</div>
    </div>
  );
}

export default EnrollmentCode;
