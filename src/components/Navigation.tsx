import Link from "next/link";
import { MaxWidthWrapper } from "./MawWidthWrapper";
import { NavItems } from "./NavItems";
import Image from "next/image";

import { NavbarUser } from "./NavbarUser";

export const Navigation = () => {
  return (
    <nav className=" sticky z-[100] h-14 inset-x-0 top-0 w-full border-b shadow-sm border-zinc-200 bg-zinc-50 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b shadow-sm border-zinc-200">
          <Link href="/" className=" flex items-center gap-1">
            <Image src="/logo.png" width={50} height={50} alt="logo.png" />
            <h1 className="font-bold text-2xl">NextPC</h1>
          </Link>
          <NavItems />
          <NavbarUser />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
