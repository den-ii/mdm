"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AddCustomerButton from "./AddCustomerButton";

function CustomersNumLayout() {
  const pathname = usePathname();
  const onlyCustomers = pathname === "/customers";
  return (
    <>
      {onlyCustomers && (
        <div>
          <AddCustomerButton />
          <div className="flex flex-wrap gap-3 ">
            <div className="flex items-center gap-3 border border-[#DADAE8] rounded-lg p-3 min-w-[160px] justify-between">
              <div className="text-sm flex flex-col gap-1">
                <p className="text-neutral_500 font-Poppins">Total Customers</p>
                <p className="font-medium">0</p>
              </div>
              <div>
                <Image
                  src="/assets/vendor/customers/blue_customer.svg"
                  width={45}
                  height={45}
                  alt="total customers"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 border border-[#DADAE8] rounded-lg p-3 min-w-[160px] justify-between">
              <div className="text-sm flex flex-col gap-1">
                <p className="text-neutral_500 font-Poppins">
                  Active Customers
                </p>
                <p className="font-medium">0</p>
              </div>
              <div>
                <Image
                  src="/assets/vendor/customers/green_customer.svg"
                  width={45}
                  height={45}
                  alt="active customers"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 border border-[#DADAE8] rounded-lg p-3 min-w-[160px] justify-between">
              <div className="text-sm flex flex-col gap-1">
                <p className="text-neutral_500 font-Poppins">
                  Inactive Customers
                </p>{" "}
                <p className="font-medium">0</p>
              </div>
              <div>
                <Image
                  src="/assets/vendor/customers/gray_customer.svg"
                  width={45}
                  height={45}
                  alt="inactive customers"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomersNumLayout;
