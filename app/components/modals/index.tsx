import React, { useEffect } from "react";

interface IModal {
  maxWidth?: string;
  maxHeight?: string;
  closeModal: () => void;
  children: React.ReactNode;
}

function Modal({
  maxWidth = "max-w-[802px]",
  maxHeight = "max-h-[370px]",
  closeModal,
  children,
}: IModal) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 h-screen w-screen modal_bg"
        onClick={closeModal}
      ></div>
      <div
        className={`bg-white flex flex-col z-40 rounded-xl w-[80%] h-[80%] ${maxWidth} ${maxHeight} absolute left-[50%] 
      -translate-x-[50%] top-[50%] -translate-y-[50%]`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
