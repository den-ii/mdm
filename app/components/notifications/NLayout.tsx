"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NotificationsLayout() {
  const pathname = usePathname();

  const messagesUrl = "/notifications/messages";
  const devicesUrl = "/notifications/devices";
  const linkStyle =
    "bg-primary_100 border border-primary_700 text-primary_700 rounded-lg";

  return (
    <nav className="flex gap-3 items-center">
      <Link
        href={messagesUrl}
        className={`font-Poppins text-sm rounded-lg py-2 px-3 ${
          pathname === messagesUrl ? linkStyle : "border border-[#DADAE8]"
        }`}
      >
        Messaging System
      </Link>
      <Link
        href={devicesUrl}
        className={`font-Poppins rounded-lg text-sm py-2 px-3  ${
          pathname === devicesUrl ? linkStyle : "border border-[#DADAE8]"
        }`}
      >
        Device Notifications
      </Link>
    </nav>
  );
}
