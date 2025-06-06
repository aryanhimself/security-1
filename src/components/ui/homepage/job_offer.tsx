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

import { JobOfferAccordion } from "./job_offer_accordion";

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
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <section
      ref={ref}
      className="joboffer__section padding__style"
      id="Oferta-de-joburi"
    >
      <div className="container !px-4">
        <div className="joboffer__section__content flex flex__col item-center">
          <div className="container">
            <HorizontalLine heading={title} subHeading={subTitle} />
            <h2 className="">
              {heading} <span className="bold__text">{headingSpan}</span>
            </h2>
          </div>
          {/* <h1 className="joboffer__subtitle">{secondHeading}</h1> */}
          <div className="w-full">{data.map(JobOfferAccordion)}</div>
          <div className="career__button__component ">
            <SectionButton
              element={ref.current!}
              href={buttonHref}
              name={buttonText}
              id="#section-9"
              offset="0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;
