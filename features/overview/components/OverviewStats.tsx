import overviewStatData from "../data/overviewStat.data";
import StatCard from "./ui/StatCard";

const OverviewStats = () => {
  return <div className="flex gap-5">
    {
      overviewStatData.map((data)=>{
        return <StatCard key={data.title} data={data} />
      })
    }
  </div>;
};

export default OverviewStats;
