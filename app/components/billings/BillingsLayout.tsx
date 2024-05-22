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

  return (
    <nav className="flex gap-1 items-center">
      <Link
        href={subcriptionsUrl}
        className={`font-Poppins py-2 px-3 text-sm min-w-[120px] text-center rounded-lg ${
          pathname === subcriptionsUrl ? linkStyle : "border border-[#DADAE8]"
        } `}
      >
        Subcriptions
      </Link>
      <Link
        href={paymentsUrl}
        className={`font-Poppins py-2 px-3 text-sm min-w-[120px] text-center rounded-lg  ${
          pathname === paymentsUrl ? linkStyle : "border border-[#DADAE8] "
        }`}
      >
        Payments
      </Link>
      <Link
        href={invoicesUrl}
        className={`font-Poppins py-2 px-3 text-sm min-w-[120px] text-center rounded-lg ${
          pathname === invoicesUrl ? linkStyle : "border border-[#DADAE8] "
        }`}
      >
        Invoices
      </Link>
    </nav>
  );
}
