import type { TooltipContentProps } from "recharts";

const CustomTooltip = ({ active, payload, label }: TooltipContentProps) => {
  if (!active || !payload?.length) return null;

  const data = payload[0]?.payload;
  if (!data) return null;

  return (
    <div className="flex flex-col gap-0.5 bg-card-bg border-2 border-border rounded-md p-2 font-inter">
      <p className="font-bold text-md">{label}</p>
      <div className="text-sm">
        <p>Value:${Number(data.value).toLocaleString()}</p>
        <p>Hours: {data.hours}</p>
      </div>
    </div>
  );
};

export default CustomTooltip;
