import { texts } from "@/model/data/texts";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-10 items-center lg:gap-0 lg:flex-row lg:items-end justify-between px-40 py-20  font-sansita text-darker font-bold text-4xl text-center">
      <h4
        className="uppercase"
        dangerouslySetInnerHTML={{ __html: texts.leftText }}
      />
      <h3
        className="text-7xl"
        dangerouslySetInnerHTML={{ __html: texts.centerText }}
      />
      <h4 dangerouslySetInnerHTML={{ __html: texts.rightText }} />
    </div>
  );
};
