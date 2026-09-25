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
          className={`${buttonVariants({ size: "sm", variant: "secondary" })}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.53125 2.375H8.46875C8.55208 2.375 8.59375 2.41667 8.59375 2.5V13.5C8.59375 13.5833 8.55208 13.625 8.46875 13.625H7.53125C7.44792 13.625 7.40625 13.5833 7.40625 13.5V2.5C7.40625 2.41667 7.44792 2.375 7.53125 2.375Z"
              fill="currentColor"
            />
            <path
              d="M3 7.40625H13.5C13.5833 7.40625 13.625 7.44792 13.625 7.53125V8.46875C13.625 8.55208 13.5833 8.59375 13.5 8.59375H2.5C2.41667 8.59375 2.375 8.55208 2.375 8.46875V7.53125C2.375 7.44792 2.41667 7.40625 2.5 7.40625H3Z"
              fill="currentColor"
            />
          </svg>
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
