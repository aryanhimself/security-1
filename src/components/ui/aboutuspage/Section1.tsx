"use client";
import Image from "next/image";
import type React from "react";
import logo from "../../../../public/images/logo.png";
import "./Section1.css";
import PageHeader from "@/components/common/HomeHeader/PageHeader";
import Link from "next/link";
import { FOREIGN_INTELLIGENCE_SECTION } from "@/config/data";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="aboutus-home pt-[1rem] md:pt-[3.125rem]">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : ''}`}>
        <div className="container-sm">
          <div className="header-container py-2 md:py-4">
            <div className="flex flex-row items-center justify-between">
              <Link href={"/"} className={`-ml-[2.5rem] hidden md:flex transition-all duration-300 ${scrolled ? 'scale-75 -ml-[1.5rem]' : ''}`}>
                <Image
                  src={logo}
                  width={scrolled ? 80 : 160}
                  height={scrolled ? 80 : 160}
                  alt="logo image"
                  className="transition-all duration-300"
                />
              </Link>
              <Link href={"/"} className={`-ml-[0.5rem] md:hidden transition-all duration-300 ${scrolled ? 'scale-75 -ml-[0.25rem]' : ''}`}>
                <Image
                  src={logo}
                  width={scrolled ? 70 : 124}
                  height={scrolled ? 70 : 124}
                  alt="logo image"
                  className="transition-all duration-300"
                />
              </Link>
              <PageHeader isWhite={true} scrolled={scrolled} />
            </div>
          </div>
        </div>
      </header>
      <div className={`container-sm mt-[140px] sm:mt-[140px] md:mt-[160px] ${scrolled ? 'mt-[120px] sm:mt-[100px] md:mt-[120px]' : ''}`}>
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
            className={`mission-container-box-click  ${activeBox === index ? `` : `mission-box-${index + 1}-click`
              }`}
          >
            <h2
              className={`mission-box-title-click title-${index + 1} ${activeBox === index ? `hidden` : `block`
                }`}
            >
              {box.title}
            </h2>
            <p
              className={`mission-box-content-click content-${index + 1} ${activeBox === index ? `block` : `hidden`
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
