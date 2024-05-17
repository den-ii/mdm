import DevicesNumLayout from "@/components/devices/DevicesNumLayout";
import "@/styles/globals.css";

export const metadata = {
  title: "MDM",
  description: "",
};

interface IDevicesLayout {
  children: React.ReactNode;
}

export default function DevicesLayout({ children }: IDevicesLayout) {
  return (
    <div className="flex flex-col pages">
      <DevicesNumLayout />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
