import { texts } from "@/model/data/texts";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <div className="px-10 flex justify-between items-center py-3 border-b border-lighter">
      <h2 className="text-lighter font-sansita font-bold text-2xl">
        {texts.leftTitle}
      </h2>
      <Button
        variant={"outline"}
        className="rounded-full px-10 border-2 border-darker text-darker font-nunito hover:bg-darker hover:text-white"
      >
        {texts.rsvp}
      </Button>
    </div>
  );
};
