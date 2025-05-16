"use client";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { type CustomArrowProps, type Settings } from "react-slick";
import "./Section6.css";
import ReactMarkdown from "react-markdown";
import CustomLink from "./CustomLink";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Section7 from "./Section7";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CRONLOGOY_DATA } from "@/config/data";
import useScrollIntoViewOnOpen from "@/hooks/useScrollIntoViewOnOpen";
import { poppins } from "@/app/fonts";

const Section6 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [accordionValue, setAccordionValue] = useState<string | null>(null);
  const sliderRef = useRef<Slider>(null);
  const slidersRef = useRef<HTMLDivElement>(null);
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current: number) => {
      setActiveIndex(current);
      const currentSlider = slidersRef.current?.children[
        current
      ] as HTMLElement;
      currentSlider?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    },
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  // Use the custom hook for scrolling when accordion is opened
  const isAccordionOpen = accordionValue === "cronlogia";
  const accordionRef = useScrollIntoViewOnOpen(isAccordionOpen, 20); // Get the ref

  return (
    <>
      <div className="chronology-section">
        <div className="py-24">
          <div className="cooperate-section">
            <Accordion
              type="single"
              collapsible
              defaultValue="cronlogia"
              onValueChange={setAccordionValue}
            >
              <AccordionItem value={"cronlogia"}>
                <div className="container-sm p-4">
                  <AccordionTrigger>
                    <div
                      className="flex flex-col gap-2 pb-8"
                      ref={accordionRef}
                    >
                      <div className="cooperate-title-container gap-2 flex flex-col">
                        <h1 className={`cooperate-title ${poppins.className}`}>
                          Cronologia
                        </h1>
                        <div className="cooperate-bottom-border">
                          <div className="border-blue" />
                          <div className="border-yellow" />
                          <div className="border-red" />
                        </div>
                      </div>
                      <p className="text-[14px] md:text-[18px] font-normal">
                        Structurilor de informaţii externe din România
                      </p>
                    </div>
                  </AccordionTrigger>
                </div>
                <AccordionContent>
                  <div id="chronology-timestamp" className="container-sm">
                    <div
                      style={{
                        overflow: "scroll",
                      }}
                      className="no-scrollbar"
                    >
                      <div>
                        <div
                          className="flex no-scrollbar"
                          id="timestampContainer"
                          ref={slidersRef}
                        >
                          {CRONLOGOY_DATA.map((x, index) => (
                            <button
                              key={`${x.date}-${index}`}
                              type="button"
                              onClick={() =>
                                sliderRef.current?.slickGoTo(index)
                              }
                              className={`timestamp-bar-section group`}
                            >
                              <div className="flex flex-col ">
                                <div
                                  className={`time w-full text-white opacity-40 text-md md:text-2xl ${
                                    index === activeIndex &&
                                    "!opacity-100 text-lg md:text-2xl"
                                  } poppins`}
                                >
                                  {x.date}
                                </div>
                                <div>
                                  <div className="flex items-center mt-2">
                                    <div className="h-1 w-10 md:w-24 bg-white opacity-40 " />
                                    <div
                                      className={`h-[13px] w-[13px] rounded-full bg-primary-foreground opacity-40  ${
                                        index === activeIndex && "!opacity-100"
                                      }`}
                                    />
                                    <div className="h-1 w-10 md:w-24 bg-white opacity-40" />
                                  </div>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="slider-container mt-0 md:mt-5 pb-10">
                      <div className="stamp-content-container w-full">
                        <Slider ref={sliderRef} {...settings}>
                          {CRONLOGOY_DATA.map((value, index) => (
                            <div key={value.description}>
                              <div className="w-full flex justify-center items-center">
                                <div className="max-w-[530px]">
                                  <div className="text-center">
                                    <ReactMarkdown
                                      className={
                                        "text-[1.125rem] md:text-[1.625rem] inter  font-semibold"
                                      }
                                    >
                                      {value.title}
                                    </ReactMarkdown>
                                  </div>
                                  <div className="text-center mt-5 w-[90%] md:w-full m-auto ">
                                    <ReactMarkdown
                                      className={
                                        "text-[1rem] md:text-[1.125rem]"
                                      }
                                      components={{
                                        a: CustomLink,
                                      }}
                                      rehypePlugins={[rehypeRaw]}
                                      remarkPlugins={[remarkGfm]}
                                    >
                                      {value.description}
                                    </ReactMarkdown>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Section7 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;

const CustomPrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="absolute flex items-center justify-center left-[35%] md:left-0 top-full md:top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full shadow-md hover:bg-white/10 transition-colors h-[43px] w-[43px] md:h-[43px] md:w-[43px]"
      onClick={onClick}
    >
      <ChevronLeft className="md:w-10 md:h-10 w-10 h-10 text-white" />
    </button>
  );
};

const CustomNextArrow: React.FC<CustomArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="absolute flex items-center justify-center right-[35%] md:right-0 top-full md:top-1/2 -translate-y-1/2 z-10 p-2 bg-white/20 rounded-full shadow-md hover:bg-white/10 transition-colors h-[43px] w-[43px] md:h-[43px] md:w-[43px]"
      onClick={onClick}
    >
      <ChevronRight className="md:w-10 md:h-10 w-10 h-10 text-white" />
    </button>
  );
};
