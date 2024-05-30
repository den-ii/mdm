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
  return (
    <nav className="flex gap-1 items-center">
      <Link
        href={allUrl}
        className={`flex items-center justify-center gap-2 font-Poppins py-2 px-3 text-sm min-w-[120px] rounded-lg ${
          pathname === allUrl ? linkStyle : "border border-[#DADAE8]"
        } `}
      >
        <span className={pathname === allUrl ? "" : ""}>All</span>

        <span
          className={`py-[0.2rem] px-2  flex items-center justify-center rounded-full  ${
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
        className={`flex items-center justify-center gap-2 font-Poppins py-2 px-3 text-sm min-w-[120px] rounded-lg ${
          pathname === availableUrl ? linkStyle : "border border-[#DADAE8]"
        } `}
      >
        <span>Available</span>
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
        className={`flex items-center justify-center gap-2 font-Poppins py-2 px-3 text-sm min-w-[120px] rounded-lg ${
          pathname === blockedUrl ? linkStyle : "border border-[#DADAE8]"
        } `}
      >
        <span>Blocked</span>
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
        className={`flex items-center justify-center gap-2 font-Poppins py-2 px-3 text-sm min-w-[120px] rounded-lg ${
          pathname === pendingInviteUrl ? linkStyle : "border border-[#DADAE8]"
        } `}
      >
        <span>Pending Invite</span>
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
