import Link from "next/link";
import { MaxWidthWrapper } from "./MawWidthWrapper";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Cart } from "./Cart";

export const Header = () => {
  return (
    <header className=" bg-zinc-900">
      <MaxWidthWrapper>
        <div className=" flex items-center justify-between py-2">
          <div className=" flex items-center justify-between gap-5 text-white">
            <Link href="/">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link href="/">
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link href="/">
              <FaYoutube className="w-6 h-6" />
            </Link>
          </div>
          <Cart />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};
