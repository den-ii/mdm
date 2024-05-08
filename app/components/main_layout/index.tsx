"use client";
import "@/styles/globals.css";
import { ReduxProvider } from "../../../redux/provider";
import { usePathname } from "next/navigation";
import Sidebar from "../sidebar";
import Navbar from "../navbar";

interface IRootLayout {
  children: React.ReactNode;
}

function index({ children }: IRootLayout) {
  const pathName = usePathname();

  let body;
  if (pathName === "/login" || pathName === "/register") {
    body = <body>{children}</body>;
  } else {
    body = (
      <body className="flex px-4 py-5 bg-[#FAFAFA] gap-4">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="mt-3">{children}</div>
        </div>
      </body>
    );
  }

  return (
    <ReduxProvider>
      <html lang="en">{body}</html>
    </ReduxProvider>
  );
}

export default index;
