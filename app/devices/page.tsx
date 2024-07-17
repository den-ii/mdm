"use client";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import FtuScreen from "@/components/ftu_screen";
import { openRequestDeviceModal } from "@/lib/slice/modalSlice";
import { SearchNormal1 } from "iconsax-react";
import { BsFilter } from "react-icons/bs";
import { FaEllipsisVertical } from "react-icons/fa6";
import { redirect } from "next/navigation";
import Link from "next/link";

const devices = [
  {
    imei1: "8372028379",
    imei2: "8372028379",
    dateConfigured: "1 May 2023",
    status: "ASSIGNED",
  },
  {
    imei1: "92271927263",
    imei2: "92271927263",
    dateConfigured: "2 February 2023",
    status: "ACTIVATED",
  },
  {
    imei1: "82926351829",
    imei2: "82926351829",
    dateConfigured: "10 August 2023",
    status: "CONFIGURED",
  },
];

function DevicesPage() {
  const dispatch = useDispatch();

  const handleButtonAction = useCallback(() => {
    dispatch(openRequestDeviceModal());
  }, []);

  const handleViewDevice = (imei: string) => redirect(`/devices/${imei}`);

  return (
    <div className="flex-1 flex">
      {/* <FtuScreen
        imageSrc="/assets/vendor/devices/no_devices.svg"
        imageWidth={150}
        imageHeight={150}
        imageAlt="no device assigned"
        title="No Device Assigned Yet"
        description={`Your assigned devices will appear here. 
        DevOS Admin will allocate devices to you. Keep an eye on notifications for updates.`}
        buttonText="Request Device"
        buttonAction={handleButtonAction}
      /> */}
      <div className="flex gap-5 mt-3 w-full max-w-[80%]">
        <div className="mt-4 border flex-1 border-neutral_300 2xl:border-2 rounded-2xl">
          <div className="flex gap-3 border-b 2xl:border-b-2  p-4 border-neutral_300">
            <div className="relative w-full max-w-[60%]">
              <input
                type="text"
                placeholder="Search Here"
                className="placeholder:font-light text-sm 2xl:text-base focus:outline-0 transition duration-500 
                ease-in-out focus:border-primary_700 focus:outline-primary_700 border border-[#DADAE8] 
              rounded-xl 2xl:border-2  w-full block py-3 px-7"
              />
              <div className="absolute top-[50%] -translate-y-[50%] left-2">
                <SearchNormal1 size="16" color="#AAAABF" />
              </div>
            </div>
            <button
              className="py-3 px-4 transition duration-500 ease-in-out hover:border-primary_700 hover:text-primary_700 hover:shadow-md
            border border-[#DADAE8] 2xl:border-2  text-neutral_500 rounded-2xl flex items-center gap-2"
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
                  IMEI 1
                </div>
                <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                  IMEI 2
                </div>
                <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                  Date Configured
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
            {devices.map((device) => {
              let statusStyle;
              switch (device.status.toLowerCase()) {
                case "activated":
                  statusStyle = "bg-orange-50 text-orange-600";
                  break;
                case "configured":
                  statusStyle = "bg-blue-50 text-blue-600";
                  break;
                case "assigned":
                  statusStyle = "bg-green-50 text-green-600";
                  break;
                default:
                  statusStyle = "bg-gray-100";
                  break;
              }

              return (
                <div
                  className="flex gap-2 mt-2 px-3 py-3 border 2xl:border-2 border-neutral_300 rounded-xl items-center"
                  key={device.imei1}
                >
                  <input type="checkbox" />
                  <div className="flex gap-4 flex-1 items-center">
                    <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px] text-ellipsis overflow-x-clip ">
                      {device.imei1}
                    </div>
                    <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                      {device.imei2}
                    </div>
                    <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                      {device.dateConfigured}
                    </div>

                    <div className="text-sm 2xl:text-base w-[150px] 2xl:w-[180px]">
                      <div
                        className={`max-w-[120px] text-center ${statusStyle} py-2 px-3 rounded-xl`}
                      >
                        {device.status}
                      </div>
                    </div>
                    <div className="text-sm 2xl:text-base w-[150px] ">
                      <Link
                        href={`/devices/${device.imei1}`}
                        className="p-2 bg-primary_700 rounded-xl text-sm 2xl:text-base text-white transition duration-500 
                      ease-in-out hover:shadow-md"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevicesPage;
