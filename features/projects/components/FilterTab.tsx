import React from "react";
import Image from "next/image";

const FilterTab = () => {
  return (
    <div>
      <Image src={"/icons/filterIcon.svg"} alt="" width={18} height={18} />
      <div>
        <ul>
          <li>All</li>
          <li>Active</li>
          <li>Planning</li>
          <li>Complete</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterTab;
