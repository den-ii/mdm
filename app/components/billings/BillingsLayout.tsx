"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BillingsLayout() {
  const pathname = usePathname();

  const subcriptionsUrl = "/billings/subcriptions";
  const invoicesUrl = "/billings/invoices";
  const paymentsUrl = "/billings/payments";

  const linkStyle =
    "bg-primary_100 border border-primary_700 text-primary_700 ";

  const inactiveStyle = "border border-[#DADAE8] text-gray-500 ";

  return (
    <nav className="flex gap-1 items-center">
      <Link
        href={subcriptionsUrl}
        className={`font-Poppins py-2 px-3 text-sm text-center rounded-2xl ${
          pathname === subcriptionsUrl ? linkStyle : inactiveStyle
        } `}
      >
        Subcriptions
      </Link>
      <Link
        href={paymentsUrl}
        className={`font-Poppins py-2 px-3 text-sm text-center rounded-2xl  ${
          pathname === paymentsUrl ? linkStyle : inactiveStyle
        }`}
      >
        Payments
      </Link>
      <Link
        href={invoicesUrl}
        className={`font-Poppins py-2 px-3 text-sm text-center rounded-2xl ${
          pathname === invoicesUrl ? linkStyle : inactiveStyle
        }`}
      >
        Invoices
      </Link>
    </nav>
  );
}
