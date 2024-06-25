import { BsFilter } from "react-icons/bs";
import Image from "next/image";
import { FaEllipsisVertical } from "react-icons/fa6";
import { SearchNormal1 } from "iconsax-react";

function AuditTrail() {
  return (
    <div className="flex-1">
      <div className="font-Poppins">Audit Trail</div>
      <div className="min-h-[200px] flex flex-col">
        <div className="mt-4 border flex-1 border-neutral_300 rounded-2xl">
          <div className="flex gap-3 border-b p-4 border-neutral_300">
            <div className="relative w-full max-w-[400px]">
              <input
                type="text"
                placeholder="Search Here"
                className="placeholder:font-light text-sm focus:outline-0 transition duration-500 
                ease-in-out focus:border-primary_700 focus:outline-primary_700 border border-[#DADAE8] 
              rounded-xl w-full block py-3 px-7"
              />
              <div className="absolute top-[50%] -translate-y-[50%] left-2">
                <SearchNormal1 size="16" color="#AAAABF" />
              </div>
            </div>

            <button
              className="py-3 px-4 transition duration-500 ease-in-out hover:border-primary_700 hover:text-primary_700 hover:shadow-md
            border border-[#DADAE8] text-neutral_500 rounded-2xl flex items-center gap-2"
            >
              <span>
                <BsFilter />
              </span>
              <span className="text-sm text-inherit">Filter By</span>
            </button>
          </div>
          <div className="px-3 pb-3">
            <div className="flex gap-2 mt-2 px-3 py-4">
              <input type="checkbox" />
              <div className="flex gap-4 flex-1 ">
                <div className="text-sm w-[200px]">Timestamp</div>
                <div className="text-sm w-[140px]">Action</div>
                <div className="text-sm w-[140px]">Status</div>
                {/* <div className="text-sm w-[150px]">Action</div> */}
              </div>
              <div></div>
            </div>
            <div className="flex gap-2 mt-2 px-3 py-3 border border-neutral_300 rounded-xl items-center">
              <input type="checkbox" />
              <div className="flex gap-4 flex-1 items-center">
                <div className="text-sm w-[200px] text-ellipsis overflow-x-clip ">
                  1 May 2023, 10:10 AM
                </div>
                <div className="text-sm w-[140px]">KYC Completed</div>
                <div className="text-sm w-[140px]">
                  <div className="text-center py-2 w-[120px] bg-orange-100 rounded-xl text-orange-600 text-sm">
                    ACTIVATED
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-2 px-3 py-3 border border-neutral_300 rounded-xl items-center">
              <input type="checkbox" />
              <div className="flex gap-4 flex-1 items-center">
                <div className="text-sm w-[200px] text-ellipsis overflow-x-clip ">
                  30 January 2023, 4:45 PM
                </div>
                <div className="text-sm w-[140px]">Assigned</div>
                <div className="text-sm w-[140px]">
                  <div className="text-center py-2 w-[120px] bg-green-100 rounded-xl text-green-600 text-sm">
                    ASSIGNED
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-2 px-3 py-3 border border-neutral_300 rounded-xl items-center">
              <input type="checkbox" />
              <div className="flex gap-4 flex-1 items-center">
                <div className="text-sm w-[200px] text-ellipsis overflow-x-clip ">
                  8 September 2022, 8:25 PM
                </div>
                <div className="text-sm w-[140px]">Configured</div>
                <div className="text-sm w-[140px]">
                  <div className="text-center py-2 w-[120px] bg-blue-50 rounded-xl text-primary_700 text-sm">
                    CONFIGURED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuditTrail;
