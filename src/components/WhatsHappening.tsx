import { texts } from "@/model/data/texts";

export const WhatsHappening = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-0 lg:grid grid-cols-2 mx-10 px-10 py-16 border-b border-darker">
      <h2 className="text-darker font-bold text-7xl font-sansita">
        {texts.whatsHappeningTitle}
      </h2>
      <div className="flex flex-col gap-8">
        <h3 className="text-darker font-bold text-4xl font-sansita">
          {texts.whatsHappeningDate}
        </h3>
        <h4 className="text-darker font-bold text-3xl font-sansita">
          {texts.whatHappeningForEveryoneTitle}
        </h4>
        <p
          className="text-base font-nunito text-lighter"
          dangerouslySetInnerHTML={{
            __html: texts.whatHappeningForEveryoneText,
          }}
        />

        <h4 className="text-darker font-bold text-3xl font-sansita">
          {texts.whatsHappeningForGuestsTitle}
        </h4>
        <p
          className="text-base font-nunito text-lighter"
          dangerouslySetInnerHTML={{
            __html: texts.whatsHappeningForGuestsText,
          }}
        />
      </div>
    </div>
  );
};
