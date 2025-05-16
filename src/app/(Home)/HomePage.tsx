"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import PageHeader from "@/components/common/HomeHeader/PageHeader";
import { useRouter } from "next/navigation";
import BackScrollButton from "@/components/common/ScrollButton/BackScrollButton";
import { HOMEPAGE } from "@/config/data";
import useWindowSize from "@/hooks/useWindowSize";
import { poppins } from "../fonts";
import { getLoginStatus } from "@/lib/utils";
import useAuthRedirect from "@/hooks/useAuthRedirect";

const pageNavItem = [
  {
    label: "DESPRE NOI",
    link: "/despre-noi",
    isHomePage: false,
  },
  {
    label: "Noutăți",
    link: "/noutati",
    isHomePage: false,
  },
  {
    label: "SESIZĂRI",
    link: "/sesizari",
    isHomePage: false,
  },

  {
    label: "FAQ",
    link: "/joburi#section-11",
    isHomePage: true,
  },
];

const HomePage = () => {
  const router = useRouter();
  const { width, height } = useWindowSize();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateAndScroll = (url: string) => {
    router.push(url);
  };

  const isMobile = width <= 768;
  useAuthRedirect(getLoginStatus);

  return (
    <div>
      <div className="job-body">
        <div className={`job-body-container pt-[1rem] md:pt-[3.125rem] relative ${height > 782 ? (width > 640 ? "h-[90%]" : "h-max") : "h-max"
          } `}>
          <div className="job-overlay"></div>
          <div className="container-sm relative">
            <header className={`job-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : ''
              }`}>
              <div className="header-container py-2 md:py-4">
                <div className="flex flex-row items-center justify-between">
                  <Link href={"/"} className={`-ml-[2.5rem] hidden md:flex transition-all duration-300 ${scrolled ? 'scale-75 -ml-[1.5rem]' : ''}`}>
                    <Image
                      src={logo}
                      width={scrolled ? 80 : 160}
                      height={scrolled ? 80 : 160}
                      alt="logo with transparent bg"
                      className="transition-all duration-300"
                    />
                  </Link>
                  <Link href={"/"} className={`-ml-[0.5rem] md:hidden transition-all duration-300 ${scrolled ? 'scale-75 -ml-[0.25rem]' : ''}`}>
                    <Image
                      src={logo}
                      width={scrolled ? 70 : 124}
                      height={scrolled ? 70 : 124}
                      alt="logo with transparent bg"
                      className="transition-all duration-300"
                    />
                  </Link>
                  <PageHeader isWhite={true} scrolled={scrolled} />
                </div>
              </div>
            </header>
            <div className={`mt-[100px] md:mt-[140px] ${scrolled ? 'mt-[80px] md:mt-[100px]' : ''}`}>
              <div className="flex flex-col items-center" style={{
                alignItems: "start",
                gap: "40px",
              }}>
                <div className="max-w-[26.25rem] flex flex-col gap-4">
                  <h1 className="hidden md:block text-[1.375rem] font-bold text-white">
                    {HOMEPAGE.title}
                  </h1>
                  <h2
                    className={`text-[1.5rem] sm:text-[2.25rem] leading-9 font-semibold text-white ${poppins.className}`}
                  >
                    {HOMEPAGE.description1}
                  </h2>
                  <p className="text-[0.875rem] sm:text-[1.125rem] font-medium text-white">
                    {HOMEPAGE.description2}
                  </p>
                </div>
                <div className="job-button justify-center sm:justify-start w-full sm:w-fit flex flex-col items-center gap-1">
                  <button
                    type="button"
                    onClick={() =>
                      navigateAndScroll("/joburi?scrollTo=Oferta-de-joburi")
                    }
                    className="h-[3.75rem] w-[10.625rem] font-bold text-[1.375rem] text-primary bg-secondary border-2 border-black border-solid hover:bg-[#e4bb0a]"
                  >
                    JOBURI
                  </button>
                  <span>Disponibile ACUM!</span>
                </div>
                <div className="flex justify-center items-center w-full flex-col sm:flex-row lg:justify-start  mb-7 flex-wrap gap-6">
                  <button
                    type="button"
                    className="h-[3.75rem] w-[10.625rem] font-bold text-[1.375rem] text-primary bg-primary-foreground border-solid border-2 rounded-[1px] border-white opacity-80 hover:bg-white hover:opacity-100 hover:border-2 hover:border-black hover:border-solid"
                    onClick={() =>
                      navigateAndScroll(
                        isMobile ? "/joburi?scrollTo=section-1" : "/joburi"
                      )
                    }
                  >
                    CARIERE
                  </button>
                  {pageNavItem.map((item, i) =>
                    item.isHomePage ? (
                      <button
                        key={i}
                        type="button"
                        className="h-[3.75rem] uppercase w-[10.625rem] font-bold text-[1.375rem] text-primary bg-primary-foreground border-solid border-2 rounded-[1px] border-white opacity-80 hover:bg-white hover:opacity-100 hover:border-2 hover:border-black hover:border-solid"
                        onClick={() =>
                          navigateAndScroll(
                            "/joburi?scrollTo=section-11&offset=110"
                          )
                        }
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link href={item.link} key={item.label}>
                        <button
                          type="button"
                          className="h-[3.75rem] uppercase w-[10.625rem] font-bold text-[1.375rem] text-primary bg-primary-foreground border-solid border-2 rounded-[1px] border-white opacity-80 hover:bg-white hover:opacity-100 hover:border-2 hover:border-black hover:border-solid"
                        >
                          {item.label}
                        </button>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <BackScrollButton />
    </div>
  );
};

export default HomePage;
