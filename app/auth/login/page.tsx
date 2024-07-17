"use client";
import Image from "next/image";
import { useState, useEffect, useRef, FormEvent } from "react";
import Ring from "@/components/ring";
import Link from "next/link";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(!loading);
  }

  return (
    <main className="md:flex md:p-2 min-h-screen">
      {/* SMALL SCREENS */}
      <div className="md:hidden bg-primary_900 p-4 pb-20">
        <div
          className="text-right text-sm 2xl:text-base"
          style={{ color: "rgba(255, 255, 255, 0.85)" }}
        >
          Having Troubles?{" "}
          <span className="text-white font-semibold cursor-pointer">
            Get Help
          </span>
        </div>
        <div>
          <div className="mt-14">
            <Link href="/" className="flex flex-col items-center">
              <Image
                src="/assets/vendor/login/mdm_logo.svg"
                width={70}
                height={22}
                alt="Logo"
              />
              <p
                className="text-sm 2xl:text-base mt-1"
                style={{ color: "rgba(255, 255, 255, 0.65)" }}
              >
                Vendor Web
              </p>
            </Link>
            <p className="mt-12 text-white text-center font-semibold text-2xl">
              Empowering micro-merchants with digitized payments.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-[url('/assets/vendor/login/background.png')] bg-cover bg-no-repeat w-[42%] min-h-[93vh]">
        <div className="mt-[2.6rem]">
          <Link href="/" className="flex flex-col items-center">
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
          </Link>
          <p className="mt-[3.1rem] text-white text-center font-semibold text-3xl px-3">
            Empowering micro-merchants with digitized payments.
          </p>
        </div>
        <div
          id="preview"
          className="mt-[5.3rem] w-[85%] max-w-[720px] relative"
        >
          <Image
            width={500}
            height={500}
            src="/assets/vendor/login/side1_img.svg"
            alt="Logo"
          />
        </div>
      </div>
      <div className="md:w-[60%] bg-[#FBFBFD]">
        <div className="hidden md:block font-light text-right mx-[14px] my-[14px]">
          Having Troubles?{" "}
          <span className="text-primary_700 md:text-base font-semibold cursor-pointer">
            Get Help
          </span>
        </div>
        <div className="flex flex-col max-w-[625px] mx-auto mt-2 md:mt-[5.95rem] p-4 ">
          <h1 className="text-xl md:text-2xl font-semibold">
            Welcome, Great To Have You Finally Join Us
          </h1>
          <p className="text-[#1D2433CC] font-light text-sm 2xl:text-base mt-2 md:mt-1">
            Don't have an account?{" "}
            <Link
              href="register"
              className="text-sm 2xl:text-base text-primary_700 md:text-base font-medium cursor-pointer"
            >
              Register
            </Link>
          </p>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="" className="text-sm 2xl:text-base font-medium">
                Email Address
              </label>
              <div className="relative mt-1">
                <input
                  placeholder="vendor@info.ng"
                  type="email"
                  className="placeholder:font-light p-3 pl-9 w-full text-sm 2xl:text-base border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
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
              <label htmlFor="" className="text-sm 2xl:text-base font-medium">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  placeholder="**********"
                  type={showPassword ? "text" : "password"}
                  className="placeholder:font-light p-3 px-9 w-full  text-sm 2xl:text-base
                   border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
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
                  onClick={handleShowPassword}
                  width={24}
                  height={24}
                  alt={"Password"}
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                className=" bg-primary_700 flex  justify-center items-center font-semibold 
              text-white w-full h-[40px] md:h-[46px] rounded-[8px] 
               transition duration-500 ease-in-out hover:bg-primary_900
              focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0"
              >
                {loading ? <Ring color="white" size={30} /> : "Log in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
