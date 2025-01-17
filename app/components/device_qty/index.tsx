import Image from "next/image";
import { useState } from "react";

interface DeviceQtyProps {
  deviceNo: number;
  increaseDevice: () => void;
  decreaseDevice: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function DeviceQty({
  deviceNo,
  increaseDevice,
  decreaseDevice,
  handleChange,
}: DeviceQtyProps) {
  return (
    <div className="flex justify-between mt-2">
      <div className="flex gap-2 items-center ">
        <div className="bg-[#F0F5FF] p-3 rounded-[50%]">
          {/* <FaMobile fill="#0151FD" /> */}
          <Image
            src="/assets/devices/blue.svg"
            width={20}
            height={20}
            alt="device"
            className="2xl:hidden"
          />
          <Image
            src="/assets/devices/blue.svg"
            width={26}
            height={26}
            alt="device"
            className="hidden 2xl:inline-block"
          />
        </div>
        <div className="font-semibold text-sm 2xl:text-lg">Sachet Device</div>
      </div>
      <div className="flex gap-3 items-center">
        <div
          className="p-2 border hover:border-primary_700 border-[#E1E6EF] rounded-[8px] cursor-pointer"
          onClick={decreaseDevice}
        >
          <Image
            src="/assets/devices/minus.svg"
            width={20}
            height={20}
            alt="device"
          />
        </div>
        <div>
          <input
            type="number"
            value={deviceNo}
            onChange={handleChange}
            className="block font-semibold w-[40px] text-center p-2 appearance-none 
            outline-none border bg-[#F8F9FC] border-[#E1E6EF] rounded-[8px] 2xl:text-lg"
          />
        </div>
        <div
          className="p-2 border hover:border-primary_700 border-[#E1E6EF] rounded-[8px] cursor-pointer"
          onClick={() => increaseDevice()}
        >
          <Image
            src="/assets/devices/plus.svg"
            width={20}
            height={20}
            alt="device"
          />
        </div>
      </div>
    </div>
  );
}

export default DeviceQty;
