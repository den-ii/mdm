import Image from "next/image";
import Link from "next/link";

interface ISignedUpPage {
  image: string;
  imageAlt: string;
  title: string;
  message: string;
  link?: string;
  linkMsg?: string;
}

function RegSuccess({
  image,
  imageAlt,
  title,
  message,
  link,
  linkMsg,
}: ISignedUpPage) {
  return (
    <div className="flex p-2 min-h-screen">
      <div className="w-[40%] bg-primary_900 relative p-4">
        <Link href="/" className="hidden md:inline-block">
          <Image
            src="/assets/vendor/login/mdm_logo.svg"
            width={80}
            height={32}
            alt="Logo"
          />
        </Link>
        <div className="absolute bottom-0 right-0 h-[70%]">
          <img
            src="/assets/registered_bg.svg"
            alt="sign up"
            className="h-[100%] w-[100%]"
          />
        </div>
      </div>
      <div className="w-[60%] bg-[#FBFBFD] flex flex-col">
        <div className="hidden md:block font-light text-right 2xl:text-lg mx-[14px] my-[14px]">
          Having Troubles?{" "}
          <span className="text-primary_700 md:text-base 2xl:text-lg font-semibold cursor-pointer">
            Get Help
          </span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center w-[90%] max-w-[625px] mx-auto gap-2">
          <Image src={image} width={200} height={200} alt={imageAlt} />
          <h2 className="font-semibold mt-2 text-3xl text-center">{title}</h2>
          <p className="mt-2 text-center 2xl:text-lg">{message}</p>
          {link && (
            <Link
              href={link}
              className="mt-2 text-white bg-primary_700 py-3 px-5 rounded-lg"
            >
              {linkMsg}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegSuccess;
