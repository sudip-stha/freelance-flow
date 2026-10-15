import { Button } from "@/components/ui/button";
import AnalyticStats from "@/features/analytics/components/AnalyticStats";
import RevenueCard from "@/features/analytics/components/RevenueCard";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col gap-10 px-8 py-6">
      <span className="font-geist font-medium text-[12px] text-active-text">
        SIGNALS, NOT NOISE
      </span>
      <div className="flex justify-between items-end">
        <h2 className="font-geist font-bold text-5xl text-primary-text">
          Analytics
        </h2>
        <Button size={"md"} variant={"outline"}>
          <Image
            src={"/icons/exportFileIcon.svg"}
            alt=""
            width={18}
            height={18}
          />{" "}
          Export summary
        </Button>
      </div>
      <div className="flex flex-col gap-5">
        <AnalyticStats />
        <RevenueCard />
      </div>
    </div>
  );
};

export default page;
