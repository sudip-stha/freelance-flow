import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import HeroSection from "@/features/landing/components/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-w-full">
      <div className="bg-aside-bg flex justify-between p-6 ">
        <Logo />
        <div className="flex gap-4">
          <Link href={"/login"}>
            <Button>SignIn</Button>
          </Link>
          <Link href={"/signup"}>
            <Button>SignUp</Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
      <HeroSection />
      </div>
    </div>
  );
}
