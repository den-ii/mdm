"use client";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  openBillingInfoModal,
  openInviteUsersModal,
  openNotificationPrefModal,
  openRequestDeviceModal,
} from "@/lib/slice/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState } from "@/lib/store";
import { OnboardingStageArgs, setOnboardingStage } from "@/lib/slice/authSlice";
import Note from "../tour/Note";
import PopUp from "../tour/PopUp";

function isTourStage(stage: number, tourStage: number, tour: boolean) {
  return tourStage === stage && tour;
}

function FTU() {
  const [completed, setCompleted] = useState(0);
  const [loadBar, setLoadBar] = useState(0.4);
  const stages = useSelector((state: RootState) => state.auth.onboardingStage);
  // const tour = useSelector((state: RootState) => state.auth.tour);
  const [tour, setTour] = useState(true);
  const [tourStage, setTourStage] = useState(0);
  const [aStages, setAStages] = useState([false, true, false, false]);

  const tourRef = useRef(null);

  useLayoutEffect(() => {
    if (tourRef.current && tourStage > 0) {
      (tourRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [tourRef, tourStage]);

  useEffect(() => {
    let lBar = 0.4;
    let cNo = 0;
    let dStages = { ...stages } as { [key: number]: boolean };
    const dAStages = [false, false, false, false];
    for (let stage in dStages) {
      if (dStages[stage]) {
        lBar += 24.9;
        cNo += 1;
        dAStages[Number(stage) - 1] = true;
      }
    }
    setLoadBar(lBar);
    setCompleted(cNo);
    setAStages(dAStages);
  }, [stages]);

  const [showStages, setShowStages] = useState<{ [key: number]: boolean }>({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  const dispatch = useDispatch();

  const closeTour = () => {
    setTour(false);
  };
  const handleTourStage = (val: number) => {
    console.log(showStages);
    setTourStage(val);
  };

  const handleRequestDeviceModal = useCallback((e?: any) => {
    e?.stopPropagation();
    if (tour) return;
    dispatch(openRequestDeviceModal());
  }, []);

  const handleBillingInfoModal = useCallback((e?: any) => {
    e?.stopPropagation();
    dispatch(openBillingInfoModal());
  }, []);

  const handleInviteUsersModal = useCallback((e?: any) => {
    e?.stopPropagation();
    dispatch(openInviteUsersModal());
  }, []);

  const handleNotificationPrefModal = useCallback((e?: any) => {
    e?.stopPropagation();
    dispatch(openNotificationPrefModal());
  }, []);

  const handleShowStages = (e: any) => {
    const num = Number(e.currentTarget.id);
    if (num === 2) {
      dispatch(setOnboardingStage(OnboardingStageArgs.Stage1));
    }
    if (num === 4) {
      dispatch(setOnboardingStage(OnboardingStageArgs.Stage1));
      dispatch(setOnboardingStage(OnboardingStageArgs.Stage3));
    }
    setShowStages((showStages) => ({
      1: false,
      2: false,
      3: false,
      4: false,
      [num]: !showStages[num],
    }));
    console.log(showStages);
  };

  const lBar = loadBar + "%";
  return (
    <div className="relative">
      {tour && (
        <div className="fixed z-30 top-0 bottom-0 left-0 right-0 h-screen w-screen tour_bg"></div>
      )}
      {isTourStage(0, tourStage, tour) && (
        <PopUp setTourStage={handleTourStage} closeTour={closeTour} />
      )}

      <h1 className="text-lg font-medium">Hi Scarlett, Welcome to MDM</h1>
      <div className="relative max-w-[835px]">
        <div
          ref={tourRef}
          className={`bg-white ${
            isTourStage(1, tourStage, tour) ? "absolute w-full z-50" : ""
          } py-4 px-5 mt-2 max-w-[835px] rounded-[16px]`}
        >
          {isTourStage(1, tourStage, tour) && (
            <div className="absolute bottom-0 left-[30%] translate-y-[110%]">
              <Note
                title="Setup Guide"
                body="Use this personalized guide to get your system up and running.
               The guide will help you track your progress showing actions completed."
                steps={3}
                active={1}
                maxWidth="max-w-[472px]"
                handleTourStage={handleTourStage}
                closeTour={closeTour}
              />
            </div>
          )}
          <h2 className="font-semibold font-Poppins">Setup Guide</h2>
          <p className="mt-1 text-neutral_500 text-sm">
            Use this personalised guide to get your system up and running.
          </p>
          <div className="mt-2 flex gap-3 items-center">
            <span className="text-neutral_500 text-sm font-Poppins">
              {completed}/4
            </span>
            <div className="bg-[#F0F5FF] h-2 flex-1 rounded-2xl">
              <div
                className={`bg-primary_700 h-2 rounded-2xl`}
                style={{ width: lBar }}
              ></div>
            </div>
          </div>
          <div
            className={`mt-4 relative border border-neutral-300 px-3 py-4 rounded-[12px] `}
          >
            <div
              id="1"
              className={`cursor-pointer flex ${
                showStages[1] || tourStage === 2 ? "bg-primary_100" : ""
              } ${
                isTourStage(2, tourStage, tour) ? "relative z-50" : ""
              } px-3 py-5 rounded-[12px] gap-3`}
              onClick={handleShowStages}
            >
              {isTourStage(2, tourStage, tour) && (
                <div
                  className="absolute bottom-0 left-[0%] z-50 translate-y-[110%]"
                  ref={tourRef}
                >
                  <Note
                    title="Request Additional Devices"
                    body={`If you need more devices for your business, you can easily request them by clicking the "Request device" button. 
                    This option ensures you can scale your device inventory as your business grows.`}
                    steps={3}
                    active={2}
                    maxWidth="max-w-[472px]"
                    handleTourStage={handleTourStage}
                    closeTour={closeTour}
                  />
                </div>
              )}
              <div
                className="h-[24px] w-[24px] rounded-[50%] border border-[#A19FA8] border-dashed 
            flex items-center justify-center"
              >
                <Image
                  src="/assets/vendor/dashboard/ftu_check.svg"
                  className={`${aStages[0] ? "inline-block" : "hidden"}`}
                  width={20}
                  height={20}
                  alt="checked"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-matte text-sm font-medium">
                  Request Additional Devices (If Needed)
                </h3>
                <div
                  className={`${
                    showStages[1] || tourStage === 2 ? "block" : "hidden"
                  }`}
                >
                  <p className="text-[0.75rem] mt-1">
                    Request more devices effortlessly when your business demands
                    it
                  </p>
                  <button
                    className={` mt-3 bg-primary_700 transition duration-500 ease-in-out
                   hover:bg-primary_900 py-3 px-4 rounded-lg text-sm text-white  ${
                     tour ? "cursor-not-allowed" : ""
                   }`}
                    onClick={(e) => handleRequestDeviceModal(e)}
                  >
                    Request Device
                  </button>
                </div>
              </div>
              <div
                className={`${
                  showStages[1] || tourStage === 2 ? "block" : "hidden"
                }`}
              >
                <Image
                  src="/assets/vendor/dashboard/request_device.svg"
                  width={80}
                  height={100}
                  alt="request devices"
                />
              </div>
            </div>
            <div
              id="2"
              className={`cursor-pointer flex ${
                showStages[2] || tourStage === 3 ? "bg-primary_100" : ""
              } ${
                isTourStage(3, tourStage, tour)
                  ? "relative z-50 cursor-not-allowed"
                  : ""
              } px-3 py-5 rounded-[12px] gap-3`}
              onClick={
                isTourStage(3, tourStage, tour) ? () => {} : handleShowStages
              }
            >
              {isTourStage(3, tourStage, tour) && (
                <div
                  className="absolute bottom-0 left-[0%] z-50 translate-y-[110%]"
                  ref={tourRef}
                >
                  <Note
                    title="Add Billing Information"
                    body={`Next, make sure to add your billing information. 
                    This step is crucial for seamless transactions and uninterrupted service.`}
                    steps={3}
                    active={3}
                    maxWidth="max-w-[472px]"
                    handleTourStage={handleTourStage}
                    closeTour={closeTour}
                  />
                </div>
              )}
              <div
                className="h-[24px] w-[24px] rounded-[50%]
            flex items-center justify-center
            border border-[#A19FA8] border-dashed"
              >
                <Image
                  src="/assets/vendor/dashboard/ftu_check.svg"
                  className={`${aStages[1] ? "inline-block" : "hidden"}`}
                  width={20}
                  height={20}
                  alt="checked"
                />
              </div>
              <div className="flex-1 justify-between">
                <h3 className="text-matte text-sm font-medium">
                  Add Billing Information
                </h3>
                <div
                  className={`${
                    showStages[2] || tourStage === 3 ? "block" : "hidden"
                  }`}
                >
                  <p className="text-[0.75rem] mt-1">
                    Securely store your billing details for hassle-free
                    transactions.
                  </p>
                  <button
                    className={`mt-3 bg-primary_700 transition duration-500 ease-in-out 
                  hover:bg-primary_900 py-3 px-4 rounded-lg text-sm text-white ${
                    tour ? "cursor-not-allowed" : ""
                  }`}
                    onClick={(e) => handleBillingInfoModal(e)}
                  >
                    Initiate Billing Setup
                  </button>
                </div>
              </div>
              <div
                className={`${
                  showStages[2] || tourStage === 3 ? "block" : "hidden"
                }`}
              >
                <Image
                  src="/assets/vendor/dashboard/billing_info.svg"
                  width={80}
                  height={100}
                  alt="billing information"
                />
              </div>
            </div>

            <div
              id="3"
              className={`mt-2 cursor-pointer flex ${
                showStages[3] ? "bg-primary_100" : ""
              } px-3 py-5 rounded-[12px] gap-3`}
              onClick={handleShowStages}
            >
              <div
                className="h-[24px] w-[24px] rounded-[50%]
            flex items-center justify-center
            border border-[#A19FA8] border-dashed"
              >
                <Image
                  src="/assets/vendor/dashboard/ftu_check.svg"
                  className={`${aStages[2] ? "inline-block" : "hidden"}`}
                  width={20}
                  height={20}
                  alt="checked"
                />
              </div>
              <div className="flex-1 justify-between">
                <h3 className="text-matte text-sm font-medium">
                  Set your notification preferences
                </h3>
                <div className={`${showStages[3] ? "block" : "hidden"}`}>
                  <p className="text-[0.75rem] mt-1">
                    Tailor your notification experience to suit your
                    preferences.
                  </p>
                  <button
                    className={`mt-3 bg-primary_700 transition duration-500 ease-in-out
                 hover:bg-primary_900 py-3 px-4 rounded-lg text-sm text-white ${
                   tour ? "cursor-not-allowed" : ""
                 }`}
                    onClick={(e) => handleNotificationPrefModal(e)}
                  >
                    Set Notification Preference
                  </button>
                </div>
              </div>
              <div className={`${showStages[3] ? "block" : "hidden"}`}>
                <Image
                  src="/assets/vendor/dashboard/notification_preference.svg"
                  width={80}
                  height={100}
                  alt="notification preferences"
                />
              </div>
            </div>

            <div
              id="4"
              className={`mt-2 cursor-pointer flex ${
                showStages[4] ? "bg-primary_100" : ""
              } px-3 py-5 rounded-[12px] gap-3`}
              onClick={handleShowStages}
            >
              <div
                className="h-[24px] w-[24px] rounded-[50%] border
             flex items-center justify-center border-[#A19FA8] border-dashed"
              >
                <Image
                  src="/assets/vendor/dashboard/ftu_check.svg"
                  className={`${aStages[3] ? "inline-block" : "hidden"}`}
                  width={20}
                  height={20}
                  alt="checked"
                />
              </div>
              <div className="flex-1 justify-between">
                <h3 className="text-matte text-sm font-medium">
                  Send Invites to Team Members
                </h3>
                <div className={`${showStages[4] ? "block" : "hidden"}`}>
                  <p className="text-[0.75rem] mt-1">
                    Strengthen your workforce by easily extending invitations to
                    join your platform.
                  </p>
                  <button
                    className="mt-3 bg-primary_700 transition duration-500 ease-in-out
                 hover:bg-primary_900 py-3 px-4 rounded-lg text-sm text-white"
                    onClick={(e) => handleInviteUsersModal(e)}
                  >
                    Invite User
                  </button>
                </div>
              </div>
              <div className={`${showStages[4] ? "block" : "hidden"}`}>
                <Image
                  src="/assets/vendor/dashboard/send_invites.svg"
                  width={80}
                  height={100}
                  alt="send invites"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FTU;
