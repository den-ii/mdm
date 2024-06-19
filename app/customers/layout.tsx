import Buttons from "@/components/buttons";
import AddCustomerButton from "@/components/customers/AddCustomerButton";
import CustomersNumLayout from "@/components/customers/CustomersNumLayout";
import { openCustomerEnrollmentModal } from "@/lib/slice/modalSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export const metadata = {
  title: "Vendor: Customer Management",
  description: "",
};

interface IDevicesLayout {
  children: React.ReactNode;
}

export default function CusomersLayout({ children }: IDevicesLayout) {
  return (
    <div className="flex flex-col pages">
      <CustomersNumLayout />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
