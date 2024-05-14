import Image from "next/image";
import { usePathname } from "next/navigation";
import { paths } from "utils/constants";
import { MdArrowDropDown } from "react-icons/md";
import { PiBellSimpleFill } from "react-icons/pi";

function Navbar() {
  const pathname = usePathname();
  console.log(paths);

  let header = paths.get(pathname);

  return (
    <nav className="flex justify-between items-center">
      <h1 className="font-bold text-2xl">{header}</h1>
      <div className="flex gap-3 items-center">
        <div className="w-[30px] h-[30px] flex items-center justify-center border border-[#DADAE8] rounded-full">
          {/* <Image
            src="assets/vendor/navbar/notification.svg"
            width={20}
            height={20}
            alt="notification"
          /> */}

          <PiBellSimpleFill fill="#5C6F7F" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="assets/vendor/navbar/user.svg"
            width={20}
            height={20}
            alt="user"
          />
          <p>Scarlett</p>
          <MdArrowDropDown color="#5C6F7F" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;