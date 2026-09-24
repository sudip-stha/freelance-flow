import React from "react";
import todayFocus from "../data/todayFocus.data";
import priorityColor from "@/utils/priorityColor";

const TodayFocus = () => {
  return (
    <div className="flex flex-col gap-8 basis-[47%] bg-card-bg border-2 border-border p-6 rounded-2xl">
      <div>
        <h3 className="font-geist font-semibold text-xl">Today&apos;s focus</h3>
        <p className="font-inter text-xs text-tertiary-text">
          Small steps, visible progress
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {todayFocus.map((data) => {
          return (
            <div key={data.id} className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <input type="radio" name="" id="" />
                <div className="flex flex-col">
                  <h6 className="font-geist font-semibold text-md text-primary-text">
                    {data.task}
                  </h6>
                  <span className="font-inter text-tertiary-text text-[10px]">
                    {data.projectName}
                  </span>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-3xl font-inter text-[12px] ${priorityColor(data.priority)}`}
              >
                {data.priority}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodayFocus;
