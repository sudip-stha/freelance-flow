import { FeatureCardProps } from "@/type/data";

const FeatureCard = ({ data }: FeatureCardProps) => {
  return (
    <div className="max-w-xs bg-card-bg px-5 py-8 rounded-4xl flex flex-col gap-4 border-2 border-border">
      <h3 className="font-geist font-semibold text-[16px]">{data.title}</h3>
      <p className="font-inter text-[12px]">{data.description}</p>
    </div>
  );
};

export default FeatureCard;
