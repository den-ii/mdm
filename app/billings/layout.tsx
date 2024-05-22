import BillingsLayout from "@/components/billings/BillingsLayout";
import BillingsNumLayout from "@/components/billings/BillingsNumLayout";

export const metadata = {
  title: "Vendor: Billings and Payments",
  description: "",
};

interface IDevicesLayout {
  children: React.ReactNode;
}

export default function CusomersLayout({ children }: IDevicesLayout) {
  return (
    <div className="flex flex-col pages">
      <BillingsLayout />
      <BillingsNumLayout />
      <div className="flex-1 flex flex-col mt-5">{children}</div>
    </div>
  );
}
