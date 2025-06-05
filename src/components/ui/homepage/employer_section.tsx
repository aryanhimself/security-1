import React from "react";
import "./employer_section.css";
import VideoPlayer from "../../common/Videoplayer";
import HorizontalLine from "@/components/common/HorizontalLine";
import SectionButton from "@/components/common/SectionButton";
import { EMPLOYER_SECTION } from "@/config/data";
const EmployerSection = () => {
  const {
    sectionHref,
    sectionId,
    sectionName,
    sectionTitle,
    videoPoster,
    videoUrl,
  } = EMPLOYER_SECTION;
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <section
      ref={ref}
      className="employer__section padding__style"
      id={sectionId}
    >
      <div className="container">
        <div className="unique__feature__section__content flex flex-col items-center gap-9">
          <HorizontalLine
            heading={"DESCOPERĂ"}
            subHeading={"Lucrează la SIE"}
          />
          <h2 className="!text-base sm:!text-2xl">{sectionTitle}</h2>
          <div className="large__video__container">
            <VideoPlayer url={videoUrl} poster={videoPoster} />
          </div>
          <SectionButton
            element={ref.current!}
            href={sectionHref}
            name={sectionName}
            id="#section-2"
            offset="0"
          />
        </div>
      </div>
    </section>
  );
};

export default EmployerSection;
