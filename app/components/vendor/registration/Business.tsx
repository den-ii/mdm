"use client";

import Ring from "@/components/ring";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaCity } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";

function Business() {
  const [deviceNo, setDeviceNo] = useState(0);
  const [loading, setLoading] = useState(false);

  function increaseDevice() {
    setDeviceNo((deviceNo) => deviceNo + 1);
  }

  function decreaseDevice() {
    if (deviceNo <= 0) return;
    setDeviceNo((deviceNo) => deviceNo - 1);
  }

  function handleDeviceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDeviceNo(parseInt(e.target.value));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(!loading);
  }
  return (
    <div className="mt-2 md:mt-7">
      <h1 className="text-xl md:text-2xl font-semibold">Business Details</h1>
      <p className="mt-2 opacity-80">
        Please take a moment to setup your business.
      </p>
      <div className="mt-10">
        <div>
          <p className="font-semibold flex ">Business Logo</p>
          <div className="mt-3 flex gap-3 items-center">
            <Image
              src="/assets/vendor/register/photo.svg"
              width={64}
              height={64}
              alt="photo_edit"
            />
            <div>
              <button className="bg-primary_100 text-sm font-semibold p-3 rounded-[8px] text-primary_700">
                Upload Image
              </button>
              <p className="text-[0.7rem] mt-2 opacity-80">
                .png or .jpg files up to 8MB. Recommended size is 72 x 72
              </p>
            </div>
          </div>
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="">
            <div className="w-full">
              <label className="text-sm font-semibold">Business Name</label>
              <div className="relative">
                <input
                  placeholder="Business Name"
                  type="text"
                  className="mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-primary_700"
                />
                <MdBusinessCenter
                  fill="#AAAABF"
                  size={22}
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <label className="text-sm font-semibold">Business Address</label>
              <div className="relative">
                <input
                  placeholder="Location"
                  type="text"
                  className="mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-primary_700"
                />
                <MdLocationPin
                  fill="#AAAABF"
                  size={22}
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="w-full">
              <label className="text-sm font-semibold">State</label>
              <div className="relative">
                <input
                  placeholder="Lagos"
                  type="text"
                  className="mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-primary_700"
                />
                <FaCity
                  fill="#AAAABF"
                  size={22}
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="text-sm font-semibold">City</label>
              <div className="relative">
                <input
                  placeholder="Lekki"
                  type="text"
                  className="mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-primary_700"
                />
                <FaCity
                  fill="#AAAABF"
                  size={22}
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p className="opacity-90 text-sm">
              *Select the quantity of sachet device you want
            </p>
            <div className="flex justify-between mt-2">
              <div className="flex gap-2 items-center ">
                <div className="bg-[#F0F5FF] p-3 rounded-[50%]">
                  {/* <FaMobile fill="#0151FD" /> */}
                  <Image
                    src="/assets/devices/blue.svg"
                    width={20}
                    height={20}
                    alt="device"
                  />
                </div>
                <div className="font-semibold text-sm">Sachet Device</div>
              </div>
              <div className="flex gap-3 items-center">
                <div
                  className="p-2 border hover:border-primary_700 border-[#E1E6EF] rounded-[8px] cursor-pointer"
                  onClick={decreaseDevice}
                >
                  <Image
                    src="/assets/devices/minus.svg"
                    width={20}
                    height={20}
                    alt="device"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    value={deviceNo}
                    onChange={handleDeviceChange}
                    className="block font-semibold w-[40px] text-center p-2 appearance-none outline-none border bg-[#F8F9FC] border-[#E1E6EF] rounded-[8px]"
                  />
                </div>
                <div
                  className="p-2 border hover:border-primary_700 border-[#E1E6EF] rounded-[8px] cursor-pointer"
                  onClick={() => increaseDevice()}
                >
                  <Image
                    src="/assets/devices/plus.svg"
                    width={20}
                    height={20}
                    alt="device"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              className="bg-primary_700 flex justify-center items-center font-semibold 
        text-white w-full h-[46px] rounded-[8px] 
        opacity-100 transition duration-500 ease-in-out hover:bg-primary_900
        focus:shadow-primary-2 focus:outline-none focus:ring-0"
            >
              {loading ? <Ring color="white" size={32} /> : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Business;
