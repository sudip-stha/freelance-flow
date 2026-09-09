import howItWorks from "@/data/howItWork-data";

const HowItWork = () => {
  return (
    <div className="bg-[url('/images/howItWorkBg.png')] bg-cover bg-no-repeat bg-center w-full p-10">
      <div className="ml-auto max-w-xl flex flex-col gap-15 border-l-4 border-primary-text pl-4">
        {howItWorks.map((data) => {
          return (
            <div
              key={data.step}
              className="text-primary-text flex flex-col gap-3"
            >
              <div className="font-geist flex gap-3 font-bold text-2xl">
                <span className="">{data.step}</span>
                <h4>{data.title}</h4>
              </div>
              <p className="font-inter text-lg font-semibold pl-11">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWork;
