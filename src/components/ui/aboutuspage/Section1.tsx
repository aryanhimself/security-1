"use client";
import Image from "next/image";
import type React from "react";
import logo from "../../../../public/images/logo.png";
import "./Section1.css";
import PageHeader from "@/components/common/HomeHeader/PageHeader";
import Link from "next/link";
import { FOREIGN_INTELLIGENCE_SECTION } from "@/config/data";
import { useState } from "react";
import { poppins } from "@/app/fonts";

interface MissionBox {
  title: string;
  content: string;
}

interface MissionSectionProps {
  title: string;
  content: string;
  boxes: MissionBox[];
}

const Section1 = () => {
  const { title, description, mission, valori } = FOREIGN_INTELLIGENCE_SECTION;
  return (
    <div className="aboutus-home pt-[1rem] md:pt-[3.125rem]">
      <header className="aboutus-header">
        <div className="container-sm">
          <div className="header-container">
            <div className="flex flex-row items-center justify-between">
              <Link href={"/"} className="-ml-[3.938rem] hidden md:flex">
                <Image src={logo} width={160} height={160} alt="logo image" />
              </Link>
              <Link href={"/"} className="-ml-[0.938rem] md:hidden">
                <Image src={logo} width={124} height={124} alt="logo image" />
              </Link>
              <PageHeader isWhite={true} />
            </div>
          </div>
        </div>
      </header>
      <div className="container-sm">
        <div className="flex flex-col gap-3 items-start">
          <div className="aboutus-text-content">
            <h1 className={poppins.className}>{title}</h1>
            <p>{description}</p>
          </div>
        </div>

        <MissionSection
          title={mission.title}
          content={mission.description}
          boxes={mission.missionLists}
        />

        <MissionSection
          title={valori.title}
          content={valori.description}
          boxes={valori.valoriLists}
        />
      </div>
    </div>
  );
};

const MissionSection: React.FC<MissionSectionProps> = ({
  title,
  content,
  boxes,
}) => {
  const [activeBox, setActiveBox] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveBox(activeBox === index ? null : index);
  };
  return (
    <div className="mission-section">
      <div className="flex flex-col gap-2">
        <h1 className={`mission-section-title ${poppins.className}`}>
          {title}
        </h1>
        <p className="mission-section-content">{content}</p>
      </div>
      <div className="mission-container grid flex-row gap-6 md:hidden">
        {boxes.map((box, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={`mission-container-box-click  ${
              activeBox === index ? `` : `mission-box-${index + 1}-click`
            }`}
          >
            <h2
              className={`mission-box-title-click title-${index + 1} ${
                activeBox === index ? `hidden` : `block`
              }`}
            >
              {box.title}
            </h2>
            <p
              className={`mission-box-content-click content-${index + 1} ${
                activeBox === index ? `block` : `hidden`
              }`}
            >
              {box.content}
            </p>
          </div>
        ))}
      </div>
      <div className="hidden md:flex mission-container flex-row gap-6 ">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`mission-container-box mission-box-${index + 1}`}
          >
            <h2 className={`mission-box-title title-${index + 1}`}>
              {box.title}
            </h2>
            <p className={`mission-box-content content-${index + 1}`}>
              {box.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
