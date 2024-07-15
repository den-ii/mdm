import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { closeModals } from "@/lib/slice/modalSlice";

interface IModal {
  heading: string | React.ReactNode;
  maxWidth?: string;
  maxHeight?: string;
  children: React.ReactNode;
}

function Modal({
  heading,
  maxWidth = "max-w-[702px]",
  maxHeight = "max-h-[370px]",
  children,
}: IModal) {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  const closeModal = () => dispatch(closeModals());

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
        <div className="px-4 py-4 border-b flex justify-between items-center">
          <h4 className="font-medium text-xl 2xl:text-2xl">{heading}</h4>
          <button onClick={closeModal}>
            <Image
              width={32}
              height={32}
              src={"/assets/close_modal.svg"}
              alt="close modal"
              className="2xl:hidden"
            />
            <Image
              width={42}
              height={42}
              src={"/assets/close_modal.svg"}
              alt="close modal"
              className="hidden 2xl:inline-block"
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
