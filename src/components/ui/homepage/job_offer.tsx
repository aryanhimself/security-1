import React, { useState } from "react";
import "./job_offer.css";

import HorizontalLine from "@/components/common/HorizontalLine";
import {
  HomeAccordion,
  HomeAccordionContent,
  HomeAccordionItem,
  HomeAccordionTrigger,
} from "../home-accordion";
import { JOB_OFFER } from "@/config/data";
import SectionButton from "@/components/common/SectionButton";
import useScrollIntoViewOnOpen from "@/hooks/useScrollIntoViewOnOpen";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const Section10 = () => {
  const {
    data,
    headingSpan,
    subTitle,
    secondHeading,
    heading,
    title,
    requirements,
    responsibility,
    buttonText,
    buttonHref,
  } = JOB_OFFER;
  return (
    <section className="joboffer__section padding__style" id="Oferta-de-joburi">
      <div className="container">
        <div className="joboffer__section__content flex flex__col item-center">
          <HorizontalLine heading={title} subHeading={subTitle} />
          <h2 className="">
            {heading} <span className="bold__text">{headingSpan}</span>
          </h2>
          <div className="w-full">
            {data.map((item) => {
              return (
                <div key={item.title} className="my-3">
                  <HomeAccordion
                  
                    type="single"
                    collapsible
                  >
                    <HomeAccordionItem value={item.title} >
                      <HomeAccordionTrigger>
                        <p className="text-lg md:text-[22px] font-bold">
                          {item.title}
                        </p>
                      </HomeAccordionTrigger>
                      <HomeAccordionContent>
                       
                        <div className="joboffer__markdown">
                          <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                          >
                            {item.data}
                          </ReactMarkdown>
                        </div>
                      </HomeAccordionContent>
                    </HomeAccordionItem>
                  </HomeAccordion>
                </div>
              );
            })}
          </div>
          <div className="career__button__component ">
            <SectionButton
              href={buttonHref}
              name={buttonText}
              id="#section-10"
              offset="0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;
