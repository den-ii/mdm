import "@/styles/globals.css";
import MainLayout from "@/components/main_layout";

export const metadata = {
  title: "MDM",
  description: "",
};

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return <MainLayout children={children} />;
}
