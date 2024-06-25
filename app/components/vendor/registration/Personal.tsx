"use client";

import Ring from "@/components/ring";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { FaUser } from "react-icons/fa";

interface IPersonal {
  changeScreen: () => void;
}

function Personal({ changeScreen }: IPersonal) {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(!loading);
    changeScreen();
  }

  return (
    <div className="mt-3 md:mt-7">
      <h1 className="text-xl md:text-2xl font-medium">Personal Details</h1>
      <p className="mt-1 md:mt-2 text-sm font-light">
        Please take a moment to introduce yourself.
      </p>
      <div className="mt-10">
        <div>
          <p className="font-medium flex ">Profile Picture</p>
          <div className="mt-3 flex gap-3 items-center">
            <Image
              src="/assets/vendor/register/photo.svg"
              width={64}
              height={64}
              alt="photo_edit"
            />
            <div>
              <button className="bg-primary_100 text-sm font-medium p-3 rounded-[8px] text-primary_700">
                Upload Image
              </button>
              <p className="text-[0.7rem] mt-2 opacity-80">
                .png or .jpg files up to 8MB. Recommended size is 72 x 72
              </p>
            </div>
          </div>
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <label className="text-sm font-medium">First Name</label>
              <div className="relative">
                <input
                  placeholder="First Name"
                  type="text"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                />
                <FaUser
                  fill="#AAAABF"
                  size={20}
                  className="absolute top-[55%] -translate-y-[50%] left-2"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="text-sm font-medium">Last Name</label>
              <div className="relative">
                <input
                  placeholder="Last Name"
                  type="text"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                />
                <FaUser
                  fill="#AAAABF"
                  size={20}
                  className="absolute top-[55%] -translate-y-[50%] left-2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-3">
            <div className="w-full">
              <label className="text-sm font-medium">Phone Number</label>
              <input
                placeholder="+234 805 687 6798"
                type="tel"
                className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
              />
            </div>
            <div className="w-full">
              <label className="text-sm font-medium">Email Address</label>
              <div className="relative">
                <input
                  placeholder="vendor@info.ng"
                  type="email"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                />
                <img
                  className="absolute top-[55%] -translate-y-[50%] left-2"
                  src="/assets/vendor/login/email.svg"
                  width={24}
                  height={24}
                  alt={"email"}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-3">
            <div className="w-full">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <input
                  placeholder="***********"
                  type="password"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                />
                <img
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                  src="/assets/vendor/login/lock.svg"
                  width={24}
                  height={24}
                  alt={"Password"}
                />
              </div>
            </div>
            <div className="w-full">
              <label className="text-sm font-medium">Confirm Password</label>
              <div className="relative">
                <input
                  placeholder="***********"
                  type="password"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                />
                <img
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                  src="/assets/vendor/login/lock.svg"
                  width={24}
                  height={24}
                  alt={"Password"}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              className="max-w-[1000px] mx-auto bg-primary_700 flex justify-center items-center font-semibold 
        text-white w-full h-[46px] rounded-[8px] 
        opacity-100 transition duration-500 ease-in-out hover:bg-primary_900 
         focus:shadow-primary-2 focus:outline-none focus:ring-0"
            >
              {loading ? <Ring color="white" size={32} /> : "Continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Personal;
