"use client";
import Image from "next/image";
import { useState } from "react";
import RequestDeviceModal from "../modals/RequestDeviceModal";

function FTU() {
  const [requestDeviceModal, setRequestDeviceModal] = useState(false);

  const handleRequestDeviceModal = (bool: boolean) =>
    setRequestDeviceModal(bool);

  return (
    <div>
      {/* -----------------------------------  Modals -------------------------------------------*/}

      {requestDeviceModal && (
        <RequestDeviceModal
          closeModal={() => handleRequestDeviceModal(false)}
        />
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
          <div className="flex bg-primary_100 px-3 py-5 rounded-[12px] gap-3">
            <div className="h-[24px] w-[24px] rounded-[50%] border border-[#A19FA8] border-dashed"></div>
            <div className="flex-1 justify-between">
              <h3 className="text-matte text-sm font-semibold">
                Request Additional Devices (If Needed)
              </h3>
              <p className="text-[0.75rem] mt-1">
                Request more devices effortlessly when your business demands it
              </p>
              <button
                className="mt-3 bg-primary_700 py-3 px-4 rounded-lg text-sm text-white"
                onClick={() => handleRequestDeviceModal(true)}
              >
                Request Device
              </button>
            </div>
            <div>
              <Image
                src="/assets/vendor/dashboard/request_device.svg"
                width={80}
                height={100}
                alt="request devices"
              />
            </div>
          </div>
          <div className="mt-3 flex bg-primary_100 px-3 py-5 rounded-[12px] gap-3">
            <div className="h-[24px] w-[24px] rounded-[50%] border border-[#A19FA8] border-dashed"></div>
            <div className="flex-1 justify-between">
              <h3 className="text-matte text-sm font-semibold">
                Add Billing Information
              </h3>
              <p className="text-[0.75rem] mt-1">
                Securely store your billing details for hassle-free
                transactions.
              </p>
              <button className="mt-3 bg-primary_700 py-3 px-4 rounded-lg text-sm text-white">
                Initiate Billing Setup
              </button>
            </div>
            <div>
              <Image
                src="/assets/vendor/dashboard/billing_info.svg"
                width={80}
                height={100}
                alt="billing information"
              />
            </div>
          </div>

          <div className="mt-3 flex bg-primary_100 px-3 py-5 rounded-[12px] gap-3">
            <div className="h-[24px] w-[24px] rounded-[50%] border border-[#A19FA8] border-dashed"></div>
            <div className="flex-1 justify-between">
              <h3 className="text-matte text-sm font-semibold">
                Set your notification preferences
              </h3>
              <p className="text-[0.75rem] mt-1">
                Tailor your notification experience to suit your preferences.
              </p>
              <button className="mt-3 bg-primary_700 py-3 px-4 rounded-lg text-sm text-white">
                Set Notification Preference
              </button>
            </div>
            <div>
              <Image
                src="/assets/vendor/dashboard/notification_preference.svg"
                width={80}
                height={100}
                alt="notification preferences"
              />
            </div>
          </div>

          <div className="mt-3 flex bg-primary_100 px-3 py-5 rounded-[12px] gap-3">
            <div className="h-[24px] w-[24px] rounded-[50%] border border-[#A19FA8] border-dashed"></div>
            <div className="flex-1 justify-between">
              <h3 className="text-matte text-sm font-semibold">
                Send Invites to Team Members
              </h3>
              <p className="text-[0.75rem] mt-1">
                Strengthen your workforce by easily extending invitations to
                join your platform.
              </p>
              <button className="mt-3 bg-primary_700 py-3 px-4 rounded-lg text-sm text-white">
                Invite User
              </button>
            </div>
            <div>
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
