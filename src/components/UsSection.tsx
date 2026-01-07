import { texts } from "@/model/data/texts";

export const UsSection = () => {
  return (
    <div className="grid grid-cols-2 px-20 py-16">
      <div className="flex flex-col gap-10">
        <h2 className="font-bold text-5xl text-darker font-sansita">
          {texts.usTitle}
        </h2>
        <img src="/images/proposal.webp" className="w-2/3" />
      </div>
      <div className="flex flex-col gap-6">
        <p
          className="text-base font-nunito text-lighter"
          dangerouslySetInnerHTML={{ __html: texts.usTeaser }}
        />
        <h3 className="font-bold font-sansita text-2xl text-darker">
          {texts.usQuizTitle}
        </h3>
        <p
          className="text-base font-nunito text-lighter list-disc"
          dangerouslySetInnerHTML={{ __html: texts.usQuizText }}
        />
        <img src="/images/halloween.webp" className="w-2/5" />
      </div>
    </div>
  );
};
