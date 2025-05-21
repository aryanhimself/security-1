"use client";
import JoburiHeader from "@/components/common/JoburiHeader";
import UniqueFeature from "@/components/ui/homepage/unique_feature";
import EmployerSection from "@/components/ui/homepage/employer_section";
import LifeSection from "@/components/ui/homepage/life_section";

import OpportunitiesSection from "@/components/ui/homepage/opportunities_section";
import OfferSection from "@/components/ui/homepage/offer_section";
import CareerSection from "@/components/ui/homepage/career_section";
import InternshipSection from "@/components/ui/homepage/internship_section";
import ApplicationSection from "@/components/ui/homepage/application_form";
import JobOfferSection from "@/components/ui/homepage/job_offer";
import QuestionSection from "@/components/ui/homepage/question-section";
import ApplicationSectionForm from "@/components/ui/homepage/application_section_form";
import AskSection from "@/components/ui/homepage/ask_section";
import EmployeeConditionSection from "@/components/ui/homepage/employment_condition";

import { useEffect, useRef, useState } from "react";


import ScrollButton from "@/components/common/ScrollButton";
import { useSearchParams } from "next/navigation";
import useWindowSize from "@/hooks/useWindowSize";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import { getLoginStatus } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const [currentSection, setCurrentSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { width } = useWindowSize();
  const router = useRouter();

  useAuthRedirect(getLoginStatus);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useEffect(() => {
  //   const scrollToSection = () => {
  //     const params = new URLSearchParams(location.search);
  //     const sectionId = searchParams.get("scrollTo");
  //     const offsetValue = parseInt(params.get("offset") || "0", 10);
  //     const isMobile = width <= 768;

  //     const offset = isMobile ? 0 : offsetValue ? offsetValue : 0; // Adjust this value to your desired offset

  //     if (sectionId) {
  //       const targetElement = document.getElementById(sectionId);
  //       if (targetElement) {
  //         // Calculate the top position with offset
  //         const elementPosition =
  //           targetElement.getBoundingClientRect().top + window.scrollY;
  //         const offsetPosition = elementPosition ;

  //         window.scrollTo({
  //           top: offsetPosition,
  //           behavior: "smooth",
  //         });
  //         setCurrentSection(sectionId);

  //         setTimeout(() => {
  //           window.history.replaceState(null, "", "/joburi");
  //         }, 100);
  //       }
  //     }
  //   };

  //   scrollToSection();
  // }, [searchParams]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        }
      },
      {
        root: null,
        threshold: 70 / 100, // 20% of the div should be in view to be considered "active"
      } // 60% of the div should be in view to be considered "active"
    );

    for (const section of sectionRefs.current) {

      if (section) observer.observe(section);
    }

    return () => {
      for (const section of sectionRefs.current) {
        if (section) observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div className="">
      <JoburiHeader currentSection={currentSection} scrolled={scrolled} />

      <div
        id="section-1"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <UniqueFeature />
      </div>
      <div className="h-5 bg-white" />
      <div
        id="section-2"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
      >
        <EmployerSection />
      </div>
      <div className="h-5 bg-white" />
      <div
        id="section-3"
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
      >
        <LifeSection />
      </div>
      <div className="h-5 bg-white" />
      <div
        id="section-4"
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
      >
        <OpportunitiesSection />
      </div>
      <div className="h-5 bg-white" />
      <div
        id="section-5"
        ref={(el) => {
          sectionRefs.current[4] = el;
        }}
      >
        <OfferSection />
      </div>
      <div className="h-5 bg-white" />
      <div
        id="section-6"
        ref={(el) => {
          sectionRefs.current[5] = el;
        }}
      >
        <CareerSection />
      </div>
      <div className="h-5 bg-white" />
      <div
        id="section-7"
        ref={(el) => {
          sectionRefs.current[6] = el;
        }}
      >
        <InternshipSection />
      </div>
      <div className="h-5 bg-white" />
      {/* <div
        id="section-8"
        ref={(el) => {
          sectionRefs.current[7] = el;
        }}
      >
        <TestSection />
      </div> */}
      <div className="h-5 bg-white" />
      <div
        id="section-9"
        ref={(el) => {
          sectionRefs.current[8] = el;
        }}
      >
        <ApplicationSection />
      </div>
      <div className="h-5 bg-white" />
      <div
        id="section-10"
        ref={(el) => {
          sectionRefs.current[9] = el;
        }}
      >
        <JobOfferSection />
      </div>
      <div className="h-5 bg-white" />
      <div
        id="section-11"
        ref={(el) => {
          sectionRefs.current[10] = el;
        }}
      >
        <QuestionSection />
      </div>
      <div className="h-5 bg-white" />
      <div
        id="section-12"
        ref={(el) => {
          sectionRefs.current[11] = el;
        }}
      >
        <ApplicationSectionForm />
      </div>
      <div className="h-5 bg-white" />
      <div
        id="section-13"
        ref={(el) => {
          sectionRefs.current[12] = el;
        }}
      >
        <AskSection />
      </div>
      <div className="h-5 bg-white" />
      <div
        id="section-14"
        ref={(el) => {
          sectionRefs.current[13] = el;
        }}
      >
        <EmployeeConditionSection />
      </div>
      {Number(currentSection.split("-")[1]) >= 3 && <ScrollButton />}
    </div>
  );
}
