"use clinet";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { LoginFrom } from "./LoginForm";
import { DialogTitle } from "@radix-ui/react-dialog";
import { CardDescription } from "../ui/card";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>

        <DialogContent className=" p-0 w-auto bg-transparent border-none z-[100]">
          <DialogHeader className=" hidden" />
          <DialogTitle className="hidden" />
          <DialogDescription className=" hidden" />
          <LoginFrom />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={onClick} className=" cursor-pointer">
      {children}
    </span>
  );
}

export default LoginButton;
