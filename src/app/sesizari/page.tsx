import Footer from "@/components/common/Footer";
import React from "react";
import "./referral.css";
import "./application.css";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import PageHeader from "@/components/common/HomeHeader/PageHeader";
import type { Metadata } from "next";

import SesizariForm from "./sesizari-form";
import Link from "next/link";
import BackScrollButton from "@/components/common/ScrollButton/BackScrollButton";

export const metadata: Metadata = {
  title: "Sesizări - SIE",
  description: "Sesizări",
};

const page = () => {
  return (
    <div>
      <div className="referral-body">
        <div className="referral-body-container pt-[1rem] md:pt-[3.125rem]">
          <header className="referral-header">
            <div className="container-sm">
              <div className="header-container">
                <div className="flex flex-row items-center justify-between">
                  <Link href={"/"} className="-ml-[3.938rem] hidden md:flex">
                    <Image
                      src={logo}
                      width={160}
                      height={160}
                      alt="logo image"
                    />
                  </Link>
                  <Link href={"/"} className="-ml-[0.938rem] md:hidden">
                    <Image
                      src={logo}
                      width={124}
                      height={124}
                      alt="logo image"
                    />
                  </Link>
                  <PageHeader isWhite={true} />
                </div>
              </div>
            </div>
          </header>
          <div className="container-sm">
            <div className="flex flex-col items-start gap-3 referral-container">
              <div className="hidden md:block referral-text-content">
                <h2 className="text-2xl font-bold sm:text-4xl">
                  UN SERVICIU DE ELITĂ, EFICIENT <br /> ŞI DINAMIC,
                </h2>
                <p className="!text-[16px] sm:text-lg">
                  cu o atitudine proactivă, redutabil în <br /> confruntarea cu
                  provocările contextului extern <br /> în care funcţionează
                </p>
              </div>
              <div className=" md:hidden referral-text-content">
                <h2 className="text-2xl font-bold sm:text-4xl">
                  UN SERVICIU DE ELITĂ, EFICIENT ŞI DINAMIC,
                </h2>
                <p className="!text-[16px] sm:text-lg">
                  cu o atitudine proactivă, redutabil în confruntarea cu
                  provocările contextului extern în care funcţionează
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="notification-container mx-4 -mt-24">
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

        <Footer />
      </div>
      <BackScrollButton />
    </div>
  );
};

export default page;
