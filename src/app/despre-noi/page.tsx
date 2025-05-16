import React from "react";
import "./aboutus.css";
import Footer from "@/components/common/Footer";
import Section1 from "@/components/ui/aboutuspage/Section1";
import Section2 from "@/components/ui/aboutuspage/Section2";
import Section3 from "@/components/ui/aboutuspage/Section3";
import Section4 from "@/components/ui/aboutuspage/Section4";
import Section5 from "@/components/ui/aboutuspage/Section5";
import Section6 from "@/components/ui/aboutuspage/Section6";
import type { Metadata } from "next";
import Section8 from "@/components/ui/aboutuspage/Section8";
import BackScrollButton from "@/components/common/ScrollButton/BackScrollButton";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import { getLoginStatus } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Despre noi - SIE",
  description: "Serviciul  de  Informaţii  Externe  (SIE)",
};

const page = () => {
  return (
    <div>
      <Section1 />
      <div className="h-5 bg-white" />
      <Section2 />
      <div className="h-5 bg-white" />
      <Section3 />
      <div className="h-5 bg-white" />
      <Section4 />
      <Section5 />
      <div className="h-5 bg-white" />
      <Section6 />
      <Section8 />
      <Footer />
    </div>
  );
};

export default page;
