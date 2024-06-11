import Buttons from "@/components/Button";
import CustomerDevices from "@/components/customers/CustomerDevices";
import CustomerInfo from "@/components/customers/CustomerInfo";
import { Call, Message } from "iconsax-react";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa6";

function CustomersViewPage() {
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
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
          <Buttons
            children="Deactivate"
            styles="text-red-600 bg-red-50 font-medium"
          />
          <Buttons children="Assign Device" styles="font-medium" />
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
