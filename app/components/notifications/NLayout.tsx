"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NotificationsLayout() {
  const pathname = usePathname();

  const messagesUrl = "/notifications/messages";
  const devicesUrl = "/notifications/devices";
  const linkStyle =
    "bg-primary_100 border border-primary_700 text-primary_700 rounded-2xl";

  return (
    <nav className="flex gap-3 items-center">
      <Link
        href={messagesUrl}
        className={`font-Poppins text-sm 2xl:text-base rounded-2xl py-2 px-3 ${
          pathname === messagesUrl
            ? linkStyle
            : "border border-[#DADAE8] text-gray-500"
        }`}
      >
        Messaging System
      </Link>
      <Link
        href={devicesUrl}
        className={`font-Poppins rounded-2xl text-sm 2xl:text-base  py-2 px-3  ${
          pathname === devicesUrl
            ? linkStyle
            : "border border-[#DADAE8] text-gray-500"
        }`}
      >
        Device Notifications
      </Link>
    </nav>
  );
}
