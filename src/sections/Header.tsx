import Image from "next/image";
import logo from "../../public/sinova-logo.webp";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full shadow-lg flex items-center py-5 px-4 md:px-10">
      <Link
        href="/"
        className="flex items-center justify-center gap-3 md:gap-5"
      >
        <Image
          priority
          src={logo}
          alt="logo"
          width={160}
          height={25}
          className="w-40 h-auto md:w-80"
        />
        <h1 className="text-xl md:text-2xl font-bold">Test task</h1>
      </Link>
    </header>
  );
};

export default Header;
