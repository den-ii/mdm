import Buttons from "@/components/button";
import CustomerDevices from "@/components/customers/CustomerDevices";
import CustomerInfo from "@/components/customers/CustomerInfo";
import { Call, Message } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

function CustomersViewPage() {
  return (
    <div className="mt-3">
      <Link href="/customers" className="inline-block">
        <button className="flex gap-1 items-center text-primary_700 transition duration-500 ease-in-out mb-3 hover:bg-primary_100 p-2 px-3 rounded-xl">
          <IoIosArrowBack fill="#0151FD" />
          <span className="text-primary_700 text-lg">Back</span>
        </button>
      </Link>
      <div className="flex justify-between items-center ">
        <div className="flex gap-3">
          <div>
            <Image
              src="/assets/vendor/register/photo.svg"
              width={80}
              height={80}
              alt="profile"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-lg font-medium ">Celina Avid</p>
              <span className="text-[0.8rem] bg-green-100 text-green-600 text-center p-1 px-2 rounded-xl">
                Active
              </span>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="flex gap-1 text-sm">
                <Call size="20" color="#5C6F7F" variant="Bold" />
                <span className="text-[#5C6F7F]">+234590854857</span>
              </div>
              <div className="flex gap-1 text-sm">
                <FaEnvelope fill="#5C6F7F" size={18} />
                <span className="text-[#5C6F7F]">celina@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <button className="text-red-600 bg-red-50 font-medium transition duration-500 ease-in-out hover:shadow-md py-3 px-4 rounded-2xl">
            Deactivate
          </button>
          <button className="text-primary_700 bg-primary_100 transition duration-500 ease-in-out hover:shadow-md font-medium py-3 px-4 rounded-2xl">
            Assign Device
          </button>
        </div>
      </div>
      <div className="flex gap-5 mt-3 w-full">
        <CustomerInfo />
        <CustomerDevices />
      </div>
    </div>
  );
}

export default CustomersViewPage;
