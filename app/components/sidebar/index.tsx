"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="bg-primary_700 max-h-[700px] p-4 px-2 rounded-[16px] w-[132px] flex flex-col items-center">
      <Link href="/" className="cursor-pointer mb-5">
        <Image
          src="/assets/vendor/login/mdm_logo.svg"
          width={80}
          height={32}
          alt="Logo"
          className="cursor-pointer"
        />
      </Link>
      <Link
        href="/"
        className={`  ${
          pathname === "/" ? "dash_active" : "opacity-80"
        } flex items-center justify-center  hover:opacity-100 w-full h-[70px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/dashboard.svg"
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
            src="/assets/vendor/sidebar/cellphone-fill.svg"
            width={20}
            height={20}
            alt="Logo"
          />
          <p className="text-center text-white text-sm">Devices</p>
        </div>
      </Link>
      <Link
        href="/customers"
        className={`  ${
          pathname.startsWith("/customers") ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/customers.svg"
            width={20}
            height={20}
            alt="Logo"
          />
          <p className="text-center text-white text-sm">Customers</p>
        </div>
      </Link>
      <Link
        href="/notifications/messages"
        className={`  ${
          pathname.startsWith("/notifications") ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/notification.svg"
            width={20}
            height={20}
            alt="Logo"
          />
          <p className="text-center text-white text-sm">Notifications</p>
        </div>
      </Link>
      <Link
        href="/billings/subcriptions"
        className={`  ${
          pathname === "/billings" ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/billing.svg"
            width={20}
            height={20}
            alt="Logo"
          />
          <p className="text-center text-white text-sm">Billings</p>
        </div>
      </Link>
      <Link
        href="/reports"
        className={`  ${
          pathname.startsWith("/reports") ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/report.svg"
            width={20}
            height={20}
            alt="Logo"
          />
          <p className="text-center text-white text-sm">Reports</p>
        </div>
      </Link>
      <Link
        href="/team/all"
        className={`  ${
          pathname === "/team" ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/teams.svg"
            width={22}
            height={22}
            alt="Logo"
          />
          <p className="text-center text-white text-sm">Team</p>
        </div>
      </Link>
      <Link
        href="/settings"
        className={`  ${
          pathname.startsWith("/settings") ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/settings.svg"
            width={22}
            height={22}
            alt="Logo"
          />
          <p className="text-center text-white text-sm">Settings</p>
        </div>
      </Link>
    </nav>
  );
}

export default Sidebar;
