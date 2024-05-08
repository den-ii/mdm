"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="bg-primary_700 max-h-[1000px] p-4 px-2 rounded-[16px] w-[132px] flex flex-col items-center">
      <div className="mb-5">
        <Link href="/" className="hidden md:inline-block">
          <Image
            src="/assets/vendor/login/mdm_logo.svg"
            width={80}
            height={32}
            alt="Logo"
          />
        </Link>
      </div>
      <Link
        href="/"
        className={`  ${
          pathname === "/" ? "dash_active" : "opacity-80"
        } flex items-center justify-center  hover:opacity-100 w-full h-[70px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/dashboard.svg"
            width={20}
            height={20}
            alt="Logo"
          />
          <p className="text-center text-white text-sm">Dashboard</p>
        </div>
      </Link>
      <Link
        href="/devices"
        className={`  ${
          pathname === "/devices" ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/cellphone-fill.svg"
            width={20}
            height={20}
            alt="Logo"
          />
          <p className="text-center text-white text-sm">Devices</p>
        </div>
      </Link>
    </nav>
  );
}

export default Sidebar;
