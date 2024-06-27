import React from "react";

function DeviceInfo() {
  return (
    <div className="w-[30%]">
      <div className="font-Poppins ">Device Information</div>
      <div className="mt-2 min-h-[200px] flex flex-col gap-2 border border-neutral_300 rounded-2xl p-4">
        <div className="flex gap-2 text-sm">
          <p className="text-[#505780]">IMEI NO 1:</p>
          <p>8372028379 </p>
        </div>
        <div className="flex gap-2 text-sm">
          <p className="text-[#505780]">IMEI NO 2:</p>
          <p>8372028379 </p>
        </div>
        <div className="flex gap-2 text-sm">
          <p className="text-[#505780]">Date Configured:</p>
          <p>1 May 2023</p>
        </div>
        <div className="flex gap-2 text-sm">
          <p className="text-[#505780]">Date Assigned:</p>
          <p>1 May 2023</p>
        </div>
        <div className="flex gap-2 text-sm">
          <p className="text-[#505780]">Customer Name:</p>
          <p>Micah Richards</p>
        </div>
      </div>
    </div>
  );
}

export default DeviceInfo;
