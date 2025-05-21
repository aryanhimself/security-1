"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import "./Section3.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { CONDUCEREA_DATA } from "@/config/data";
import { poppins } from "@/app/fonts";
import BackScrollButton from "@/components/common/ScrollButton/BackScrollButton";

const Section3 = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeSection1, setActiveSection1] = useState(null);
  const [activeSection2, setActiveSection2] = useState(null);

  const handleSectionClick = (section: any) => {
    setActiveSection(activeSection === section ? null : section);
  };
  const handleSectionClick1 = (section: any) => {
    setActiveSection1(activeSection === section ? null : section);
  };
  const handleSectionClick2 = (section: any) => {
    setActiveSection2(activeSection === section ? null : section);
  };

  const SectionBox = ({
    title,
    description,
    isActive,
    onClick,
    index,
  }: {
    title: string;
    description: string;
    isActive: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    index: number;
  }) => (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div>
        <div
          className={`leading-container-box  w-full  leading-box-${index} cursor-pointer `}
          onClick={onClick}
        >
          <h2 className="leading-box-title title-two text-center">{title}</h2>
          <p className="text-[14px] text-center">{description}</p>
          <div
            className={`leading-svg-button ${
              isActive ? "rotate-180" : "rotate-0"
            }`}
          >
            <svg
              id="rotate-leading-svg"
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Image</title>
              <path
                d="M19.7116 2L10.8558 10L2 2"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );

  const SectionContent = ({ content }: { content: string }) => (
    <div
      className={`leading-box-content-container ${
        activeSection !== null ? "active" : ""
      } leading-box-${activeSection ? activeSection + 1 : 1}`}
    >
      <ReactMarkdown
        className={"pt-3"}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );

  useEffect(() => {
    if (activeSection !== null) {
      
      // Define your offset (e.g., 50px for a header height)
      const offset = 430;

      // Loop through and scroll each small section into view with the offset
      Array.from({ length: 3 }).forEach((_, index) => {
        const smallSection = document.getElementById(`sectionContent-${index}`);
        if (smallSection) {
          const top =
            smallSection.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: top - offset, // Adjust the top position with the offset
            behavior: "smooth",
          });
        }
      });
    }
  }, [activeSection2]);
  useEffect(() => {
     const isMobile = window.innerWidth <= 768
    if (activeSection !== null) {

      // Define your offset (e.g., 50px for a header height)
      const offset = isMobile?300:250;

      // Loop through and scroll each small section into view with the offset
      Array.from({ length: 3 }).forEach((_, index) => {
        const smallSection = document.getElementById(
          `sectionContent-small-${index}`
        );
        if (smallSection) {
          const top =
            smallSection.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: top - offset, // Adjust the top position with the offset
            behavior: "smooth",
          });
        }
      });
    }
  }, [activeSection1]);

  const handleBackClickFromChild = (activeSection: string | null) => {
    if (activeSection !== null) {
      // Define your offset (e.g., 50px for a header height)
      const offset = 250;

      // Loop through and scroll each small section into view with the offset
      const smallSection = document.getElementById(
        `sectionContent-small-${activeSection}`
      );
      if (smallSection) {
        const top =
          smallSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: top - offset, // Adjust the top position with the offset
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div
      className={`leading-section min-h-[572px] ${
        activeSection !== null ? "show-lg-img" : "show-sm-img"
      }`}
      id="leading-box-container"
    >
      <div className={`container-sm p-2 flex flex-col gap-5 items-start `}>
        <div>
          <div className="cooperate-title-container">
            <h1
              className={`leading-title text-[1.5rem] md:text-[2rem] font-bold ${poppins.className}`}
            >
              CONDUCEREA SIE
            </h1>
            <div className="cooperate-bottom-border">
              <div className="border-darkBlack" />
              <div className="border-yellow" />
              <div className="border-red" />
            </div>
          </div>
        </div>
        <div className="md:hidden block leading-box-container">
          <div
            className={`leading-container grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16`}
          >
            {CONDUCEREA_DATA.map((section, index) => (
              <>
                <div
                  className={`w-full`}
                  key={index}
                  // id={`sectionContent-small-${index}`}
                >
                  <SectionBox
                    index={index + 1}
                    title={section.title}
                    description={section.description}
                    isActive={activeSection === index}
                    onClick={() => (
                      handleSectionClick1(index), handleSectionClick(index)
                    )}
                  />
                  {activeSection === index && (
                    <>
                      <div
                        className="sm:hidden"
                        id={`sectionContent-small-${index}`}
                      >
                        <SectionContent content={section.content} />
                      </div>
                      <div className="fixed z-50">
                        <BackScrollButton
                          onClick={() =>
                            handleBackClickFromChild(activeSection)
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
              </>
            ))}
            <BackScrollButton />
          </div>
        </div>
        <div className="hidden md:block leading-box-container">
          <div
            className={`leading-container grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16`}
          >
            {CONDUCEREA_DATA.map((section, index) => (
              <>
                <div className={`w-full`} key={index}>
                  <SectionBox
                    index={index + 1}
                    title={section.title}
                    description={section.description}
                    isActive={activeSection === index}
                    onClick={() => (
                      handleSectionClick2(index), handleSectionClick(index)
                    )}
                  />
                </div>
              </>
            ))}
            <BackScrollButton />
          </div>
          {activeSection !== null && (
            <div
              className="hidden sm:block mt-8"
              id={`sectionContent-${activeSection}`}
            >
              <SectionContent
                content={CONDUCEREA_DATA[activeSection].content}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section3;
