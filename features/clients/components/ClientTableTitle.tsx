import React from "react";
import { clientTableDetail } from "../data/clients.data";

const ClientTableTitle = () => {
  return (
    <div className="flex gap-32 text-tertiary-text text-xs border-b border-border px-5 py-3">
      {clientTableDetail.tableTitle.map((data) => {
        return <span key={data} className="first:pr-29 nth-2:pr-19 nth-3:pr-9">{data}</span>;
      })}
    </div>
  );
};

export default ClientTableTitle;
