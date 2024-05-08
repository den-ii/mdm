import { usePathname } from "next/navigation";
import { paths } from "utils/constants";

function Navbar() {
  const pathname = usePathname();
  console.log(paths);

  return (
    <nav>
      <h1></h1>
    </nav>
  );
}

export default Navbar;
