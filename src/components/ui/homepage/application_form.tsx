import React from "react";
import "./application_form.css";
import VideoPlayer from "../../common/Videoplayer";
import HorizontalLine from "@/components/common/HorizontalLine";
import SectionButton from "@/components/common/SectionButton";
export const APPLICATION_FORM = {
  sectionId: "application__section",
  title: "APLICĂ",
  subTitle: "Formularul de aplicare",
  heading:
    "Completează formularul de aplicare și pune-ți la lucru calitățile unice!",
  videoUrl: "/video/cariere_5/output.m3u8",
  posterUrl: "/images/thumbnails/Completeaza.webp",
  buttonId: "#section-12",
  buttonContent: "Formular de aplicare",
};
const ApplicationForm = () => {
  const {
    buttonContent,
    buttonId,
    heading,
    posterUrl,
    subTitle,
    title,
    videoUrl,
    sectionId,
  } = APPLICATION_FORM;
  const ref = React.useRef<HTMLElement>(null);
  return (
    <section
      ref={ref}
      className="application__section unique__feature__section offer__section padding__style"
      id={sectionId}
    >
      <div className="container">
        <div className="application__section__content unique__feature__section__content offer__section__content fifth__section__content flex flex__col item-center">
          <HorizontalLine heading={title} subHeading={subTitle} />

          <h2 className="">{heading}</h2>
          <div className="large__video__container">
            <VideoPlayer poster={posterUrl} url={videoUrl} />
          </div>
          <SectionButton
            element={ref.current!}
            href={buttonId}
            name={buttonContent}
            id="#section-9"
            offset="0"
          />
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
