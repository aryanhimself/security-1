"use client";
import React, { useState, useRef } from "react";
import "./Section2.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { COOPERATION_DATA } from "@/config/data";
import useScrollIntoViewOnOpen from "@/hooks/useScrollIntoViewOnOpen";
import { poppins } from "@/app/fonts";

const Section2 = () => {
  return (
    <div>
      <div className="aboutus-second-section">
        <div className="container-sm sm:px-2">
          <div className="flex flex-col gap-10">
            {COOPERATION_DATA.map((value, i) => (
              <Section2Item value={value} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

const Section2Item = ({
  value,
}: {
  value: (typeof COOPERATION_DATA)[number];
}) => {
  const [sectionValue, setSectionValue] = useState("");
  // Check if the current accordion is open
  const isOpen = sectionValue === value.title;

  // Use the custom hook and get the itemRef
  const itemRef = useScrollIntoViewOnOpen(isOpen, 140);

  return (
    <Accordion
      key={value.title}
      type="single"
      collapsible
      onValueChange={(value1) => setSectionValue(value1)} // Trigger the scroll on value change
    >
      <AccordionItem value={value.title}>
        <AccordionTrigger>
          <div
            ref={itemRef}
            className="cooperate-container flex flex-col gap-2"
          >
            {" "}
            {/* Set the ref */}
            <div className="cooperate-title-container">
              <h1 className={`cooperate-title ${poppins.className}`}>
                {value.title}
              </h1>
              <div className="cooperate-bottom-border mt-0 md:mt-[10px]">
                <div className="border-blue" />
                <div className="border-yellow" />
                <div className="border-red" />
              </div>
            </div>
            <div className="cooperate-content mt-4">
              {sectionValue !== value.title && (
                <ReactMarkdown
                  className={"pb-6"}
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                >
                  {`${value.description
                    .split(/(?<=[.!?])\s+/) // split after punctuation marks
                    .slice(0, 1) // take the first sentence
                    .join(" ")} <span className="underline">mai mult</span>`}
                </ReactMarkdown>
              )}
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="cooperate-content">
            <ReactMarkdown
              className={"pt-2"}
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
            >
              {value.description}
            </ReactMarkdown>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
