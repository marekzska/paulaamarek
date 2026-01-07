import { texts } from "@/model/data/texts";

export const MainText = () => {
  return (
    <div className="mx-10 lg:px-10 py-20 font-nunito border-t border-b border-lighter">
      <h5 className="font-bold text-darker text-2xl">{texts.welcomeTitle}</h5>
      <p
        className="text-lighter text-2xl leading-10"
        dangerouslySetInnerHTML={{ __html: texts.welcomeText }}
      />
    </div>
  );
};
