import { LoginFrom } from "@/components/auth/LoginForm";
import { MaxWidthWrapper } from "@/components/MawWidthWrapper";

function LoginPage() {
  return (
    <MaxWidthWrapper className=" flex items-center flex-col w-full justify-center mt-5">
      <LoginFrom />
    </MaxWidthWrapper>
  );
}

export default LoginPage;
