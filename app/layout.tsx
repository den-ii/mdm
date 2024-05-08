"use client";
import "@/styles/globals.css";
import { ReduxProvider } from "../redux/provider";
import { usePathname } from "next/navigation";
import Navbar from "./components/navbar";

// export const metadata = {
//   title: "MDM",
//   description: "",
// };

interface IRootLayout {
  children: React.ReactNode;
  pathName: any;
}

export default function RootLayout({ children }: IRootLayout) {
  const pathName = usePathname();
  console.log(pathName);
  let body;
  if (pathName === "/login" || pathName === "/register") {
    body = <body>{children}</body>;
  } else
    body = (
      <body className="flex p-3 bg-[#FAFAFA] gap-4">
        <Navbar />
        <div>{children}</div>
      </body>
    );

  return (
    <ReduxProvider>
      <html lang="en">{body}</html>
    </ReduxProvider>
  );
}
