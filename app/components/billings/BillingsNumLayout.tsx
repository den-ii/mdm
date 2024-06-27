import Image from "next/image";

function BillingsNumLayout() {
  return (
    <div className="flex flex-wrap gap-3 mt-5">
      <div className="flex items-center gap-5 border border-[#DADAE8] rounded-lg p-3 min-w-[250px] justify-between">
        <div className="text-sm flex flex-col gap-1">
          <p className="text-neutral_500 font-Poppins">Total Revenue</p>
          <p className="font-medium">0</p>
        </div>
        <div>
          <Image
            src="/assets/vendor/billing/blue_lock.svg"
            width={45}
            height={45}
            alt="total revenue"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 border border-[#DADAE8] rounded-lg p-3 min-w-[250px] justify-between">
        <div className="text-sm flex flex-col gap-1">
          <p className="text-neutral_500 font-Poppins">Outstanding Payments</p>
          <p className="font-medium">0</p>
        </div>
        <div>
          <Image
            src="/assets/vendor/billing/yellow_lock.svg"
            width={45}
            height={45}
            alt="outstanding payments"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 border border-[#DADAE8] rounded-lg p-3 min-w-[250px] justify-between">
        <div className="text-sm flex flex-col gap-1">
          <p className="text-neutral_500 font-Poppins">Subscription Due</p>{" "}
          <p className="font-medium">0</p>
        </div>
        <div>
          <Image
            src="/assets/vendor/billing/orange_lock.svg"
            width={45}
            height={45}
            alt="subscription due"
          />
        </div>
      </div>
    </div>
  );
}

export default BillingsNumLayout;
