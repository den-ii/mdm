import Image from "next/image";
import React from "react";

interface NoteProps {
  title: string;
  body: string | React.ReactNode;
  steps: number;
  active: number;
  handleTourStage: (val: number) => void;
  closeTour: () => void;
  maxWidth?: string;
}

function generateSteps(steps: number, active: number) {
  const stepsElem = new Array(steps).fill(0);
  return stepsElem.map((_: any, i: number) => {
    const isActive = i === active - 1;
    return (
      <div
        key={i}
        className={`w-[8px] h-[8px] rounded-full bg-white ${
          isActive ? "" : "opacity-30"
        }`}
      ></div>
    );
  });
}

function Note({
  title,
  body,
  steps,
  active,
  maxWidth,
  handleTourStage,
  closeTour,
}: NoteProps) {
  const stepsElem = generateSteps(steps, active);

  const previous = active > 1;
  const done = steps === active;

  const handleNextDone = () => {
    if (steps > active) {
      handleTourStage(active + 1);
    } else {
      handleTourStage(0);
      closeTour();
    }
  };
  const handlePreviousSkip = () => {
    if (active > 1) {
      handleTourStage(active - 1);
    } else {
      handleTourStage(0);
      closeTour();
    }
  };

  return (
    <div>
      <div
        className={`tourtip bg-primary_700 min-w-[250px] min-h-[150px] py-3 px-4 rounded-lg mb-3 ${maxWidth}`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-white font-Poppins text-[0.9rem] 2xl:text-[1.1rem] font-medium">
            {title}
          </h3>
          <button onClick={handleNextDone}>
            <Image
              width={32}
              height={32}
              src={"/assets/tour/close-square.svg"}
              alt="close modal"
            />
          </button>
        </div>
        <div className="text-white mt-2 text-sm 2xl:text-base font-light">
          {body}
        </div>

        <div className="mt-3 flex justify-between items-center">
          <div className="flex gap-2">{stepsElem}</div>
          <div className="flex gap-2">
            <button
              className="p-2 px-3 text-sm 2xl:text-base  rounded-lg text-white"
              onClick={handlePreviousSkip}
            >
              {previous && "Previous"} {!previous && "Skip"}
            </button>
            <button
              className="bg-white p-2 px-3 text-sm 2xl:text-base rounded-lg text-primary_700"
              onClick={handleNextDone}
            >
              {done && "Done"} {!done && "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
