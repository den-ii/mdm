import { BsFilter } from "react-icons/bs";
import Image from "next/image";
import { FaEllipsisVertical } from "react-icons/fa6";
import { SearchNormal1 } from "iconsax-react";

function CustomerDevices() {
  return (
    <div className="flex-1">
      <div className="font-Poppins">Assigned Devices</div>
      <div className="min-h-[200px] flex flex-col mt-2">
        <div className="flex gap-2">
          <div className="flex items-center gap-3 border border-[#DADAE8] rounded-2xl p-3 min-w-[160px] justify-between">
            <div className="text-sm flex flex-col gap-1">
              <p className="text-neutral_500">Activated</p>
              <p className="font-medium">8</p>
            </div>
            <div>
              <Image
                src="/assets/vendor/devices/green_device.svg"
                width={45}
                height={45}
                alt="activated devices"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 border border-[#DADAE8] rounded-2xl p-3 min-w-[160px] justify-between">
            <div className="text-sm flex flex-col gap-1">
              <p className="text-neutral_500">Pending</p>{" "}
              <p className="font-medium">5</p>
            </div>
            <div>
              <Image
                src="/assets/vendor/devices/orange_device.svg"
                width={45}
                height={45}
                alt="pending devices"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 border border-[#DADAE8] rounded-2xl p-3 min-w-[160px] justify-between">
            <div className="text-sm flex flex-col gap-1">
              <p className="text-neutral_500">Locked</p>{" "}
              <p className="font-medium">0</p>
            </div>
            <div>
              <Image
                src="/assets/vendor/devices/pink_device.svg"
                width={45}
                height={45}
                alt="configured devices"
              />
            </div>
          </div>
        </div>
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
                <div className="text-sm w-[150px]">IMEI Number</div>
                <div className="text-sm w-[150px]">Last Activity</div>
                <div className="text-sm w-[150px]">Device Status</div>
                <div className="text-sm w-[150px]">Action</div>
              </div>
              <div></div>
            </div>
            <div className="flex gap-2 mt-2 px-3 py-3 border border-neutral_300 rounded-xl items-center">
              <input type="checkbox" />
              <div className="flex gap-4 flex-1 items-center">
                <div className="text-sm w-[150px] text-ellipsis overflow-x-clip ">
                  596803085599
                </div>
                <div className="text-sm w-[150px]">Online</div>
                <div className="text-sm w-[150px]">
                  <div className="text-center py-2 w-[100px] bg-orange-100 rounded-xl text-orange-600 text-sm">
                    PENDING
                  </div>
                </div>
                <div className="text-sm w-[150px] ">
                  <button className="p-2 bg-primary_700 rounded-xl text-sm text-white transition duration-500 ease-in-out hover:shadow-md">
                    View Details
                  </button>
                </div>
              </div>
              <button>
                <FaEllipsisVertical />
              </button>
            </div>
            <div className="flex gap-2 mt-2 px-3 py-3 border border-neutral_300 rounded-xl items-center">
              <input type="checkbox" />
              <div className="flex gap-4 flex-1 items-center">
                <div className="text-sm w-[150px] text-ellipsis overflow-x-clip ">
                  593829484980
                </div>
                <div className="text-sm w-[150px]">Online</div>
                <div className="text-sm w-[150px]">
                  <div className="text-center py-2 w-[100px] bg-green-100 rounded-xl text-green-600 text-sm">
                    ACTIVATED
                  </div>
                </div>
                <div className="text-sm w-[150px] ">
                  <button className="p-2 bg-primary_700 rounded-xl text-sm text-white hover:shadow-md">
                    View Details
                  </button>
                </div>
              </div>
              <button>
                <FaEllipsisVertical />
              </button>
            </div>
            <div className="flex gap-2 mt-2 px-3 py-3 border border-neutral_300 rounded-xl items-center">
              <input type="checkbox" />
              <div className="flex gap-4 flex-1 items-center">
                <div className="text-sm w-[150px] text-ellipsis overflow-x-clip ">
                  593829484980
                </div>
                <div className="text-sm w-[150px]">Offline</div>
                <div className="text-sm w-[150px]">
                  <div className="text-center py-2 w-[100px] bg-gray-100 rounded-xl  text-sm">
                    LOCKED
                  </div>
                </div>
                <div className="text-sm w-[150px] ">
                  <button className="p-2 bg-primary_700 rounded-xl text-sm text-white hover:shadow-md">
                    View Details
                  </button>
                </div>
              </div>
              <button>
                <FaEllipsisVertical />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDevices;
