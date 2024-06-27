"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function TeamLayout() {
  const pathname = usePathname();

  const allUrl = "/team/all";
  const availableUrl = "/team/available";
  const blockedUrl = "/team/blocked";
  const pendingInviteUrl = "/team/pending-invite";

  const linkStyle = "border border-primary_700 text-primary_700 ";
  const inactiveStyle = "border border-[#DADAE8]";
  return (
    <nav className="flex gap-2 items-center">
      <Link
        href={allUrl}
        className={`flex items-center justify-center gap-2 text-gray-500 font-Poppins py-2 px-3 text-sm rounded-2xl ${
          pathname === allUrl ? linkStyle : inactiveStyle
        }`}
      >
        <span
          className={
            pathname === allUrl ? "font-Poppins" : "font-Poppins text-gray-500"
          }
        >
          All
        </span>

        <span
          className={`py-[0.2rem] px-2 flex items-center justify-center rounded-full  ${
            pathname === allUrl
              ? "bg-primary_100 text-primary_700"
              : "bg-neutral_300 text-[#8A9099]"
          }`}
        >
          233
        </span>
      </Link>
      <Link
        href={availableUrl}
        className={`flex items-center justify-center gap-2 font-Poppins py-2 px-3 text-sm rounded-2xl ${
          pathname === availableUrl ? linkStyle : inactiveStyle
        }`}
      >
        <span
          className={
            pathname === availableUrl
              ? "font-Poppins"
              : "font-Poppins text-gray-500"
          }
        >
          Available
        </span>

        <span
          className={`py-[0.2rem] px-2  flex items-center justify-center rounded-full  ${
            pathname === availableUrl
              ? "bg-primary_100 text-primary_700"
              : "bg-neutral_300 text-[#8A9099]"
          }`}
        >
          0
        </span>
      </Link>
      <Link
        href={blockedUrl}
        className={`flex items-center justify-center gap-2 font-Poppins py-2 px-3 text-sm rounded-2xl ${
          pathname === blockedUrl ? linkStyle : inactiveStyle
        } `}
      >
        <span
          className={
            pathname === blockedUrl
              ? "font-Poppins"
              : "font-Poppins text-gray-500"
          }
        >
          Blocked
        </span>
        <span
          className={`py-[0.2rem] px-2  flex items-center justify-center rounded-full  ${
            pathname === blockedUrl
              ? "bg-primary_100 text-primary_700"
              : "bg-neutral_300 text-[#8A9099]"
          }`}
        >
          0
        </span>
      </Link>
      <Link
        href={pendingInviteUrl}
        className={`flex items-center justify-center gap-2 font-Poppins py-2 px-3 text-sm rounded-2xl ${
          pathname === pendingInviteUrl ? linkStyle : inactiveStyle
        } `}
      >
        <span
          className={
            pathname === pendingInviteUrl
              ? "font-Poppins"
              : "font-Poppins text-gray-500"
          }
        >
          Pending Invite
        </span>
        <span
          className={`py-[0.2rem] px-2  flex items-center justify-center rounded-full  ${
            pathname === pendingInviteUrl
              ? "bg-primary_100 text-primary_700"
              : "bg-neutral_300 text-[#8A9099]"
          }`}
        >
          0
        </span>
      </Link>
    </nav>
  );
}

export default TeamLayout;
