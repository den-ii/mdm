import "@/styles/globals.css";
import { ReduxProvider } from "../redux/provider";

export const metadata = {
  title: "MDM",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ReduxProvider>
  );
}
