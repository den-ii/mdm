import React from "react";

function CustomerInfo() {
  return (
    <div className="w-[40%]">
      <div className="font-Poppins font-medium">Customer Information</div>
      <div className="mt-2 min-h-[300px] flex flex-col gap-2 border border-neutral_300 rounded-2xl p-4">
        <div className="flex gap-2">
          <p className="text-[#505780]">Customer Name:</p>
          <p>Celine Avid</p>
        </div>
        <div className="flex gap-2">
          <p className="text-[#505780]">Email Address:</p>
          <p>celina@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <p className="text-[#505780]">Phone Number:</p>
          <p>+234590854857</p>
        </div>
        <div className="flex gap-2">
          <p className="text-[#505780]">Address:</p>
          <p>6391 Elgin St. Celina, Delaware 10299</p>
        </div>
        <div className="flex gap-2">
          <p className="text-[#505780]">Date Registered:</p>
          <p>1 May 2023</p>
        </div>
        <div className="flex gap-2">
          <p className="text-[#505780]">Devices:</p>
          <p>15</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
