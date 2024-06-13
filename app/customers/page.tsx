"use client";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import FtuScreen from "@/components/ftu_screen";
import { openCustomerEnrollmentModal } from "@/lib/slice/modalSlice";
import CustomerInfo from "@/components/customers/CustomerInfo";
import CustomerDevices from "@/components/customers/CustomerDevices";
import { FaEllipsisVertical } from "react-icons/fa6";
import { BsFilter } from "react-icons/bs";
import Buttons from "@/components/button";

const customers = [
  {
    name: "Celine Avid",
    phoneNumber: "08048328490",
    verficationDate: "1 May 2023",
    status: "active",
    totalDevices: 30,
  },
  {
    name: "Jason Mamoa",
    phoneNumber: "0903847590",
    verficationDate: "2 July 2023",
    status: "inactive",
    totalDevices: 10,
  },
  {
    name: "Bolaji Shittu",
    phoneNumber: "08059308490",
    verficationDate: "1 August 2023",
    status: "active",
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

      <div className="flex gap-5 mt-3 w-full">
        <div className="mt-4 border flex-1 border-neutral_300 rounded-2xl p-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search Here"
              className="text-sm focus:outline-0 focus:outline-primary border border-[#DADAE8] 
              rounded-xl w-full block max-w-[400px] p-2"
            />
            <button className="py-3 px-4 text-[#DADAE8] border border-[#DADAE8] rounded-2xl flex items-center gap-2">
              <span>
                <BsFilter />
              </span>
              <span className="text-sm text-neutral_500">Filter By</span>
            </button>
          </div>
          <div>
            <div className="flex gap-2 mt-2 px-3 py-4">
              <input type="checkbox" />
              <div className="flex gap-4 flex-1 ">
                <div className="text-sm w-[150px]">Customer Name</div>
                <div className="text-sm w-[150px]">Phone Number</div>
                <div className="text-sm w-[150px]">Verification Date</div>
                <div className="text-sm w-[150px]">Total Devices</div>
                <div className="text-sm w-[150px]">Status</div>
                <div className="text-sm w-[150px]">Action</div>
              </div>
              <div></div>
            </div>
            {customers.map((customer) => {
              const statusStyle =
                customer.status === "active"
                  ? "bg-green-50 text-green-600"
                  : "bg-gray-100";
              return (
                <div className="flex gap-2 mt-2 px-3 py-3 border border-neutral_300 rounded-xl items-center">
                  <input type="checkbox" />
                  <div className="flex gap-4 flex-1 items-center">
                    <div className="text-sm w-[150px] text-ellipsis overflow-x-clip ">
                      {customer.name}
                    </div>
                    <div className="text-sm w-[150px]">
                      {customer.phoneNumber}
                    </div>
                    <div className="text-sm w-[150px]">
                      {customer.verficationDate}
                    </div>
                    <div className="text-sm w-[150px]">
                      {customer.totalDevices}
                    </div>
                    <div className="text-sm w-[150px]">
                      <div
                        className={`max-w-[80px] text-center ${statusStyle} py-2 px-3 rounded-2xl`}
                      >
                        {customer.status}
                      </div>
                    </div>
                    <div className="text-sm w-[150px] ">
                      <button className="p-2 bg-primary_700 rounded-xl text-sm text-white transition duration-500 ease-in-out hover:shadow-md">
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
