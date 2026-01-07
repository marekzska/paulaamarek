import { texts } from "@/model/data/texts";
import { Button } from "./ui/button";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <div className="flex justify-between items-center mx-10 pb-20">
      <h3 className="text-4xl font-bold font-sansita text-darker">
        {texts.footerText}
      </h3>
      <Link to="https://invitations.paulaamarek.com/">
        <Button
          variant={"outline"}
          className="rounded-full px-20 py-6 text-xl border-2 border-darker text-darker font-nunito hover:bg-darker hover:text-white"
        >
          {texts.rsvp}
        </Button>
      </Link>
    </div>
  );
};
