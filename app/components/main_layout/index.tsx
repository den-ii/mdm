"use client";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
import Sidebar from "../sidebar";
import Navbar from "../navbar";
import ModalHandler from "../modals/ModalHandler";

interface IRootLayout {
  children: React.ReactNode;
}

function index({ children }: IRootLayout) {
  const pathName = usePathname();

  let body;
  if (pathName === "/login" || pathName === "/register") {
    body = (
      <body>
        <main>{children}</main>
      </body>
    );
  } else {
    const bg = pathName === "/" ? "bg-[#FAFAFA]" : "bg-white";
    body = (
      <body className={`flex px-4 py-5 ${bg} gap-4`}>
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <ModalHandler />
          <main className="mt-3 max-w-[1300px] mx-auto">{children}</main>
        </div>
      </body>
    );
  }

  return (
    <Provider store={store}>
      <html lang="en">{body}</html>
    </Provider>
  );
}

export default index;
