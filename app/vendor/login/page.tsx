"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

function IndexPage() {
  return (
    <main className="flex p-2 min-h-[100vh]">
      <div className="bg-[url('/assets/vendor/login/background.png')] bg-fill bg-no-repeat w-[42%] min-h-screen">
        <div className="mt-[2.6rem]">
          <div className="flex flex-col items-center">
            <Image
              src="/assets/vendor/login/mdm_logo.svg"
              width={80}
              height={32}
              alt="Logo"
            />
            <p
              className="text-sm mt-1"
              style={{ color: "rgba(255, 255, 255, 0.65)" }}
            >
              Vendor Web
            </p>
          </div>
          <p className="mt-[3.1rem] text-white text-center font-semibold text-3xl px-1">
            Empowering micro-merchants with digitized payments.
          </p>
        </div>
        <div
          id="preview"
          className="mt-[5.3rem] w-[85%] max-w-[720px] relative"
        >
          <img src="/assets/vendor/login/side1_img.svg" alt="Logo" />
        </div>
      </div>
      <div className="w-[60%] bg-[#FBFBFD]">
        <div className="text-right mx-[14px] my-[14px]">
          Having Troubles ?{" "}
          <span className="text-base font-bold cursor-pointer">Get Help</span>
        </div>
        <div className="flex flex-col max-w-[625px] mx-auto mt-[5.95rem] p-4 ">
          <h1 className="text-2xl font-semibold">
            Welcome, Great To Have You Finally Join Us
          </h1>
          <p className="text-[#1D2433CC] mt-1">
            Don't have an account?{" "}
            <span className="text-base font-semibold cursor-pointer">
              Register
            </span>
          </p>
          <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="" className="text-sm font-semibold">
                Email Address
              </label>
              <div className="relative mt-1">
                <input
                  placeholder="vendor@info.ng"
                  type="email"
                  className="p-3 pl-9 w-full  text-sm border border-[#DADAE8] rounded-[8px]"
                />
                <img
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                  src="/assets/vendor/login/email.svg"
                  width={24}
                  height={24}
                  alt={"email"}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="" className="text-sm font-semibold">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  placeholder="**********"
                  type="password"
                  className="p-3 px-9 w-full  text-sm border border-[#DADAE8] rounded-[8px]"
                />
                <img
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                  src="/assets/vendor/login/lock.svg"
                  width={24}
                  height={24}
                  alt={"Password"}
                />
                <img
                  className="absolute cursor-pointer top-[50%] -translate-y-[50%] right-2"
                  src="/assets/vendor/login/eye.svg"
                  width={24}
                  height={24}
                  alt={"Password"}
                />
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-base font-semibold text-white w-full p-3 rounded-[8px] opacity-100 transition duration-300 ease-in-out hover:opacity-90 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default IndexPage;
