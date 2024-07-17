"use client";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import FtuScreen from "@/components/ftu_screen";
import { openCustomerEnrollmentModal } from "@/lib/slice/modalSlice";
import CustomerInfo from "@/components/customers/CustomerInfo";
import CustomerDevices from "@/components/customers/CustomerDevices";
import { FaEllipsisVertical } from "react-icons/fa6";
import { BsFilter } from "react-icons/bs";
import Buttons from "@/components/buttons";
import { SearchNormal1 } from "iconsax-react";

const customers = [
  {
    name: "Celine Avid",
    phoneNumber: "08048328490",
    verficationDate: "1 May 2023",
    status: "ACTIVE",
    totalDevices: 30,
  },
  {
    name: "Jason Mamoa",
    phoneNumber: "0903847590",
    verficationDate: "2 July 2023",
    status: "INACTIVE",
    totalDevices: 10,
  },
  {
    name: "Bolaji Shittu",
    phoneNumber: "08059308490",
    verficationDate: "1 August 2023",
    status: "ACTIVE",
    totalDevices: 20,
  },
];

function CustomersPage() {
  const [ftu, setFtu] = useState(false);
  const dispatch = useDispatch();

  const handleEnrollCustomer = useCallback(
    () => dispatch(openCustomerEnrollmentModal()),
    []
  );

  return (
    <div className={`flex-1 ${ftu ? "flex" : ""}`}>
      {/* <FtuScreen
        imageSrc="/assets/vendor/customers/no_customer.svg"
        imageWidth={150}
        imageHeight={150}
        imageAlt="no customer assigned"
        title="No Customer Assigned Yet"
        description={`Start your journey by ensuring customers activate their devices and undergo verification. 
        Once done, welcome them aboard to your platform.`}
        buttonAction={handleEnrollCustomer}
        buttonText="Add Customer"
      /> */}

      <div className="flex gap-5 mt-3 w-full max-w-[80%]">
        <div className="mt-4 border flex-1 border-neutral_300 rounded-2xl">
          <div className="flex gap-3 border-b p-4 border-neutral_300">
            <div className="relative w-full max-w-[60%]">
              <input
                type="text"
                placeholder="Search Here"
                className="placeholder:font-light text-sm 2xl:text-base focus:outline-0 transition duration-500 
                ease-in-out focus:border-primary_700 focus:outline-primary_700 border border-[#DADAE8] 
              rounded-xl w-full block py-3 px-7"
              />
              <div className="absolute top-[50%] -translate-y-[50%] left-2">
                <SearchNormal1 size="16" color="#AAAABF" />
              </div>
            </div>
            <button
              className="py-3 px-4 transition duration-500 ease-in-out hover:border-primary_700
               hover:text-primary_700 hover:shadow-md
            border border-[#DADAE8] text-neutral_500 rounded-2xl flex items-center gap-2"
            >
              <span>
                <BsFilter />
              </span>
              <span className="text-sm 2xl:text-base text-inherit">
                Filter By
              </span>
            </button>
          </div>
          <div className="p-4">
            <div className="flex gap-2 mt-2 px-3 pb-2">
              <input type="checkbox" />
              <div className="flex gap-4 flex-1 ">
                <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                  Customer Name
                </div>
                <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                  Phone Number
                </div>
                <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                  Verification Date
                </div>
                <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                  Total Devices
                </div>
                <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                  Status
                </div>
                <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                  Action
                </div>
              </div>
              <div></div>
            </div>
            {customers.map((customer) => {
              const statusStyle =
                customer.status === "ACTIVE"
                  ? "bg-green-50 text-green-600"
                  : "bg-gray-100";
              return (
                <div className="flex gap-2 mt-2 px-3 py-3 border border-neutral_300 rounded-xl items-center">
                  <input type="checkbox" />
                  <div className="flex gap-4 flex-1 items-center">
                    <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px] text-ellipsis overflow-x-clip ">
                      {customer.name}
                    </div>
                    <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                      {customer.phoneNumber}
                    </div>
                    <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                      {customer.verficationDate}
                    </div>
                    <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                      {customer.totalDevices}
                    </div>
                    <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                      <div
                        className={`max-w-[100px] text-center ${statusStyle} py-2 px-3 rounded-2xl`}
                      >
                        {customer.status}
                      </div>
                    </div>
                    <div className="text-sm w-[150px] 2xl:text-base 2xl:w-[180px]">
                      <button
                        className="p-2 bg-primary_700 rounded-xl text-sm 2xl:text-base text-white 
                      transition duration-500 ease-in-out hover:shadow-md"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  <button>
                    <FaEllipsisVertical />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersPage;
