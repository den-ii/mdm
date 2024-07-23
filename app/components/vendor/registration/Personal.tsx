"use client";
import { FormEvent, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Ring from "@/components/ring";
import { PersonalDetailsInfo, useSignupMutation } from "@/lib/services/authApi";
import { Call } from "iconsax-react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { decrypt, encrypt } from "encryption";

interface IPersonal {
  changeScreen: () => void;
}

function Personal({ changeScreen }: IPersonal) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<PersonalDetailsInfo>();
  const [signup, { isLoading, isError, error }] = useSignupMutation();
  const [photo, setPhoto] = useState<null | string>(null);

  const fileRef = useRef<null | HTMLInputElement>(null);

  const onSubmit: SubmitHandler<PersonalDetailsInfo> = async (data) => {
    // reset(data);
    const encryptedData = encrypt(
      JSON.stringify({ data: { ...data, role: "admin", type: "vendor" } })
    );
    console.log("encryptedData", encryptedData);
    const d: any = await signup({ data: encryptedData });
    console.log("d", d);
    console.log("error", decrypt(d.error?.data.data));
    // if (error) console.log(decrypt(error.data.data));
  };

  // const handleFormChange = (e: any) => {
  //   setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  // };

  const handlePhotoChange = (e: any) => {
    console.log(e.target.files[0]);
    // setFormDetails({ ...formDetails, profilePicture: e.target.files[0] });
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const handlePhotoUploadClicked = (e: any) => {
    e.preventDefault();
    fileRef.current?.click();
  };

  return (
    <div className="mt-3 md:mt-7">
      <h1 className="text-xl md:text-2xl font-medium">Personal Details</h1>
      <p className="mt-1 md:mt-2 text-sm 2xl:text-base font-light">
        Please take a moment to introduce yourself.
      </p>
      <div className="mt-10">
        <div>
          <p className="font-medium flex">Profile Picture</p>
          <div className="mt-3 flex gap-3 items-center">
            <Image
              src={photo ?? "/assets/vendor/register/photo.svg"}
              width={64}
              height={64}
              className="rounded-[64px] w-[64px] h-[64px]"
              alt="photo_edit"
            />
            <div className="">
              <div className="relative">
                <input
                  type="file"
                  className="hidden"
                  ref={fileRef}
                  onChange={handlePhotoChange}
                  accept="image/png,image/jpg"
                />
                <button
                  className="bg-primary_100 text-sm 2xl:text-base font-medium p-3 rounded-[8px] text-primary_700"
                  onClick={handlePhotoUploadClicked}
                >
                  Upload Image
                </button>
              </div>
              <p className="text-[0.7rem] 2xl:text-sm mt-2 opacity-80">
                .png or .jpg files up to 8MB. Recommended size is 72 x 72
              </p>
            </div>
          </div>
        </div>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full">
              <label className="text-sm 2xl:text-base font-medium">
                <span>First Name</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  placeholder="Julia"
                  type="text"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm 2xl:text-base border
                   border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                  {...register("firstName", { required: true })}
                />
                <FaUser
                  fill="#AAAABF"
                  size={20}
                  className="absolute top-[55%] -translate-y-[50%] left-2"
                />
              </div>
              {errors.firstName && (
                <p className="text-red-500 text-[0.75rem] 2xl:text-sm mt-2">
                  First name field is required
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="text-sm 2xl:text-base font-medium">
                <span>Last Name</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  placeholder="Stratton"
                  type="text"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm 2xl:text-base border
                  border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                  {...register("lastName", { required: true })}
                />
                <FaUser
                  fill="#AAAABF"
                  size={20}
                  className="absolute top-[55%] -translate-y-[50%] left-2"
                />
              </div>
              {errors.lastName && (
                <p className="text-red-500 text-[0.75rem] 2xl:text-sm mt-2">
                  Last name field is required
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-3">
            <div className="w-full">
              <label className="text-sm font-medium 2xl:text-base">
                <span>Phone Number</span>
                <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <input
                  placeholder="+234 805 687 6798"
                  type="tel"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm 2xl:text-base 
                  border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                  {...register("phone", { required: true })}
                />
                <Call
                  size="20"
                  color="#aaaabf"
                  variant="Bold"
                  className="absolute top-[55%] -translate-y-[50%] left-2"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-[0.75rem] 2xl:text-sm  mt-2">
                  Phone number field must be a valid phone number
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="text-sm 2xl:text-base font-medium">
                <span>Email Address</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  placeholder="vendor@info.ng"
                  type="email"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm 2xl:text-base
                   border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <img
                  className="absolute top-[55%] -translate-y-[50%] left-2"
                  src="/assets/vendor/login/email.svg"
                  width={24}
                  height={24}
                  alt={"email"}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-[0.75rem] 2xl:text-sm mt-2">
                  Email address field must be a valid email
                </p>
              )}
            </div>
          </div>
          <div className="mt-3">
            <label className="block text-sm 2xl:text-base font-medium mb-1">
              <span>Gender</span>
              <span className="text-red-500">*</span>
            </label>
            <div className="w-full">
              <select
                className="block w-full p-3 text-sm 2xl:text-base border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                {...register("gender", { required: true })}
              >
                <option value="Male" className="">
                  Male
                </option>
                <option value="Female" className="">
                  Female
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-3">
            <div className="w-full">
              <label className="text-sm 2xl:text-base font-medium">
                <span>Password</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  placeholder="***********"
                  type="password"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm 2xl:text-base 
                  border border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                  })}
                  // pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                />
                <img
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                  src="/assets/vendor/login/lock.svg"
                  width={24}
                  height={24}
                  alt={"Password"}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-[0.75rem] 2xl:text-sm mt-2">
                  Must be at least 8 characters long
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="text-sm 2xl:text-base font-medium">
                <span>Confirm Password</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  placeholder="***********"
                  type="password"
                  className="placeholder:font-light mt-1 p-3 pl-9 w-full text-sm 2xl:text-base border
                   border-[#DADAE8] rounded-[8px] focus:outline focus:outline-1 focus:outline-black"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === watch("password"),
                  })}
                />
                <img
                  className="absolute top-[50%] -translate-y-[50%] left-2"
                  src="/assets/vendor/login/lock.svg"
                  width={24}
                  height={24}
                  alt={"Password"}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-[0.75rem] 2xl:text-sm mt-2">
                  Must match password field
                </p>
              )}
            </div>
          </div>
          <div className="mt-8">
            <button
              className="max-w-[1000px] mx-auto bg-primary_700 flex justify-center items-center font-semibold 
        text-white w-full h-[46px] rounded-[8px] 
        opacity-100 transition duration-500 ease-in-out hover:bg-primary_900 
         focus:shadow-primary-2 focus:outline-none focus:ring-0"
            >
              {isLoading ? <Ring color="white" size={32} /> : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Personal;
