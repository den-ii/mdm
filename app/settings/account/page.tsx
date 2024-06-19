import Buttons from "@/components/buttons";
import Image from "next/image";

function AccountPage() {
  return (
    <div className="flex gap-4 min-h-[400px]">
      <div className="border border-neutral_300 py-3 px-4 flex-1 rounded-xl">
        <h1 className="font-medium font-Poppins text-xl">
          Business Information
        </h1>
        <p className="font-light text-sm text-neutral_500">
          Update you company’s profile and contact details
        </p>

        <div className="mt-3">
          <div className="my-6">
            <p className="mb-3 text-sm">Business Logo</p>
            <div className="flex gap-3 items-center">
              <Image
                src="/assets/vendor/register/photo.svg"
                width={80}
                height={80}
                alt="business logo"
              />
              <div>
                <button className="text-sm text-primary_700 bg-primary_100 py-3 px-4 rounded-lg ">
                  Upload Image
                </button>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-2">
            <div>
              <label className="text-sm">Business Name</label>
              <input
                className="block border-neutral_300 text-sm w-full focus:outline-1 focus:outline-primary_700 
                border rounded-xl p-2 placeholder:font-light"
                type="text"
                placeholder="Flutterwave Inc."
              />
            </div>
            <div>
              <label className="text-sm">Business Email</label>
              <input
                className="block border-neutral_300 focus:outline-1 focus:outline-primary_700  text-sm w-full
                 border rounded-xl p-2 placeholder:font-light"
                type="email"
                placeholder="flutterwave@inc.com"
              />
            </div>
            <div>
              <label className="text-sm">Phone Number</label>
              <input
                className="block border-neutral_300 focus:outline-1 focus:outline-primary_700 text-sm w-full 
                border rounded-xl p-2 placeholder:font-light"
                type="tel"
                placeholder="+234 123 456 7890"
              />
            </div>
            <div>
              <label className="text-sm">Business Address</label>
              <input
                className="block border-neutral_300 focus:outline-1 focus:outline-primary_700 
                text-sm w-full border rounded-xl p-2 placeholder:font-light"
                type="text"
                placeholder="No 1, Flutterwave Street, Lagos, Nigeria"
              />
            </div>
            <div className="text-right">
              <button className="text-white bg-primary_700 p-2 px-4 rounded-xl">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex-1 border border-neutral_300 py-3 px-4 rounded-xl">
        <h1 className="font-medium font-Poppins text-xl">
          Personal Information
        </h1>
        <p className="font-light text-sm text-neutral_500 flex-1">
          Update you company’s profile and contact details
        </p>
        <div className="mt-3">
          <div className="my-6">
            <p className="mb-3 text-sm">Profile Picture</p>
            <div className="flex gap-3 items-center">
              <Image
                src="/assets/vendor/register/photo.svg"
                width={80}
                height={80}
                alt="profile picture"
              />
              <div>
                <button className="text-sm text-primary_700 bg-primary_100 py-3 px-4 rounded-lg ">
                  Upload Image
                </button>
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-2">
            <div>
              <label className="text-sm">First Name</label>
              <input
                className="block border-neutral_300 text-sm w-full focus:outline-1 focus:outline-primary_700 
                border rounded-xl p-2 placeholder:font-light"
                type="text"
                placeholder="Johnny"
              />
            </div>
            <div>
              <label className="text-sm">Last Name</label>
              <input
                className="block border-neutral_300 focus:outline-1 focus:outline-primary_700  text-sm w-full
                 border rounded-xl p-2 placeholder:font-light"
                type="text"
                placeholder="Doe"
              />
            </div>
            <div>
              <label className="text-sm">Email Address</label>
              <input
                className="block border-neutral_300 focus:outline-1 focus:outline-primary_700 
                text-sm w-full border rounded-xl p-2 placeholder:font-light"
                type="email"
                placeholder="johnnydoe@inc.com"
              />
            </div>
            <div>
              <label className="text-sm">Phone Number</label>
              <input
                className="block border-neutral_300 focus:outline-1 focus:outline-primary_700 text-sm w-full 
                border rounded-xl p-2 placeholder:font-light"
                type="tel"
                placeholder="+234 123 456 7890"
              />
            </div>
            <div className="text-right">
              <button className="text-white bg-primary_700 p-2 px-4 rounded-xl ">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
