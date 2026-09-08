import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-6 mt-14">
      <div className="flex flex-col gap-2 items-center text-primary-text">
        <h1 className="font-geist font-bold text-4xl">
          Manage your freelance work. All in one flow.
        </h1>
        <p className="font-inter text-sm">
          FreelanceFlow helps you manage clients, projects, tasks, payments, and
          deadlines from one simple workspace.
        </p>
      </div>
      <Button size={"sm"} className="self-center">
        Get Started ➡️
      </Button>
    </div>
  );
};

export default HeroSection;
