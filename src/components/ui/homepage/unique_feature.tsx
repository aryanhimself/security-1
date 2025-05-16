"use client";
import React, { useEffect, useState } from "react";
import "./unique_feature.css";
import VideoPlayer from "../../common/Videoplayer";
import SectionButton from "@/components/common/SectionButton";
import { UNIQUE_FEATURE_SECTION } from "@/config/data";
import HorizontalLine from "@/components/common/HorizontalLine";
const UniqueFeature = () => {
  const {
    sectionHref,
    sectionId,
    sectionName,
    sectionTitle,
    videoPoster,
    videoUrl,
  } = UNIQUE_FEATURE_SECTION;
  return (
    <section
      className="unique__feature__section padding__style lg:mt-28"
      id={sectionId}
    >
      <div className="container">
        <div className="unique__feature__section__content flex flex-col items-center gap-9">
          <HorizontalLine
            heading={"DESCOPERĂ"}
            subHeading={"Lucrează la SIE"}
          />
          <h2 className=" !text-base sm:!text-2xl">{sectionTitle}</h2>
          <div className="large__video__container">
            <VideoPlayer url={videoUrl} poster={videoPoster} />
          </div>
          <SectionButton
            href={sectionHref}
            name={sectionName}
            id="#section-1"
            offset="0"
          />
        </div>
      </div>
    </section>
  );
};

export default UniqueFeature;
