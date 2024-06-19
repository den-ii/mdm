import SettingsNavbar from "@/components/settings/SettingsNavbar";

export const metadata = {
  title: "Vendor: Settings",
  description: "",
};

interface ISettingsLayout {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: ISettingsLayout) {
  return (
    <div className="">
      <SettingsNavbar />
      <div className="mt-5">{children}</div>
    </div>
  );
}
