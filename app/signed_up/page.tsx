"use client";

import Ring from "@/components/ring";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { FaUser } from "react-icons/fa";

interface IPersonal {
  changeScreen: () => void;
}

function Personal({ changeScreen }: IPersonal) {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(!loading);
    changeScreen();
  }

  return (
    <div className="mt-3 md:mt-7">
      <h1 className="text-xl md:text-2xl font-medium">Personal Details</h1>
      <p className="mt-1 md:mt-2 text-sm font-light">
        Please take a moment to introduce yourself.
      </p>
      <div className="mt-10">
        <div>
          <p className="font-medium flex ">Profile Picture</p>
          <div className="mt-3 flex gap-3 items-center">
            <Image
              src="/assets/vendor/register/photo.svg"
              width={64}
              height={64}
              alt="photo_edit"
            />
            <div>
              <button className="bg-primary_100 text-sm font-medium p-3 rounded-[8px] text-primary_700">
                Upload Image
              </button>
              <p className="text-[0.7rem] mt-2 opacity-80">
                .png or .jpg files up to 8MB. Recommended size is 72 x 72
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
