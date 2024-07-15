"use client";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
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

function FTU() {
  const [completed, setCompleted] = useState(0);
  const [loadBar, setLoadBar] = useState(0.4);
  const stages = useSelector((state: RootState) => state.auth.onboardingStage);
  const [aStages, setAStages] = useState([false, false, false, false]);

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
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const dispatch = useDispatch();

  const handleRequestDeviceModal = useCallback((e?: any) => {
    e?.stopPropagation();
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
    <div>
      <h1 className="text-lg 2xl:text-2xl font-medium">
        Hi Scarlett, Welcome to MDM
      </h1>
      <div className="bg-white p-3 2xl:p-4 mt-2 max-w-[835px] 2xl:max-w-[900px] rounded-[16px]">
        <h2 className="font-semibold 2xl:text-xl font-Poppins">Setup Guide</h2>
        <p className="mt-1 text-neutral_500 text-sm 2xl:text-lg">
          Use this personalised guide to get your system up and running.
        </p>
        <div className="mt-2 flex gap-3 items-center">
          <span className="text-neutral_500 text-sm 2xl:text-base font-Poppins">
            {completed}/4
          </span>
          <div className="bg-[#F0F5FF] h-2 2xl:h-[0.65rem] flex-1 rounded-2xl">
            <div
              className={`bg-primary_700 h-2 2xl:h-[0.65rem]  rounded-2xl`}
              style={{ width: lBar }}
            ></div>
          </div>
        </div>
        <div className="mt-4 border border-neutral-300 px-3 py-4 rounded-[12px]">
          <div
            id="1"
            className={`cursor-pointer flex ${
              showStages[1] ? "bg-primary_100" : ""
            } px-3 py-5 rounded-[12px] gap-3`}
            onClick={handleShowStages}
          >
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
              <h3 className="text-matte text-sm 2xl:text-lg font-semibold">
                Request Additional Devices (If Needed)
              </h3>
              <div className={`${showStages[1] ? "block" : "hidden"}`}>
                <p className="text-[0.75rem] 2xl:text-base mt-1">
                  Request more devices effortlessly when your business demands
                  it
                </p>
                <button
                  className="mt-3 bg-primary_700 transition duration-500 ease-in-out
                   hover:bg-primary_900 py-3 px-4 rounded-lg text-sm 2xl:text-base text-white"
                  onClick={(e) => handleRequestDeviceModal(e)}
                >
                  Request Device
                </button>
              </div>
            </div>
            <div className={`${showStages[1] ? "block" : "hidden"}`}>
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
            className={`mt-2 cursor-pointer flex ${
              showStages[2] ? "bg-primary_100" : ""
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
                className={`${aStages[1] ? "inline-block" : "hidden"}`}
                width={20}
                height={20}
                alt="checked"
              />
            </div>
            <div className="flex-1 justify-between">
              <h3 className="text-matte text-sm 2xl:text-lg font-semibold">
                Add Billing Information
              </h3>
              <div className={`${showStages[2] ? "block" : "hidden"}`}>
                <p className="text-[0.75rem] 2xl:text-base mt-1">
                  Securely store your billing details for hassle-free
                  transactions.
                </p>
                <button
                  className="mt-3 bg-primary_700 transition duration-500 ease-in-out
                   hover:bg-primary_900 py-3 px-4 rounded-lg text-sm 2xl:text-base text-white"
                  onClick={(e) => handleBillingInfoModal(e)}
                >
                  Initiate Billing Setup
                </button>
              </div>
            </div>
            <div className={`${showStages[2] ? "block" : "hidden"}`}>
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
              <h3 className="text-matte text-sm 2xl:text-lg font-semibold">
                Set your notification preferences
              </h3>
              <div className={`${showStages[3] ? "block" : "hidden"}`}>
                <p className="text-[0.75rem] 2xl:text-base mt-1">
                  Tailor your notification experience to suit your preferences.
                </p>
                <button
                  className="mt-3 bg-primary_700 transition duration-500 ease-in-out
                 hover:bg-primary_900 py-3 px-4 rounded-lg text-sm 2xl:text-base text-white"
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
              <h3 className="text-matte text-sm 2xl:text-lg font-semibold">
                Send Invites to Team Members
              </h3>
              <div className={`${showStages[4] ? "block" : "hidden"}`}>
                <p className="text-[0.75rem] 2xl:text-base mt-1">
                  Strengthen your workforce by easily extending invitations to
                  join your platform.
                </p>
                <button
                  className="mt-3 bg-primary_700 transition duration-500 ease-in-out
                 hover:bg-primary_900 py-3 px-4 rounded-lg text-sm 2xl:text-base text-white"
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
  );
}

export default FTU;
