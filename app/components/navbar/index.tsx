import Image from "next/image";
import { usePathname } from "next/navigation";
import { paths } from "utils/constants";
import { MdArrowDropDown } from "react-icons/md";
import { PiBellSimpleFill } from "react-icons/pi";

function Navbar() {
  const pathname = usePathname();
  let path = pathname.split("/")[1];

  let header = path ? paths.get(path) : "Dashboard";

  return (
    <nav className="flex justify-between items-center">
      <h1 className="font-semibold text-2xl 2xl:text-3xl">{header}</h1>
      <div className="flex gap-3 items-center">
        <div className="w-[30px] h-[30px] 2xl:hidden flex items-center justify-center border border-[#DADAE8] rounded-full">
          <PiBellSimpleFill fill="#5C6F7F" />
        </div>
        <div className="w-[40px] h-[40px] hidden 2xl:flex items-center justify-center border border-[#DADAE8] rounded-full">
          <PiBellSimpleFill fill="#5C6F7F" className="2xl:text-lg" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/assets/vendor/navbar/user.svg"
            width={20}
            height={20}
            alt="user"
            className="2xl:hidden"
          />
          <Image
            src="/assets/vendor/navbar/user.svg"
            width={23}
            height={23}
            alt="user"
            className="hidden 2xl:inline-block"
          />
          <p className="2xl:text-lg">Scarlett</p>
          <MdArrowDropDown color="#5C6F7F" className="2xl:text-lg" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
