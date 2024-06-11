import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface ICustomerDetails {
  handleMaxHeight: (val: string) => void;
}

function CustomerDetails({ handleMaxHeight }: ICustomerDetails) {
  handleMaxHeight("max-h-[470px]");
  return (
    <div className="w-full">
      <div className="flex gap-8 justify-between items-center">
        <div>
          <Image
            src="/assets/vendor/register/photo.svg"
            width={120}
            height={120}
            alt="profile"
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex justify-between gap-8">
            <div>
              <div className="flex flex-col gap-[0.2rem] text-sm">
                <p>Surname</p>
                <p>Ochiche</p>
              </div>
              <div className="flex flex-col gap-[0.2rem] text-sm mt-1">
                <p>Phone Number</p>
                <p>+234 8091072444</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[0.2rem] text-sm">
                <p>First Name</p>
                <p>Deni</p>
              </div>
              <div className="flex flex-col gap-[0.2rem] text-sm mt-1">
                <p>Gender</p>
                <p>M</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[0.2rem] text-sm">
                <p>Middle Name</p>
                <p>Wisdom</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[0.2rem] text-sm">
            <p>Address</p>
            <p>10 Abijo G.R.A, Lekki, Lagos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
