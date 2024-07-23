import "@/styles/globals.css";
import MainLayout from "@/components/main_layout";

export const metadata = {
  title: "MDM",
  description: "",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <MainLayout children={children} />;
}
