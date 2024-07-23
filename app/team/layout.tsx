import TeamLayout from "@/components/team/TeamLayout";
import Link from "next/link";

export const metadata = {
  title: "MDM",
  description: "",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col pages">
      <TeamLayout />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
