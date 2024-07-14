import Link from "next/link";
import Links from "./Links";
import TriggerIcon from "@/assets/icon/logo.svg";

const Header = () => {
  return (
    <div className="w-screen h-[72px] md:h-[88px] xl:h-[111px] 2xl:h-[128px] fixed top-0 left-0 z-50 flex justify-center items-center">
      <Link
        href={"/"}
        className="absolute h-6 left-4 top-6  md:left-10 md:top-7 xl:left-20 xl:top-9 2xl:top-10 2xl:left-30"
      >
        <TriggerIcon className=" md:h-8 xl:h-10 2xl:h-12" />
      </Link>
      <Links />
    </div>
  );
};

export default Header;
