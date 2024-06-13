import Image from "next/image";
import React from "react";
import Buttons from "../button";

interface IFTUScreen {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonAction?: () => void;
}

function FtuScreen({
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
  title,
  description,
  buttonText,
  buttonAction,
}: IFTUScreen) {
  return (
    <div className="flex-1 flex justify-center items-center max-w-[1440px] max-h-[500px]">
      <div className="flex items-center flex-col max-w-[600px]">
        <div className="flex items-center flex-col gap-3 text-center">
          <Image
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt}
          />
          <h2 className="font-Poppins text-lg font-semibold">{title}</h2>
          <p className="text-neutral_500 text-sm">{description}</p>
        </div>
        {buttonText && (
          <div className="mt-4">
            <Buttons onClick={buttonAction} children={buttonText} primary />
          </div>
        )}
      </div>
    </div>
  );
}

export default FtuScreen;
