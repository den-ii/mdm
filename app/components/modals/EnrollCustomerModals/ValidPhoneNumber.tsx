import Image from "next/image";

function ValidPhoneNumber() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-primary_100 h-[65px] w-[65px] rounded-full  flex items-center justify-center">
          <Image
            src="/assets/vendor/dashboard/ftu_check.svg"
            width={40}
            height={40}
            alt="success"
          />
        </div>
        <div className="font-Poppins text-lg font-medium">
          Customer's Phone Number is Valid
        </div>
        <div className="text-sm font-light">
          This is a valid customer. Click to send enrollment code to the phone
          number.
        </div>
      </div>
    </div>
  );
}

export default ValidPhoneNumber;
