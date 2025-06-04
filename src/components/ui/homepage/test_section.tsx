import React from "react";
import Link from "next/link";
import "./test_section.css";
import HorizontalLine from "@/components/common/HorizontalLine";
import { TEST_DATA } from "@/config/data";
import SectionButton from "@/components/common/SectionButton";

// If loading a variable font, you don't needto specify the font weight

const Section8 = () => {
  const {
    heading,
    subHeading,
    subTitle,
    tests,
    title,
    buttonText,
    buttonHref,
  } = TEST_DATA;
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <section ref={ref} className="test__section padding__style" id="teste">
      <div className="container">
        <div className="test__section__content flex flex__col item-center ">
          <HorizontalLine heading={title} subHeading={subTitle} />
          <div className="flex flex-col gap-3 items-center">
            <h1 className="mt-7">{heading}</h1>
            <h2 className="">{subHeading}</h2>
          </div>
          <div className="flex  gap-6  mt-12 flex-col md:flex-row">
            <div className=" gap-4  items-center flex flex-col  lg:w-auto">
              {[tests[0], tests[1]].map((x) => (
                <Link
                  key={x.category}
                  href={`/test?slug=${x.category}`}
                  className={`${x.color}__test__box test__box w-full lg:w-auto `}
                >
                  <p>{x.title} </p>
                </Link>
              ))}
            </div>
            {/* <div className=" flex items-center w-full lg:w-auto">
              {[tests[2]].map((x) => (
                <Link
                  key={x.category}
                  href={`/test?slug=${x.category}`}
                  className={`${x.color}__test__box test__box w-full lg:w-auto `}
                >
                  <p>{x.title}</p>
                </Link>
              ))}
            </div> */}

            <div className=" flex items-center flex-col gap-4 justify-center w-full lg:w-auto">
              {[tests[2], tests[4]].map((x) => (
                <Link
                  key={x.category}
                  href={`/test?slug=${x.category}`}
                  className={`${x.color}__test__box test__box w-full lg:w-auto flex justify-center`}
                >
                  <p>{x.title}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="employer__section__content">
            <SectionButton
              element={ref.current!}
              href={buttonHref}
              name={buttonText}
              id="#section-8"
              offset="0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
