import react, { useEffect, useRef, useState } from "react";
import {
  HomeAccordion,
  HomeAccordionContent,
  HomeAccordionItem,
  HomeAccordionTrigger,
} from "../home-accordion";
import ReactMarkdown from "react-markdown";
import SectionButton from "@/components/common/SectionButton";

export const JobOfferAccordion = (item: { title: string; data: string }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const accordionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (openItem === item.title && accordionRef.current) {
      const offset = 95; // change this to whatever offset you need
      const elementTop =
        accordionRef.current.getBoundingClientRect().top + window.pageYOffset;
      const scrollTo = elementTop - offset;

      window.scrollTo({
        top: scrollTo,
        behavior: "smooth",
      });
    }
  }, [openItem]);
  const id = item.title.replace(/\s+/g, "-").toLowerCase();
  return (
    <div key={item.title} className="my-3" id={id}>
      <HomeAccordion onValueChange={setOpenItem} type="single" collapsible>
        <HomeAccordionItem value={item.title} ref={accordionRef}>
          <HomeAccordionTrigger>
            <p className="text-lg md:text-[22px] font-bold">{item.title}</p>
          </HomeAccordionTrigger>
          <HomeAccordionContent>
            <div className="joboffer__markdown text-justify">
              <ReactMarkdown
                components={{
                  li: ({ node, children, ...props }) => {
                    return (
                      <li {...props}>
                        <p>{children}</p>
                      </li>
                    );
                  },
                }}
              >
                {item.data}
              </ReactMarkdown>
              <div className="career__button__component !mt-8">
                <SectionButton
                  element={accordionRef.current!}
                  href="#section-11"
                  name="Aplică"
                  id={id}
                  offset="0"
                />
              </div>
            </div>
          </HomeAccordionContent>
        </HomeAccordionItem>
      </HomeAccordion>
    </div>
  );
};
