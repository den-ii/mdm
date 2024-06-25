import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-screen w-screen z-50 bg-white px-5">
      <nav className="py-3 max-w-[1200px] mx-auto">
        <Link href="/" className="cursor-pointer mb-5">
          <Image
            src="/logo.svg"
            width={80}
            height={32}
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>
      </nav>
      <div className="flex flex-col h-[80vh] items-center justify-center">
        <Image width={380} height={300} src="/not_found.svg" alt="not found" />
        <div className="text-center text-4xl font-medium">Page Not Found</div>
        <p className="mt-3 max-w-[460px] mx-auto text-center">
          The page you're looking for can't be found. Double-check the URL and
          try again. Or click the button below.
        </p>
        <Link
          href="/"
          className="mt-4 text-white font-medium bg-primary_700 py-3 px-9 rounded-lg"
        >
          Go To Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
