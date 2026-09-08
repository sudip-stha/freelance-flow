import featuresData from "@/data/feature-data";
import FeatureCard from "../ui/FeatureCard";

const Features = () => {
  return (
    <div className="flex gap-4 max-w-6xl flex-wrap justify-center">
      {featuresData.map((data) => {
        return <FeatureCard key={data.title} data={data} />;
      })}
    </div>
  );
};

export default Features;
