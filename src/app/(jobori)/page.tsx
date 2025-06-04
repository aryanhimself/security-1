"use client";
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
import ScrollButton from "@/components/common/ScrollButton";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import { getLoginStatus } from "@/lib/utils";
import HomePage from "../(Home)/HomePage";
import Spacer from "@/components/ui/homepage/spacer";
import Footer from "@/components/common/Footer";
import { useEffect, useState } from "react";


const sections = [
  UniqueFeature,
  EmployerSection,
  LifeSection,
  OpportunitiesSection,
  OfferSection,
  CareerSection,
  InternshipSection,
  ApplicationSection,
  JobOfferSection,
  QuestionSection,
  ApplicationSectionForm,
  AskSection,
  EmployeeConditionSection
]


const renderSection = () => {
  return sections.map((Section, i) => (
    <>
      <div
        id={`section-${i + 1}`}
      >
        <Section />
      </div>
      <Spacer />
    </>
  ))
}

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 1.5; // 150vh
      setShowButton(scrollY >= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useAuthRedirect(getLoginStatus);
  return (
    <>
      <HomePage />
      {renderSection()}
      {showButton&& <ScrollButton />}
      <Footer />
    </>
  );
}
