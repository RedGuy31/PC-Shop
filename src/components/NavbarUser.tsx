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
import LoginButton from "./auth/LoginButton";

export const NavbarUser = () => {
  let user = false;

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
        <LoginButton mode="modal" asChild>
          <Button>Sign In</Button>
        </LoginButton>
      )}
    </div>
  );
};
