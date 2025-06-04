"use client";

import Footer from "@/components/common/Footer";
import React, { useEffect, useState } from "react";
import "./referral.css";
import "./application.css";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import PageHeader from "@/components/common/HomeHeader/PageHeader";
import SesizariForm from "./sesizari-form";
import Link from "next/link";
import BackScrollButton from "@/components/common/ScrollButton/BackScrollButton";
import useWindowSize from "@/hooks/useWindowSize";
import HeaderSpacing from "@/components/common/header-spacing";

const page = () => {

  return (
    <div>
   
      <div className="job-body">
        {/* Hero Section */}
        <div className="job-body-container-wrapper ">

        <HeaderSpacing />
        <div className="job-body-container mt-7 h-[516px]">

          <div className="container-sm ">
              <div className="flex flex-col" style={{
                alignItems: "start",
                gap: "40px",
              }}>
                <div className="max-w-[26.25rem] flex flex-col gap-4">
                  <h2 className="text-[1.5rem] sm:text-[2.25rem] leading-9 font-semibold text-white">
                    UN SERVICIU DE ELITĂ, EFICIENT <br /> ŞI DINAMIC,
                  </h2>
                  <p className="text-[0.875rem] sm:text-[1.125rem] font-medium text-white">
                    cu o atitudine proactivă, redutabil în <br /> confruntarea cu
                    provocările contextului extern <br /> în care funcţionează
                  </p>
                </div>
              </div>
          </div>
        </div>
        </div>

        {/* Form Section */}
        <div className="mt-[-15rem] z-50">
          <div className="notification-container mx-4 -mt-24 relative z-20">


            <div className="notification-box application__form relative">

              <p className="px-4 md:px-0">
                Dacă doriţi să ne sesizaţi o situaţie pe care o apreciaţi, în
                limitele prevederilor legale, ca fiind din domeniul de competenţă
                al Serviciului de Informaţii Externe, vă rugăm să folosiţi
                formularul alăturat. Vă asigurăm de confidenţialitatea mesajului
                dumneavoastră.
              </p>
              <SesizariForm />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default page;
