"use client";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

export const NavItemsMobile = () => {
  let user = false;
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify className="w-6 h-6 cursor-pointer text-zinc-900" />
        </SheetTrigger>
        <SheetContent className=" z-[100] bg-zinc-50">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className=" w-full  flex flex-col mt-5 items-center gap-2">
            <Accordion type="single" collapsible className=" w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className={buttonVariants({
                    variant: "ghost",
                    className: "gap-2",
                  })}
                >
                  Category
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3 z-[50]">
                  <SheetClose asChild>
                    <Link
                      href="/auth/login"
                      className={buttonVariants({
                        variant: "ghost",
                        className: "w-full",
                      })}
                    >
                      sadfjsdfjlkjdlsjfjlsd
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className={buttonVariants({
                        variant: "ghost",
                        className: "w-full",
                      })}
                    >
                      sadfjsdfjlkjdlsjfjlsd
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className={buttonVariants({
                        variant: "ghost",
                        className: "w-full",
                      })}
                    >
                      sadfjsdfjlkjdlsjfjlsd
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className={buttonVariants({
                        variant: "ghost",
                        className: "w-full",
                      })}
                    >
                      sadfjsdfjlkjdlsjfjlsd
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className={buttonVariants({
                        variant: "ghost",
                        className: "w-full",
                      })}
                    >
                      sadfjsdfjlkjdlsjfjlsd
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className={buttonVariants({
                        variant: "ghost",
                        className: "w-full",
                      })}
                    >
                      sadfjsdfjlkjdlsjfjlsd
                    </Link>
                  </SheetClose>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <SheetClose asChild>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                  className: "w-full",
                })}
              >
                Instalment
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                  className: "w-full",
                })}
              >
                Delivery Information
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "ghost",
                  className: "w-full",
                })}
              >
                Contact
              </Link>
            </SheetClose>
            <Separator />
            {user ? (
              <Accordion type="single" collapsible className=" w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger
                    className={buttonVariants({
                      variant: "ghost",
                      className: "gap-2",
                    })}
                  >
                    My Account
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2 z-[50]">
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className={buttonVariants({
                          variant: "ghost",
                          className: "w-full",
                        })}
                      >
                        Orders
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className={buttonVariants({
                          variant: "ghost",
                          className: "w-full",
                        })}
                      >
                        Settings
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/"
                        className={buttonVariants({
                          className: "w-full",
                        })}
                      >
                        Logout
                      </Link>
                    </SheetClose>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <>
                <SheetClose asChild>
                  <Link
                    href="/auth/login"
                    className={buttonVariants({
                      variant: "ghost",
                      className: "w-full",
                    })}
                  >
                    Login
                  </Link>
                </SheetClose>
                <Separator />
                <SheetClose asChild>
                  <Link
                    href="/"
                    className={buttonVariants({ className: "w-full" })}
                  >
                    Register
                  </Link>
                </SheetClose>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
