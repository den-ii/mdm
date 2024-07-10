import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { closeModals } from "@/lib/slice/modalSlice";
import Buttons from "../buttons";

function PopUp({
  setTourStage,
  closeTour,
}: {
  setTourStage: (stage: number) => void;
  closeTour: () => void;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  const closeModal = () => dispatch(closeModals());

  return (
    <div
      className={`bg-white fixed flex flex-col justify-center gap-4 items-center 
      z-50 rounded-xl w-[80%] h-[80%] max-h-[450px] py-4 px-8 max-w-[400px] left-[50%] 
      -translate-x-[50%] top-[50%] -translate-y-[50%] `}
    >
      <Image
        src={"/assets/tour/wave.svg"}
        height={104}
        width={104}
        alt={"Hello"}
      />
      <h3 className="text-xl text-center font-Poppins font-semibold">
        Welcome to your Mobile Device Manager
      </h3>
      <p className="font-light text-center text-sm">
        We prepared a quick and easy tour for you. You will see our features and
        learn to use them.
      </p>
      <div>
        <Buttons primary styles="text-sm" onClick={() => setTourStage(1)}>
          Start Tour
        </Buttons>
        <div className="mt-2"></div>
        <Buttons styles="text-sm" onClick={closeTour}>
          Skip
        </Buttons>
      </div>
    </div>
  );
}

export default PopUp;
