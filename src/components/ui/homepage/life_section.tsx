import React from "react";
import "./life_section.css";
import VideoPlayer from "../../common/Videoplayer";
import { Card, CardContent, CardFooter } from "../card";
import HorizontalLine from "@/components/common/HorizontalLine";
import { LIFE_SECTION } from "@/config/data";

const Section3 = () => {
  return (
    <section
      className="life__section_1 padding__style"
      id={LIFE_SECTION.sectionId}
    >
      <div className="container">
        <div className="life__section__content flex flex-col">
          <HorizontalLine
            heading={LIFE_SECTION.sectionHeading}
            subHeading={LIFE_SECTION.sectionSubheading}
          />
          <h2 className="">{LIFE_SECTION.sectionTitle}</h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {LIFE_SECTION.videosdata.map((video) => (
              <Section3VideoTile
                key={video.url}
                poster={video.poster}
                url={video.url}
                title={video.title}
                description={video.description}
              />
            ))}
          </div>
        </div>
        <p className="video__notice">{LIFE_SECTION.sectionFooter}</p>
      </div>
    </section>
  );
};

const Section3VideoTile = ({
  url,
  poster,
  title,
  description,
}: {
  url: string;
  poster: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center lg:grid grid-cols-2  ">
      <Card className="border-0 w-full sm:w-[483px]">
        <CardContent className=" p-0 m-0 bg-transparent">
          <VideoPlayer poster={poster} url={url} />
        </CardContent>
        <CardFooter>
          <div className="flex flex-col md:flex-row justify-between  w-full items-center py-2">
            <div className="">
              <p className="text-lg md:text-[22px]">{title}</p>
            </div>
            <div className="">
              <p className="text-lg md:text-[22px] text-center">
                {description}
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Section3;
