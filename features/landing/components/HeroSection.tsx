import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-6 mt-14 mx-4">
      <div className="flex flex-col gap-2 items-center text-primary-text">
        <h1 className="font-geist font-bold text-2xl md:text-4xl">
          Manage your freelance work. All in one flow.
        </h1>
        <p className="font-inter text-sm">
          FreelanceFlow helps you manage clients, projects, tasks, payments, and
          deadlines from one simple workspace.
        </p>
      </div>
      <Link
        href="/signup"
        className={`${buttonVariants({ size: "sm" })} self-center`}
      >
        Get Started ➡️
      </Link>
    </div>
  );
};

export default HeroSection;
