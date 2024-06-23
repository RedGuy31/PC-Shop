"use client";

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const NavbarUser = () => {
  let user = true;

  return (
    <div className=" hidden lg:flex items-center">
      {user ? (
        <div className=" flex  items-center  gap-4">
          <p className=" text-[15px] font-semibold">Irakli Maisuradze</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>My Profile</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="m-2 z-50">
              <DropdownMenuItem>
                <Link href="/">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className=" flex  items-center  gap-3">
          <Link
            href="/"
            className={buttonVariants({
              variant: "ghost",
              className: "text-[15px]",
            })}
          >
            Login
          </Link>
          <Link
            href="/"
            className={buttonVariants({
              variant: "default",
              className: "text-[15px]",
            })}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};
