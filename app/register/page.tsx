"use client";
import Business from "@/components/vendor/registration/Business";
import Personal from "@/components/vendor/registration/Personal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function RegisterPage() {
  const [personal, setPersonal] = useState(true);
  const [business, setBusiness] = useState(false);

  function moveToBusiness() {
    setPersonal(false);
    setBusiness(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [business]);

  return (
    <main className="min-h-screen md:flex w-full">
      <div
        className="min-h-[369px] flex flex-col md:block bg-[url('/assets/vendor/register/background.png')]
       bg-cover bg-no-repeat md:m-2 p-4 md:w-[30%]"
      >
        <Link href="/" className="hidden md:inline-block">
          <Image
            src="/assets/vendor/login/mdm_logo.svg"
            width={80}
            height={32}
            alt="Logo"
          />
        </Link>
        <div className="md:hidden flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/vendor/login/mdm_logo.svg"
              width={70}
              height={22}
              alt="Logo"
            />
          </Link>
          <div className="text-right ">
            <span className="text-white opacity-80">Having Troubles? </span>
            <span className="text-white  md:text-base font-bold cursor-pointer">
              Get Help
            </span>
          </div>
        </div>
        <div className="my-auto text-center md:text-left text-white md:my-0 md:mt-20 font-semibold text-2xl">
          Few clicks away from setting up your company’s platform
        </div>
      </div>
      <div className="bg-[#FBFBFD] mr-2 my-2 p-4 md:w-[70%] pb-10">
        <div className="hidden md:block text-right mx-[14px]">
          <span className="opacity-80">Having Troubles? </span>
          <span className="text-primary_700  md:text-base font-bold cursor-pointer">
            Get Help
          </span>
        </div>
        {personal && <Personal changeScreen={moveToBusiness} />}
        {business && <Business />}
      </div>
    </main>
  );
}

export default RegisterPage;
