import { Lock1 } from "iconsax-react";
import Image from "next/image";

function SecurityPage() {
  return (
    <div className="border border-neutral_300 py-3 px-4 flex-1 max-w-[600px] rounded-xl">
      <div className="flex gap-2 items-center">
        <Image width={20} height={20} src="/assets/lock.svg" alt="password" />
        <h1 className="font-medium font-Poppins text-xl">Change Password</h1>
      </div>

      <form className="flex flex-col gap-2 mt-5">
        <div>
          <label className="text-sm">Current Password</label>
          <input
            className="block border-neutral_300 text-sm w-full focus:outline-1 focus:outline-primary_700 
          border rounded-xl p-2 placeholder:font-light"
            type="password"
            placeholder="Enter Current Password"
          />
        </div>
        <div>
          <label className="text-sm">New Password</label>
          <input
            className="block border-neutral_300 focus:outline-1 focus:outline-primary_700  text-sm w-full
           border rounded-xl p-2 placeholder:font-light"
            type="password"
            placeholder="Enter New Password"
          />
        </div>
        <div>
          <label className="text-sm">Confirm Password</label>
          <input
            className="block border-neutral_300 focus:outline-1 focus:outline-primary_700 text-sm w-full 
          border rounded-xl p-2 placeholder:font-light"
            type="password"
            placeholder="Confirm New Password"
          />
        </div>

        <div className="text-right">
          <button className="text-white bg-primary_700 p-2 px-4 rounded-xl">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecurityPage;
