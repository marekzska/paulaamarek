import { texts } from "@/model/data/texts";

export const Hero = () => {
  return (
    <div className="flex justify-between items-center p-20 font-sansita text-darker font-bold text-3xl text-center">
      <h4
        className="uppercase"
        dangerouslySetInnerHTML={{ __html: texts.leftText }}
      />
      <h3
        className="text-6xl"
        dangerouslySetInnerHTML={{ __html: texts.centerText }}
      />
      <h4 dangerouslySetInnerHTML={{ __html: texts.rightText }} />
    </div>
  );
};
