import React, { useState } from "react";
import "./offer_section.css";
import VideoPlayer from "../../common/Videoplayer";
import HorizontalLine from "@/components/common/HorizontalLine";
import SectionButton from "@/components/common/SectionButton";
import {
  HomeAccordion,
  HomeAccordionContent,
  HomeAccordionItem,
  HomeAccordionTrigger,
} from "../home-accordion";
import { OFFER_SECTION } from "@/config/data";
import useScrollIntoViewOnOpen from "@/hooks/useScrollIntoViewOnOpen";

const Section5 = () => {
  const { accordion, heading, id, poster, subHeading, title, url, href, name } =
    OFFER_SECTION;
  const [sectionValue, setSectionValue] = useState<string | null>(null);

  // Check if the current accordion is open
  const isOpen = sectionValue === accordion.title;

  // Use the custom hook and get the itemRef
  const itemRef = useScrollIntoViewOnOpen(isOpen, 140);
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <section
      className="offer__section unique__feature__section padding__style"
      id={id}
      ref={ref}
    >
      <div className="container">
        <div className="offer__section__content  flex flex__col item-center">
          <HorizontalLine heading={heading} subHeading={subHeading} />
          <h2 className="">{title}</h2>
          <div className="large__video__container">
            <VideoPlayer poster={poster} url={url} />
          </div>
          <div className="mt-10 w-full md:w-[860px]">
            <HomeAccordion
              type="single"
              collapsible
              onValueChange={(value1) => setSectionValue(value1)}
            >
              <HomeAccordionItem value={accordion.title} ref={itemRef}>
                <HomeAccordionTrigger>
                  <h1 className="text-lg md:text-[22px] font-bold">
                    {accordion.title}
                  </h1>
                </HomeAccordionTrigger>
                <HomeAccordionContent>
                  <div className="panel">
                    {accordion.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                    <ul>
                      {accordion.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </HomeAccordionContent>
              </HomeAccordionItem>
            </HomeAccordion>
          </div>
          <div className="unique__feature__section__content">
            <SectionButton
              element={ref.current!}
              href={href}
              name={name}
              id="#section-5"
              offset="0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
