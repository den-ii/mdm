import React from "react";

interface IModal {
  width?: string;
  height?: string;
  closeModal: () => void;
  children: React.ReactNode;
}

function Modal({ width, height, closeModal, children }: IModal) {
  width = width ?? "w-[802px]";
  height = height ?? "h-[370px]";

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 h-screen w-screen modal_bg"
        onClick={closeModal}
      ></div>
      <div
        className={`bg-white flex flex-col z-40 rounded-xl ${width} ${height} absolute left-[50%] 
      -translate-x-[50%] top-[50%] -translate-y-[50%]`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
