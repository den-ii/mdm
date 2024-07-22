import CustomerDevices from "@/components/customers/CustomerDevices";
import CustomerInfo from "@/components/customers/CustomerInfo";
import AuditTrail from "@/components/devices/AuditTrails";
import DeviceInfo from "@/components/devices/DeviceInfo";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

function DevicePage({ params }: { params: { id: string } }) {
  return (
    <div className="mt-3">
      <Link href="/devices" className="inline-block">
        <button className="flex gap-1 items-center text-primary_700 transition duration-500 ease-in-out mb-3 hover:bg-primary_100 p-2 px-3 rounded-xl">
          <IoIosArrowBack fill="#0151FD" />
          <span className="text-primary_700 text-lg">Back</span>
        </button>
      </Link>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-[#F0F5FF] p-3 rounded-[50%]">
            <Image
              src="/assets/devices/blue.svg"
              width={30}
              height={30}
              alt="device"
            />
          </div>
          <div>
            <div className="text-lg">{params.id} - IMEI NO</div>
            <div className="text-green-500 text-sm">Active</div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <button
            className="bg-red-600 text-white font-medium transition duration-500 ease-in-out 
          hover:shadow-md shadow-sm py-3 px-4 rounded-2xl 2xl:text-lg"
          >
            Lock Device
          </button>
          <button
            className="bg-primary_700 text-white transition duration-500 ease-in-out 
          hover:shadow-md shadow-sm font-medium py-3 px-4 rounded-2xl 2xl:text-lg"
          >
            Locate Device
          </button>
        </div>
      </div>
      <div className="bg-[#F2F2FA] py-6 text-center text-sm 2xl:text-base rounded-xl mt-5 font-Poppins">
        This device has been assigned.{" "}
        <span className="font-Poppins text-primary_700 font-medium text-inherit">
          View Customer
        </span>
      </div>
      <div className="flex gap-5 mt-5 w-full">
        <DeviceInfo />
        <AuditTrail />
      </div>
    </div>
  );
}

export default DevicePage;
