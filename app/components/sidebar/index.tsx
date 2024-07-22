"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="bg-primary_700 sidebar max-h-[900px] p-4 px-2 2xl:px-4 rounded-[16px] w-[132px] 2xl:w-[180px] flex flex-col items-center">
      <Link href="/" className="cursor-pointer mb-5">
        <Image
          src="/assets/vendor/login/mdm_logo.svg"
          width={80}
          height={32}
          alt="Logo"
          className="cursor-pointer 2xl:hidden"
        />
        <Image
          src="/assets/vendor/login/mdm_logo.svg"
          width={90}
          height={42}
          alt="Logo"
          className="cursor-pointer hidden 2xl:inline-block"
        />
      </Link>
      <Link
        href="/"
        className={`  ${
          pathname === "/" ? "dash_active" : "opacity-80"
        } flex items-center justify-center  hover:opacity-100 w-full h-[70px] 2xl:h-[90px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/dashboard.svg"
            width={20}
            height={20}
            alt="Logo"
            className="2xl:hidden"
          />
          <Image
            src="/assets/vendor/sidebar/dashboard.svg"
            width={30}
            height={30}
            alt="Logo"
            className="sm:hidden 2xl:inline-block"
          />
          <p className="text-center text-white text-sm 2xl:text-base">
            Dashboard
          </p>
        </div>
      </Link>
      <Link
        href="/devices"
        className={`  ${
          pathname.startsWith("/devices") ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] 2xl:h-[90px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/cellphone-fill.svg"
            width={20}
            height={20}
            alt="Logo"
            className="2xl:hidden"
          />
          <Image
            width={30}
            src="/assets/vendor/sidebar/cellphone-fill.svg"
            height={30}
            alt="Logo"
            className="sm:hidden 2xl:inline-block"
          />
          <p className="text-center text-white text-sm 2xl:text-base">
            Devices
          </p>
        </div>
      </Link>
      <Link
        href="/customers"
        className={`  ${
          pathname.startsWith("/customers") ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] 2xl:h-[90px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/customers.svg"
            width={20}
            height={20}
            className="2xl:hidden"
            alt="Logo"
          />
          <Image
            width={30}
            src="/assets/vendor/sidebar/customers.svg"
            height={30}
            alt="Logo"
            className="sm:hidden 2xl:inline-block"
          />
          <p className="text-center text-white text-sm 2xl:text-base">
            Customers
          </p>
        </div>
      </Link>
      <Link
        href="/notifications/messages"
        className={`  ${
          pathname.startsWith("/notifications") ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] 2xl:h-[90px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/notification.svg"
            width={20}
            height={20}
            alt="Logo"
            className="2xl:hidden"
          />
          <Image
            src="/assets/vendor/sidebar/notification.svg"
            width={30}
            height={30}
            alt="Logo"
            className="sm:hidden 2xl:inline-block"
          />
          <p className="text-center text-white text-sm 2xl:text-base">
            Notifications
          </p>
        </div>
      </Link>
      <Link
        href="/billings/subcriptions"
        className={`  ${
          pathname.startsWith("/billings") ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] 2xl:h-[90px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/billing.svg"
            width={20}
            height={20}
            alt="Logo"
            className="2xl:hidden"
          />
          <Image
            src="/assets/vendor/sidebar/billing.svg"
            width={30}
            height={30}
            alt="Logo"
            className="sm:hidden 2xl:inline-block"
          />
          <p className="text-center text-white text-sm 2xl:text-base">
            Billings
          </p>
        </div>
      </Link>
      <Link
        href="/reports"
        className={`  ${
          pathname.startsWith("/reports") ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] 2xl:h-[90px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/report.svg"
            width={20}
            height={20}
            alt="Logo"
            className="2xl:hidden"
          />
          <Image
            src="/assets/vendor/sidebar/report.svg"
            width={30}
            height={30}
            alt="Logo"
            className="sm:hidden 2xl:inline-block"
          />
          <p className="text-center text-white text-sm 2xl:text-base">
            Reports
          </p>
        </div>
      </Link>
      <Link
        href="/team/all"
        className={`  ${
          pathname.startsWith("/team") ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] 2xl:h-[90px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/teams.svg"
            width={22}
            height={22}
            alt="Logo"
            className="2xl:hidden"
          />
          <Image
            src="/assets/vendor/sidebar/teams.svg"
            width={30}
            height={30}
            alt="Logo"
            className="sm:hidden 2xl:inline-block"
          />
          <p className="text-center text-white text-sm 2xl:text-base">Team</p>
        </div>
      </Link>
      <Link
        href="/settings/account"
        className={`  ${
          pathname.startsWith("/settings") ? "dash_active" : "opacity-80"
        } mt-2 flex items-center justify-center  hover:opacity-100 w-full h-[70px] 2xl:h-[90px] rounded-[12px]`}
      >
        <div className="flex flex-col gap-1 items-center">
          <Image
            src="/assets/vendor/sidebar/settings.svg"
            width={22}
            height={22}
            alt="Logo"
            className="2xl:hidden"
          />
          <Image
            src="/assets/vendor/sidebar/settings.svg"
            width={30}
            height={30}
            alt="Logo"
            className="sm:hidden 2xl:inline-block"
          />

          <p className="text-center text-white text-sm 2xl:text-base">
            Settings
          </p>
        </div>
      </Link>
    </nav>
  );
}

export default Sidebar;
