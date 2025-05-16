"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { link } from "fs";
import { HEALTH_DATA } from "@/config/data";
import useScrollIntoViewOnOpen from "@/hooks/useScrollIntoViewOnOpen";
import { poppins } from "@/app/fonts";

const Section8 = () => {
  const [accordionValue, setAccordionValue] = useState<string | null>(null);

  return (
    <div className="py-16 bg-white">
      <div className="container-sm">
        <div className="flex items-stretch gap-3">
          <div className="cooperate-title-container gap-0 flex flex-col">
            <h1 className={`cooperate-title text-black ${poppins.className}`}>
              Declarații de{" "}
              <span className={`block md:hidden ${poppins.className}`}>
                avere și de interese
              </span>
            </h1>
            <div className="cooperate-bottom-border">
              <div className="border-blue" />
              <div className="border-yellow" />
              <div className="border-red" />
            </div>
          </div>
          <p
            className={`hidden md:block text-[1.5rem] md:text-[2rem] font-bold font-['Poppins'] text-black ${poppins.className}`}
          >
            avere și de interese
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          {HEALTH_DATA.map((value) => {
            // Check if the current accordion is open
            const isOpen = accordionValue === value.title;

            // Use the custom hook and get the itemRef
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemRef = useScrollIntoViewOnOpen(isOpen);
            return (
              <Accordion
                type="single"
                collapsible
                onValueChange={setAccordionValue}
                key={value.id}
              >
                <AccordionItem value={value.title} className="border-0">
                  <AccordionTrigger className="text-black">
                    <div ref={itemRef}>
                      <p className="text-[14px] md:text-[18px] font-normal">
                        {value.title}
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 mt-4">
                      {value.list
                        .slice()
                        .reverse()
                        .map((value) => (
                          <div
                            key={value.id}
                            className="flex flex-col md:flex-row gap-0 md:gap-6"
                          >
                            <p
                              className="text-[14px] md:text-[14px] font-bold text-black w-10"
                              key={value.id}
                            >
                              {value.date}
                            </p>
                            <div className="flex flex-row gap-7">
                              <a
                                target="_blank"
                                href={value.link1}
                                className={`text-[14px] md:text-[14px] text-[#002FE5] font-normal`}
                              >
                                Declaraţia de interese
                              </a>
                              <a
                                target="_blank"
                                href={value.link2}
                                className={`text-[14px] md:text-[14px] text-[#002FE5] font-normal`}
                              >
                                Declaraţia de avere
                              </a>
                            </div>
                          </div>
                        ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section8;
