"use client";

import Ring from "@/components/ring";
import Image from "next/image";
import { FormEvent, useState } from "react";

function IndexPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(!loading);
  }

  return (
    <main className="min-h-screen flex">
      <div className="bg-[url('/assets/vendor/register/background.png')] bg-fill bg-no-repeat m-2 p-4 w-[30%]">
        <div>
          <Image
            src="/assets/vendor/login/mdm_logo.svg"
            width={80}
            height={32}
            alt="Logo"
          />
        </div>
        <div className="text-white mt-20 font-semibold text-2xl">
          Few clicks away from setting up your company’s platform
        </div>
      </div>
      <div className="bg-[#FBFBFD] mr-2 my-2 p-4 w-[70%] pb-10">
        <div className="hidden md:block text-right mx-[14px]">
          Having Troubles?{" "}
          <span className="text-primary_700  md:text-base font-bold cursor-pointer">
            Get Help
          </span>
        </div>
        <div className="mt-7">
          <h1 className="text-2xl font-semibold">Personal Details</h1>
          <p className="mt-2">Please take a moment to introduce yourself</p>
          <div className="mt-10">
            <div>
              <p className="font-semibold flex ">Profile Picture</p>
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
                  <p className="text-[0.7rem] mt-2">
                    .png or .jpg files up to 8MB. Recommended size is 72 x 72
                  </p>
                </div>
              </div>
            </div>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="flex gap-3">
                <div className="w-full">
                  <label className="text-sm">First Name</label>
                  <input
                    placeholder="Enter First Name"
                    type="text"
                    className="mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-base"
                  />
                </div>
                <div className="w-full">
                  <label className="text-sm">Last Name</label>
                  <input
                    placeholder="Enter Last Name"
                    type="email"
                    className="mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-base"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <div className="w-full">
                  <label className="text-sm">Phone Number</label>
                  <input
                    placeholder="Enter First Name"
                    type="text"
                    className="mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-base"
                  />
                </div>
                <div className="w-full">
                  <label className="text-sm">Email Address</label>
                  <input
                    placeholder="Enter Email Address"
                    type="email"
                    className="mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-base"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <div className="w-full">
                  <label className="text-sm">Password</label>
                  <input
                    placeholder="Enter Password"
                    type="text"
                    className="mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-base"
                  />
                </div>
                <div className="w-full">
                  <label className="text-sm">Confirm Password</label>
                  <input
                    placeholder="Enter Password"
                    type="email"
                    className="mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-base"
                  />
                </div>
              </div>
              <div className="mt-8">
                <button
                  className="bg-primary_700 flex justify-center items-center font-semibold 
              text-white w-full h-[46px] rounded-[8px] 
              opacity-100 transition duration-300 ease-in-out hover:opacity-90 
              focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0"
                >
                  {loading ? <Ring color="white" size={32} /> : "Continue"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default IndexPage;
