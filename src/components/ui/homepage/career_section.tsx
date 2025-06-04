import React from "react";
import "./career_section.css";
import VideoPlayer from "../../common/Videoplayer";
import HorizontalLine from "@/components/common/HorizontalLine";
import { Card, CardContent, CardFooter } from "../card";
import SectionButton from "@/components/common/SectionButton";
import { CAREER_SECTION } from "@/config/data";

const Section6 = () => {
  const { heading, id, subHeading, title, videosdata, buttons } =
    CAREER_SECTION;
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <section
      ref={ref}
      className="life__section career__section padding__style"
      id={id}
    >
      <div className="container">
        <div className="life__section__content flex flex__col item-center">
          <HorizontalLine heading={heading} subHeading={subHeading} />
          <h2 className="">{title}</h2>

          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
            {videosdata.map((video) => (
              <Section6VideoTile
                key={video.url}
                poster={video.poster}
                url={video.url}
                title={video.title}
                description={video.description}
              />
            ))}
          </div>
          <div className="md:hidden block ">
            <div className="career__button__component flex flex-wrap justify-center">
              {buttons.map((item) => {
                return (
                  <SectionButton
                    key={item.href}
                    element={ref.current!}
                    href={item.href}
                    name={item.name}
                    id="#section-6"
                    offset="-1100"
                  />
                );
              })}
            </div>
          </div>
          <div className="hidden md:flex career__button__component flex-wrap justify-center">
            {buttons.map((item) => {
              return (
                <SectionButton
                  key={item.href}
                  element={ref.current!}
                  href={item.href}
                  name={item.name}
                  id="#section-6"
                  offset="-600"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Section6VideoTile = ({
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
        <CardContent className="p-0 m-0 bg-transparent">
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

export default Section6;
