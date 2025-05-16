import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { type CustomArrowProps } from "react-slick";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import CustomLink from "./CustomLink";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  SEFII_FOREIGN_DATA,
  SEFII_FOREIGN_DATA_MOBILEVIEW,
  SEFII_INFORMATION_DATA,
  SEFII_INFORMATION_DATA_MOBILEVIEW,
} from "@/config/data";
import useScrollIntoViewOnOpen from "@/hooks/useScrollIntoViewOnOpen";
import { poppins } from "@/app/fonts";

const sections = {
  information: "information",
  foreign: "foreign",
};

const Section7 = () => {
  const sliderRef = useRef<Slider>(null);
  const slidersRef = useRef<HTMLDivElement>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const [activeSection, setActiveSection] = useState(sections.information);

  const contentBox = ({
    key,
    title = "MIHAIL MORUZOV",
    description = "şef al Serviciului Secret de Informaţii (12.04.1924 - 13.09.1940).",
  }: {
    key?: string;
    title?: string;
    description?: string;
  }) => (
    <div className="slider-content-box" key={key}>
      <ReactMarkdown
        components={{
          a: CustomLink,
        }}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
      >
        {title}
      </ReactMarkdown>
      <ReactMarkdown>{description}</ReactMarkdown>
    </div>
  );

  const contentBoxContainer = ({
    data,
    index,
  }: {
    data: any;
    index: number;
  }) => (
    <div className="slider-container w-full mb-4" key={index}>
      <div className="information-slider-container flex flex-row">
        <div className="slider-content mx-1">
          {data.data.map((content: any, index: number) => {
            return contentBox({
              key: `${content.title}-${index}`,
              title: content.title,
              description: content.description,
            });
          })}
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case sections.information:
        return (
          <div>
            <div className="hidden md:block">
              <Slider {...settings} ref={sliderRef}>
                {SEFII_INFORMATION_DATA.map((data, index) => {
                  return contentBoxContainer({ data, index });
                })}
              </Slider>
            </div>
            <div className="block md:hidden relative">
              <Slider {...settings} ref={sliderRef}>
                {SEFII_INFORMATION_DATA_MOBILEVIEW.map((data, index) => {
                  return contentBoxContainer({ data, index });
                })}
              </Slider>
            </div>
          </div>
        );
      case sections.foreign:
        return (
          <div>
            <div className="hidden md:block">
              <Slider {...settings} ref={sliderRef}>
                {SEFII_FOREIGN_DATA.map((data, index) => {
                  return contentBoxContainer({ data, index });
                })}
              </Slider>
            </div>
            <div className="block md:hidden">
              <Slider {...settings} ref={sliderRef}>
                {SEFII_FOREIGN_DATA_MOBILEVIEW.map((data, index) => {
                  return contentBoxContainer({ data, index });
                })}
              </Slider>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderButton = (label: string, section: string) => (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className="flex flex-col items-center information-button-div"
      onClick={() => setActiveSection(section)}
    >
      <button
        type="button"
        className={`head-button w-max ${
          activeSection !== section ? "!bg-white opacity-80" : "bg-white"
        }`}
      >
        {label}
      </button>
      {activeSection === section && (
        <div id="information-button-svg">
          <svg
            width="31"
            height="16"
            viewBox="0 0 31 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Image</title>
            <path
              d="M29.5323 0H1.46773C0.569389 0 0.126663 1.09252 0.771583 1.7179L14.8039 15.3249C15.1917 15.7011 15.8083 15.7011 16.1961 15.3249L30.2284 1.7179C30.8733 1.09252 30.4306 0 29.5323 0Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </div>
  );
  const [accordionValue, setAccordionValue] = useState<string | null>(null);

  const isAccordionOpen = accordionValue === "Şefii";
  const accordionRef = useScrollIntoViewOnOpen(isAccordionOpen, 140);

  return (
    <div className="cooperate-container flex flex-col gap-2 mt-8 pt-6">
      <Accordion
        type="single"
        collapsible
        defaultValue="Şefii"
        onValueChange={setAccordionValue}
      >
        <AccordionItem value={"Şefii"}>
          <div className="container-sm p-4">
            <AccordionTrigger>
              <div className="flex flex-col gap-2 pb-8" ref={accordionRef}>
                <div className="cooperate-title-container gap-2 flex flex-col">
                  <h1 className={`cooperate-title ${poppins.className}`}>
                    Şefii
                  </h1>
                  <div className="cooperate-bottom-border">
                    <div className="border-blue" />
                    <div className="border-yellow" />
                    <div className="border-red" />
                  </div>
                </div>
                <p className="text-[14px] md:text-[18px] font-normal">
                  Structurilor de informaţii / Serviciului de Informaţii Externe
                </p>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            <div id="head-slider-section" className="pb-8">
              <div
                className="head-slider-button-container flex flex-row md:gap-3 overflow-x-scroll no-scrollbar  max-w-[70.3125rem] m-auto md:px-[3.125rem]"
                ref={slidersRef}
              >
                <div
                  className="ml-6 md:ml-0 mr-3 md:mr-0"
                  onClick={() => sliderRef.current?.slickGoTo(1)}
                >
                  {renderButton("Structurilor de informaţii", "information")}
                </div>
                <div
                  className="ml-3 md:ml-0 mr-6 md:mr-0"
                  onClick={() => sliderRef.current?.slickGoTo(2)}
                >
                  {renderButton("Serviciului de Informaţii Externe", "foreign")}
                </div>
              </div>

              <div className="w-[100%] md:w-[960px] mx-auto px-4 md:px-0">
                {renderSection()}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Section7;

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
