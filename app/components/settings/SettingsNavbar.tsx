"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SettingsNavbar() {
  const pathname = usePathname();

  const accountUrl = "/settings/account";
  const securityUrl = "/settings/security";
  const preferencesUrl = "/settings/preferences";

  const linkStyle =
    "bg-primary_100 border border-primary_700 text-primary_700 rounded-2xl";

  return (
    <nav className="flex gap-3 items-center">
      <Link
        href={accountUrl}
        className={`font-Poppins text-sm 2xl:text-base rounded-2xl py-2 px-3 ${
          pathname === accountUrl
            ? linkStyle
            : "border border-[#DADAE8] text-gray-500"
        }`}
      >
        Account
      </Link>
      <Link
        href={securityUrl}
        className={`font-Poppins rounded-2xl text-sm 2xl:text-base py-2 px-3  ${
          pathname === securityUrl
            ? linkStyle
            : "border border-[#DADAE8] text-gray-500"
        }`}
      >
        Login & Security
      </Link>
      <Link
        href={preferencesUrl}
        className={`font-Poppins rounded-2xl text-sm 2xl:text-base py-2 px-3  ${
          pathname === preferencesUrl
            ? linkStyle
            : "border border-[#DADAE8] text-gray-500"
        }`}
      >
        Notifications & Preferences
      </Link>
    </nav>
  );
}
