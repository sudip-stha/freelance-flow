import React from "react";
import { clientTableDetail } from "../data/clients.data";
import Image from "next/image";

const ClientTableData = () => {
  return (
    <div className="flex flex-col">
      {clientTableDetail.clientDetail.map((data) => {
        return (
          <div
            key={data.id}
            className="flex items-center px-5 py-4.5 border-t-2 border-border"
          >
            <div className="min-w-71.5 flex gap-3 items-center">
              <span className="bg-accent w-10 h-10 p-2 rounded-full text-primary-text text-sm flex items-center justify-center font-semibold">
                {data.initials}
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-primary-text">
                  {data.name}
                </span>
                <span className="text-xs text-tertiary-text">
                  {data.company}
                </span>
              </div>
            </div>
            <span className="min-w-65 text-tertiary-text text-xs">
              {data.email}
            </span>
            <div className="min-w-58">
              <span className="text-[11px] font-medium bg-accent px-2.5 py-1 rounded-4xl">
                {data.status}
              </span>
            </div>
            <span className="min-w-40.5 font-medium text-primary-text text-sm">{data.projectCount}</span>
            <span className="min-w-44 font-semibold text-primary-text text-md">${data.value}</span>
            <button className="cursor-pointer">
              <Image
                src={"/icons/horizontalDotIcon.svg"}
                alt=""
                width={12}
                height={12}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ClientTableData;
