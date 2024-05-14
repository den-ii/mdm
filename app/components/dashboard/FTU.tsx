"use client";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import RequestDeviceModal from "../modals/RequestDeviceModal";
import BillingInfoModal from "../modals/BillingInfo";
import NotificationPrefModal from "../modals/NotificationPreferenceModal";
import InviteUsersModal from "../modals/InviteUsersModal";

interface IUseShow {
  handleRequestDeviceModal: (bool: boolean) => void;
}

function FTU() {
  const [requestDeviceModal, setRequestDeviceModal] = useState(false);
  const [billingInfoModal, setBillingInfoModal] = useState(false);
  const [notificationPrefModal, setNotificationPrefModal] = useState(false);
  const [inviteUsersModal, setInviteUsersModal] = useState(false);

  const [loadBar, setLoadBar] = useState(0.5);
  const [stages, setStages] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [showStages, setShowStages] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleRequestDeviceModal = (bool: boolean, e?: any) => {
    e?.stopPropagation();
    setRequestDeviceModal(bool);
  };

  const handleBillingInfoModal = (bool: boolean, e?: any) => {
    e?.stopPropagation();
    setBillingInfoModal(bool);
  };

  const handleInviteUsersModal = (bool: boolean, e?: any) => {
    e?.stopPropagation();
    setInviteUsersModal(bool);
  };

  const handleNotificationPrefModal = (bool: boolean, e?: any) => {
    e?.stopPropagation();
    setNotificationPrefModal(bool);
  };

  const increaseLoadBar = () => setLoadBar((loadBar) => loadBar + 25.5);

  const handleShowStages = (e: any) => {
    const num = Number(e.currentTarget.id);
    setShowStages((showStages) => ({
      1: false,
      2: false,
      3: false,
      4: false,
      [num]: !showStages[num],
    }));
    console.log(showStages);
  };

  return (
    <div>
      {/* -----------------------------------  Modals -------------------------------------------*/}

      {requestDeviceModal && (
        <RequestDeviceModal
          closeModal={() => handleRequestDeviceModal(false)}
        />
      )}
      {billingInfoModal && (
        <BillingInfoModal closeModal={() => handleBillingInfoModal(false)} />
      )}
      {notificationPrefModal && (
        <NotificationPrefModal
          closeModal={() => handleNotificationPrefModal(false)}
        />
      )}
      {inviteUsersModal && (
        <InviteUsersModal closeModal={() => handleInviteUsersModal(false)} />
      )}
      {/* ---------------------------------------------------------------------------------------- */}
      <h1 className="font-semibold text-xl">Hi Scarlett, Welcome to MDM</h1>
      <div className="bg-white p-3 mt-2 max-w-[835px] rounded-[16px]">
        <h2 className="font-semibold font-Poppins">Setup Guide</h2>
        <p className="mt-1 text-neutral_500 text-sm">
          Use this personalised guide to get your system up and running.
        </p>
        <div className="mt-2 flex gap-3 items-center">
          <span className="text-neutral_500 text-sm font-Poppins">0/4</span>
          <div className="bg-[#F0F5FF] h-2 flex-1 rounded-2xl">
            <div className="bg-primary_700 h-2 w-[0.5%] rounded-2xl"></div>
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
            <div className="h-[24px] w-[24px] rounded-[50%] border border-[#A19FA8] border-dashed"></div>
            <div className="flex-1">
              <h3 className="text-matte text-sm font-semibold">
                Request Additional Devices (If Needed)
              </h3>
              <div className={`${showStages[1] ? "block" : "hidden"}`}>
                <p className="text-[0.75rem] mt-1">
                  Request more devices effortlessly when your business demands
                  it
                </p>
                <button
                  className="mt-3 bg-primary_700 transition duration-500 ease-in-out hover:bg-primary_900 py-3 px-4 rounded-lg text-sm text-white"
                  onClick={(e) => handleRequestDeviceModal(true, e)}
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
            <div className="h-[24px] w-[24px] rounded-[50%] border border-[#A19FA8] border-dashed"></div>
            <div className="flex-1 justify-between">
              <h3 className="text-matte text-sm font-semibold">
                Add Billing Information
              </h3>
              <div className={`${showStages[2] ? "block" : "hidden"}`}>
                <p className="text-[0.75rem] mt-1">
                  Securely store your billing details for hassle-free
                  transactions.
                </p>
                <button
                  className="mt-3 bg-primary_700 transition duration-500 ease-in-out hover:bg-primary_900 py-3 px-4 rounded-lg text-sm text-white"
                  onClick={(e) => handleBillingInfoModal(true, e)}
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
            <div className="h-[24px] w-[24px] rounded-[50%] border border-[#A19FA8] border-dashed"></div>
            <div className="flex-1 justify-between">
              <h3 className="text-matte text-sm font-semibold">
                Set your notification preferences
              </h3>
              <div className={`${showStages[3] ? "block" : "hidden"}`}>
                <p className="text-[0.75rem] mt-1">
                  Tailor your notification experience to suit your preferences.
                </p>
                <button
                  className="mt-3 bg-primary_700 transition duration-500 ease-in-out
                 hover:bg-primary_900 py-3 px-4 rounded-lg text-sm text-white"
                  onClick={(e) => handleNotificationPrefModal(true, e)}
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
            <div className="h-[24px] w-[24px] rounded-[50%] border border-[#A19FA8] border-dashed"></div>
            <div className="flex-1 justify-between">
              <h3 className="text-matte text-sm font-semibold">
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
                  onClick={(e) => handleInviteUsersModal(true, e)}
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
