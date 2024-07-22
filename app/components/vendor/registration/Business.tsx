"use client";

import Ring from "@/components/ring";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaCity } from "react-icons/fa6";
import DeviceQty from "@/components/device_qty";
import useDeviceQty from "@/components/device_qty/useDeviceQty";

function Business() {
  const [loading, setLoading] = useState(false);
  const {
    deviceNo,
    increaseDevice,
    decreaseDevice,
    handleDeviceChange,
    submitRequest,
  } = useDeviceQty();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submitRequest();
    setLoading(!loading);
  }
  return (
    <div className="mt-2 md:mt-7">
      <h1 className="text-xl md:text-2xl font-semibold font-Poppins">
        Business Details
      </h1>
      <p className="mt-2 text-sm 2xl:text-base font-light">
        Please take a moment to setup your business.
      </p>
      <div className="mt-10">
        <div>
          <p className="font-semibold flex">Business Logo</p>
          <div className="mt-3 flex gap-3 items-center">
            <Image
              src="/assets/vendor/register/photo.svg"
              width={64}
              height={64}
              alt="photo_edit"
            />
            <div>
              <button className="bg-primary_100 text-sm 2xl:text-base font-medium p-3 rounded-[8px] text-primary_700">
                Upload Image
              </button>
              <p className="text-[0.7rem] 2xl:text-sm mt-2 opacity-80">
                .png or .jpg files up to 8MB. Recommended size is 72 x 72
              </p>
            </div>
          </div>
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="">
            <div className="w-full">
              <label className="text-sm 2xl:text-base font-semibold">
                Business Name
              </label>
              <div className="relative">
                <input
                  placeholder="Devos Inc"
                  type="text"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm 2xl:text-base
                   border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                />
                <Image
                  src={"/assets/vendor/register/briefcase.svg"}
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                  width={20}
                  height={20}
                  alt="business"
                />
              </div>
            </div>
            <div className="w-full mt-3">
              <label className="text-sm 2xl:text-base font-semibold">
                Business Address
              </label>
              <div className="relative">
                <input
                  placeholder="42 Saka Tinibu"
                  type="text"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm 2xl:text-base
                   border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                />
                <MdLocationPin
                  fill="#AAAABF"
                  size={22}
                  className="placeholder:font-light absolute top-[50%] -translate-y-[50%] left-2"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-3">
            <div className="w-full">
              <label className="text-sm 2xl:text-base font-semibold">
                State
              </label>
              <div className="relative">
                <input
                  placeholder="Lagos"
                  type="text"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm 2xl:text-base border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                />
                <Image
                  src={"/assets/vendor/register/compass.svg"}
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                  width={20}
                  height={20}
                  alt="business"
                />
                {/* <FaCity
                  fill="#AAAABF"
                  size={22}
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                /> */}
              </div>
            </div>
            <div className="w-full">
              <label className="text-sm 2xl:text-base font-semibold">
                City
              </label>
              <div className="relative">
                <input
                  placeholder="Lekki"
                  type="text"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm 2xl:text-base border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                />
                <FaCity
                  fill="#AAAABF"
                  size={22}
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                />
              </div>
            </div>
          </div>
          {/* <div className="mt-3">
            <p className="opacity-90 text-sm 2xl:text-base">
              *Select the quantity of sachet device you want
            </p>
            <DeviceQty
              deviceNo={deviceNo}
              increaseDevice={increaseDevice}
              decreaseDevice={decreaseDevice}
              handleChange={handleDeviceChange}
            />
          </div> */}
          <div className="mt-8">
            <button
              className="max-w-[1000px] mx-auto bg-primary_700 flex justify-center items-center font-semibold 
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
