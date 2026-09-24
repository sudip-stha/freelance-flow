import React from "react";
import recentActivity from "../data/recentActivity.data";
import Link from "next/link";
import Image from "next/image";

const RecentActivity = () => {
  return (
    <div className="flex flex-col gap-8 basis-[52%] bg-card-bg border-2 border-border p-6 rounded-2xl">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-geist font-semibold text-xl">Recent activity</h3>
          <p className="font-inter text-xs text-tertiary-text">
            A quiet log of what moved
          </p>
        </div>
        <Link
          href="/analytics"
          className="flex font-inter text-[12px] font-bold text-active-text"
        >
          <Image
            src={"/icons/arrowTopRightIcon.svg"}
            alt=""
            width={18}
            height={18}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {recentActivity.map((data) => {
          return (
            <div key={data.id} className="flex justify-between items-start">
              <div className="flex gap-4 items-center">
                <span className="bg-accent w-2 h-2 rounded-full"></span>
                <div className="flex flex-col">
                  <h6 className="font-geist font-semibold text-md text-primary-text">
                    {data.title}
                  </h6>
                  <span className="font-inter text-tertiary-text text-[14px]">
                    {data.activityMessage}
                  </span>
                </div>
              </div>
              <span className="font-inter text-tertiary-text text-[10px]">
                {data.duration}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
