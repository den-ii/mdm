import SettingsNavbar from "@/components/settings/SettingsNavbar";

export const metadata = {
  title: "Vendor: Settings",
  description: "",
};

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="">
      <SettingsNavbar />
      <div className="mt-5">{children}</div>
    </div>
  );
}
