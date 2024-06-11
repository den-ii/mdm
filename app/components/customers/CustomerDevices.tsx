import { BsFilter } from "react-icons/bs";
import Image from "next/image";
import { FaEllipsisVertical } from "react-icons/fa6";

function CustomerDevices() {
  return (
    <div className="flex-1">
      <div className="font-Poppins font-medium">Assigned Devices</div>
      <div className="min-h-[300px] flex flex-col mt-2">
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
        <div className="mt-4 border flex-1 border-neutral_300 rounded-2xl p-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search Here"
              className="text-sm focus:outline-0 focus:outline-primary border border-[#DADAE8] rounded-xl w-full block max-w-[350px] p-2"
            />
            <button className="py-3 px-4 text-[#DADAE8] border border-[#DADAE8] rounded-2xl flex items-center gap-2">
              <span>
                <BsFilter />
              </span>
              <span className="text-sm text-neutral_500">Filter By</span>
            </button>
          </div>
          <div>
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
                  <button className="p-2 bg-primary_700 rounded-xl text-sm text-white">
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
                  <button className="p-2 bg-primary_700 rounded-xl text-sm text-white">
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
                  <button className="p-2 bg-primary_700 rounded-xl text-sm text-white">
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
