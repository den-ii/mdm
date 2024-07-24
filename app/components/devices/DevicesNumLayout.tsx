"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Note from "../tour/Note";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { closeTour, setTourStage } from "@/lib/slice/deviceTourSlice";

const deviceMetricsBody = (
  <div className="text-white text-sm 2xl:text-base">
    <p className="text-white text-sm 2xl:text-base">
      This section provides an overview of the status of your devices. The
      metrics include:
    </p>
    <ul className="list-disc list-inside ml-1">
      <li className="text-white text-sm 2xl:text-base">
        <b className="text-white text-sm 2xl:text-base">Configured:</b> Number
        of devices that have been set up.
      </li>
      <li className="text-white text-sm 2xl:text-base">
        <b className="text-white text-sm 2xl:text-base">Assigned:</b> Number of
        devices currently assigned to users.
      </li>
      <li className="text-white text-sm 2xl:text-base">
        <b className="text-white text-sm 2xl:text-base">Unassigned:</b> Number
        of devices that are available for assignment.
      </li>
      <li className="text-white text-sm 2xl:text-base">
        <b className="text-white text-sm 2xl:text-base">Activated:</b> Number of
        devices that are active and in use.{" "}
      </li>
      <li className="text-white text-sm 2xl:text-base">
        <b className="text-white text-sm 2xl:text-base">Locked:</b> Number of
        devices that are locked for security reasons.
      </li>
    </ul>
  </div>
);

function DevicesNumLayout() {
  const pathname = usePathname();
  const tour = useSelector((state: RootState) => state.deviceTour.tour);
  const tourStage = useSelector(
    (state: RootState) => state.deviceTour.tourStage
  );
  const dispatch = useDispatch();

  const onlyDevices = pathname === "/devices";
  const tourStage1 = tour && tourStage < 2;

  const handleCloseTour = () => {
    dispatch(closeTour());
  };

  const handleTourStage = (val: number) => {
    dispatch(setTourStage(val));
  };
  return (
    <>
      {tour && (
        <div className="fixed z-30 top-0 bottom-0 left-0 right-0 h-screen w-screen tour_bg"></div>
      )}
      {onlyDevices && (
        <div className="relative">
          <div className="absolute z-50 -bottom-[260px] 2xl:-bottom-[290px]">
            {tourStage1 && (
              <Note
                title="Device Metrics"
                body={deviceMetricsBody}
                steps={2}
                active={1}
                closeTour={handleCloseTour}
                handleTourStage={handleTourStage}
              />
            )}
          </div>

          <div className="flex flex-wrap gap-3 ">
            <div
              className={`flex ${
                tourStage1 ? "z-30 bg-white" : ""
              } items-center  gap-3 border border-[#DADAE8] rounded-lg
           p-3 min-w-[160px] 2xl:min-w-[190px] justify-between`}
            >
              <div className="text-sm flex flex-col gap-1">
                <p className="text-neutral_500 font-Poppins 2xl:text-lg">
                  Configured
                </p>
                <p className="font-medium 2xl:text-lg">0</p>
              </div>
              <div>
                <Image
                  src="/assets/vendor/devices/blue_device.svg"
                  width={45}
                  height={45}
                  alt="configured devices"
                />
              </div>
            </div>
            <div
              className={`flex ${
                tourStage1 ? "z-30 bg-white" : ""
              } items-center gap-3 border border-[#DADAE8] 
            rounded-lg p-3 min-w-[160px] 2xl:min-w-[190px] justify-between`}
            >
              <div className="text-sm flex flex-col gap-1">
                <p className="text-neutral_500 font-Poppins 2xl:text-lg">
                  Assigned
                </p>
                <p className="font-medium 2xl:text-lg">0</p>
              </div>
              <div>
                <Image
                  src="/assets/vendor/devices/green_device.svg"
                  width={45}
                  height={45}
                  alt="configured devices"
                />
              </div>
            </div>
            <div
              className={`flex ${
                tourStage1 ? "z-30 bg-white" : ""
              } items-center gap-3 border border-[#DADAE8] rounded-lg p-3 min-w-[160px] 
            2xl:min-w-[190px] justify-between`}
            >
              <div className="text-sm flex flex-col gap-1">
                <p className="text-neutral_500 font-Poppins 2xl:text-lg">
                  UnAssigned
                </p>{" "}
                <p className="font-medium 2xl:text-lg">0</p>
              </div>
              <div>
                <Image
                  src="/assets/vendor/devices/yellow_device.svg"
                  width={45}
                  height={45}
                  alt="configured devices"
                />
              </div>
            </div>
            <div
              className={`flex ${
                tourStage1 ? "z-30 bg-white" : ""
              } items-center gap-3 border border-[#DADAE8] rounded-lg p-3 min-w-[160px] 2xl:min-w-[190px] 
              justify-between`}
            >
              <div className="text-sm flex flex-col gap-1">
                <p className="text-neutral_500 font-Poppins 2xl:text-lg">
                  Activated
                </p>{" "}
                <p className="font-medium 2xl:text-lg">0</p>
              </div>
              <div>
                <Image
                  src="/assets/vendor/devices/orange_device.svg"
                  width={45}
                  height={45}
                  alt="configured devices"
                />
              </div>
            </div>
            <div
              className={`flex ${
                tourStage1 ? "z-30 bg-white" : ""
              } items-center gap-3 border border-[#DADAE8] rounded-lg p-3 min-w-[160px] 2xl:min-w-[190px] 
              justify-between`}
            >
              <div className="text-sm flex flex-col gap-1">
                <p className="text-neutral_500 font-Poppins 2xl:text-lg">
                  Locked
                </p>{" "}
                <p className="font-medium 2xl:text-lg">0</p>
              </div>
              <div>
                <Image
                  src="/assets/vendor/devices/pink_device.svg"
                  width={45}
                  height={45}
                  alt="configured devices"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DevicesNumLayout;
