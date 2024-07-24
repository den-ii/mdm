import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import Buttons from "../buttons";
import Note from "../tour/Note";
interface FTUScreenProps {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonAction?: () => void;
  tour?: boolean;
  closeTour?: () => void;
  handleTourStage?: (val: number) => void;
  tourNoteTitle?: string;
  tourSteps?: number;
  tourActive?: number;
  tourNoteBody?: string;
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
  tour,
  closeTour,
  tourNoteTitle,
  tourSteps,
  tourActive,
  tourNoteBody,
  handleTourStage,
}: FTUScreenProps) {
  const showNote =
    tour &&
    tourNoteTitle &&
    tourActive &&
    tourSteps &&
    closeTour &&
    handleTourStage;

  const tourRef = useRef(null);

  useLayoutEffect(() => {
    if (tourRef.current && tour) {
      (tourRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [tourRef, tour]);

  return (
    <div className="flex-1 flex justify-center items-center max-w-[1440px] max-h-[500px]">
      <div
        className={` ${
          tour ? "bg-white z-30 relative" : ""
        } flex items-center flex-col max-w-[600px] p-5 rounded-lg `}
      >
        {showNote && (
          <div
            className="absolute z-50 -bottom-[245px] 2xl:-bottom-[270px]"
            ref={tourRef}
          >
            <Note
              title={tourNoteTitle}
              body={tourNoteBody}
              steps={tourSteps}
              active={tourActive}
              closeTour={closeTour}
              maxWidth="max-w-[400px]"
              handleTourStage={handleTourStage}
            />
          </div>
        )}
        <div className="flex items-center flex-col gap-3 text-center">
          <Image
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt}
          />
          <h2 className="font-Poppins text-lg font-semibold">{title}</h2>
          <p className="text-neutral_500 text-sm 2xl:text-base">
            {description}
          </p>
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
