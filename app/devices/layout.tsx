import DevicesNumLayout from "@/components/devices/DevicesNumLayout";

export const metadata = {
  title: "Vendor: Device Management",
  description: "",
};

interface DevicesLayoutProps {
  children: React.ReactNode;
}

export default function DevicesLayout({ children }: DevicesLayoutProps) {
  return (
    <div className="flex flex-col pages">
      <DevicesNumLayout />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
