import { texts } from "@/model/data/texts";
import { Button } from "./ui/button";
import { Link } from "react-router";

export const Where = () => {
  return (
    <div className="mx-10 lg:px-10 py-20">
      <div className="flex flex-col gap-x-10 lg:grid grid-cols-2 gap-10 ">
        <div className="flex flex-col gap-4">
          <h2 className="text-darker font-bold text-7xl font-sansita">
            {texts.whereTitle}
          </h2>
          <h3 className="text-darker font-bold text-3xl font-sansita">
            {texts.whereCeremonyTitle}
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5307.333958111949!2d17.28849!3d48.309256!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c974638668f0d%3A0x9a8ff35e729e6bc3!2sKostol%20sv.%20Martina!5e0!3m2!1scs!2sch!4v1767792287108!5m2!1scs!2sch"
            width="800"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="max-w-full"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:grid grid-cols-2 mt-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-darker font-bold text-3xl font-sansita">
            {texts.whereFeastTitle}
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21217.146342588243!2d17.290539!3d48.338551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c970a944cc0a5%3A0x64a4c4aeb2bc82cd!2sPod%20Ga%C5%A1tankou!5e0!3m2!1scs!2sch!4v1767792339393!5m2!1scs!2sch"
            width="800"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="max-w-full"
          ></iframe>
        </div>
        <div className="flex flex-col gap-4">
          <p
            className="text-lighter text-base"
            dangerouslySetInnerHTML={{ __html: texts.whereInfoText }}
          />
          <Link to="https://www.podgastankou.sk/">
            <Button
              variant="outline"
              className="rounded-full text-xl text-darker border-darker uppercase font-normal xl:w-1/3 border-2 py-6 hover:bg-darker hover:text-white"
            >
              {texts.whereLinkText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
