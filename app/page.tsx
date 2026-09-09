import { buttonVariants } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import Features from "@/features/landing/components/Features";
import HeroSection from "@/features/landing/components/HeroSection";
import HowItWork from "@/features/landing/components/HowItWork";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-w-full">
      <div className="bg-aside-bg flex justify-between p-6 ">
        <Logo />
        <div className="flex gap-4">
          <Link
            href={"/login"}
            className={`${buttonVariants({ size: "default" })}`}
          >
            SignIn
          </Link>
          <Link
            href={"/signup"}
            className={`${buttonVariants({ size: "default" })}`}
          >
            SignUp
          </Link>
        </div>
      </div>
      <div className="flex gap-14 justify-center items-center flex-col">
        <HeroSection />
        <Features />
        <HowItWork />
      </div>
    </div>
  );
}
