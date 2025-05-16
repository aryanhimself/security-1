import React, { useState } from "react";
import "./question-section.css";
import VideoPlayer from "../../common/Videoplayer";
import HorizontalLine from "@/components/common/HorizontalLine";
import {
  HomeAccordion,
  HomeAccordionContent,
  HomeAccordionItem,
  HomeAccordionTrigger,
} from "../home-accordion";
import "../../common/Accordion/index.css";
import { QUESTION_SECTION_DATA } from "@/config/data";
import useScrollIntoViewOnOpen from "@/hooks/useScrollIntoViewOnOpen";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const QuestionSection = () => {
  const { heading, questionData, subTitle } = QUESTION_SECTION_DATA;
  const [openItem, setOpenItem] = useState<string | null>(null);
  return (
    <section
      className="question__section padding__style"
      id="question__section"
    >
      <div className="container">
        <div className="question__section__content w-full justify-stretch flex flex-col gap-3">
          <HorizontalLine subHeading={subTitle} />
          <h2 className="text-center">{heading}</h2>
          <div className=" flex flex-col gap-8">
            {questionData.map((question, index) => {
              const isAccordionOpen = openItem === question.id;
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const accordionRef = useScrollIntoViewOnOpen(
                isAccordionOpen,
                140
              );
              return (
                <div key={index} className="w-full flex flex-col gap-4">
                  <div className="flex justify-center items-center lg:items-stretch flex-col-reverse lg:flex-row  w-full gap-7 lg:h-[336px]">
                    <div className="w-full lg:w-[35%]  message__box ">
                      <p>{question.title}</p>
                    </div>
                    <div className="w-full lg:w-[65%] lg:auto flex-1 message__img lg:mb-9 relative">
                      <VideoPlayer
                        poster={question.poster}
                        url={question.videoUrl}
                      />
                    </div>
                  </div>
                  <HomeAccordion
                    type="single"
                    collapsible
                    onValueChange={setOpenItem}
                  >
                    <HomeAccordionItem value={question.id} ref={accordionRef}>
                      <HomeAccordionTrigger>
                        <h1 className="text-lg md:text-[22px] font-bold">
                          {question.buttonText}
                        </h1>
                      </HomeAccordionTrigger>
                      <HomeAccordionContent>
                        <div className="panel">
                          <ReactMarkdown
                            className={"faq_markdown panel"}
                            rehypePlugins={[rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                          >
                            {question.description}
                          </ReactMarkdown>
                        </div>
                      </HomeAccordionContent>
                    </HomeAccordionItem>
                  </HomeAccordion>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
