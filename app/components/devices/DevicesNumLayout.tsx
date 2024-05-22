import Image from "next/image";

function DevicesNumLayout() {
  return (
    <div className="flex flex-wrap gap-3 ">
      <div className="flex items-center gap-3 border border-[#DADAE8] rounded-lg p-3 min-w-[160px] justify-between">
        <div className="text-sm flex flex-col gap-1">
          <p className="text-neutral_500">Configured</p>
          <p className="font-medium">0</p>
        </div>
        <div>
          <Image
            src="/assets/vendor/devices/blue_device.svg"
            width={45}
            height={45}
            alt="configured devices"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 border border-[#DADAE8] rounded-lg p-3 min-w-[160px] justify-between">
        <div className="text-sm flex flex-col gap-1">
          <p className="text-neutral_500">Assigned</p>
          <p className="font-medium">0</p>
        </div>
        <div>
          <Image
            src="/assets/vendor/devices/green_device.svg"
            width={45}
            height={45}
            alt="configured devices"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 border border-[#DADAE8] rounded-lg p-3 min-w-[160px] justify-between">
        <div className="text-sm flex flex-col gap-1">
          <p className="text-neutral_500">UnAssigned</p>{" "}
          <p className="font-medium">0</p>
        </div>
        <div>
          <Image
            src="/assets/vendor/devices/yellow_device.svg"
            width={45}
            height={45}
            alt="configured devices"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 border border-[#DADAE8] rounded-lg p-3 min-w-[160px] justify-between">
        <div className="text-sm flex flex-col gap-1">
          <p className="text-neutral_500">Activated</p>{" "}
          <p className="font-medium">0</p>
        </div>
        <div>
          <Image
            src="/assets/vendor/devices/orange_device.svg"
            width={45}
            height={45}
            alt="configured devices"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 border border-[#DADAE8] rounded-lg p-3 min-w-[160px] justify-between">
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
  );
}

export default DevicesNumLayout;
