import { buttonVariants } from "@/components/ui/button";
import OverviewStats from "@/features/overview/components/OverviewStats";
import ProjectsInMotion from "@/features/overview/components/ProjectsInMotion";
import RecentActivity from "@/features/overview/components/RecentActivity";
import TodayFocus from "@/features/overview/components/TodayFocus";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-10 px-8 py-6">
      <span className="font-geist font-medium text-[12px] text-active-text">
        YOUR WORKSPACE
      </span>
      <div className="flex justify-between items-end">
        <h2 className="font-geist font-bold text-5xl text-primary-text">
          Good morning, Sudip
        </h2>
        <Link
          href={"/projects"}
          className={`${buttonVariants({ size: "sm" })}`}
        >
          <Image src={"/icons/plusIcon.svg"} alt="" width={20} height={20} />{" "}
          New project
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        <OverviewStats />
        <ProjectsInMotion />
        <div className="flex gap-5">
          <TodayFocus />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default page;
