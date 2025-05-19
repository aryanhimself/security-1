"use client";
import React, { useEffect, useState } from "react";
import classes from "./joburiHeader.module.css";
import Image from "next/image";
import NavItem from "@/components/ui/NavItem";
import PageHeader from "../HomeHeader/PageHeader";
import Logo from "../../../../public/images/logo.png";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";

const navItem = [
  {
    title: "DESCOPERĂ",
    label: "SIE ca loc de muncă!",
    id: "AFLĂ",
    link: "section-1",
    highlightLink: ["section-1", "section-2", "section-3"],
  },
  {
    title: "DECIDE",
    label: "Oportunițăti angajare!",
    id: "ALEGE",
    link: "section-4",
    highlightLink: ["section-4", "section-5", "section-6", "section-7"],
  },
  {
    title: "APLICĂ",
    label: "Pentru un job unic!",
    id: "APLICA",
    link: "section-9",
    highlightLink: ["section-9"],
  },
  {
    title: "JOBURI",
    label: "Disponibile ACUM!",
    id: "JOBURI",
    link: "section-10",
    highlightLink: ["section-10", "section-11", "section-12"],
  },
  {
    title: "ÎNTREABĂ",
    label: " Întreabă orice!",
    id: "Intreaba",
    link: "section-13",
    highlightLink: ["section-13", "section-14"],
  },
];

const JoburiHeader = ({
  currentSection,
  scrolled,
}: {
  currentSection: string;
  scrolled?: boolean;
}) => {
  const { width } = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Update desktop state based on window width
  useEffect(() => {
    setIsDesktop(width >= 1024); // 1024px is typically the 'lg' breakpoint in Tailwind
  }, [width]);
  
  return (
    <div>

      {/* Mobile header */}
      {!isDesktop && (
        <div className={classes.mobileHeaderContainer}>
          {/* Sticky top bar for mobile and tablet */}
          <div className={`${classes.mobileSticky} ${scrolled ? 'bg-black/80 backdrop-blur-sm' : ''}`}>
            <div className="container-sm px-4 h-full">
              <div className="flex items-center justify-between h-full">
                <Link href={"/"} className={`${classes.logoContainer} ${scrolled ? classes.logoContainerScrolled : ''}`}>

                  <Image
                    src={Logo}
                    width={scrolled ? 60 : 80}
                    height={scrolled ? 60 : 80}
                    alt="logo image"
                    className="transition-all duration-300 object-contain"
                  />
                </Link>
                <div className="order-2 flex items-center">
                  <PageHeader scrolled={scrolled} isJoburiPage={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile navigation items */}
          <div className={classes.mobileNavContainer}>
            <div className="flex flex-col items-center justify-center gap-4 pt-2">
              {navItem.map((item) => (
                <div key={item.id} className="w-fit mx-auto">
                  <NavItem
                    item={item}
                    currentSection={currentSection}
                    offset="100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop header */}
      {isDesktop && (
        <header className={`${classes.header} ${scrolled ? 'bg-black/80 backdrop-blur-sm' : ''}`}>
          <div className="h-full max-w-[1150px] m-auto py-4">
            <div className="container-sm md:px-4 h-full">
              <nav className="flex md:px-7 flex-wrap w-full items-center gap-5 justify-between md:justify-start h-full">
                {/* Desktop logo */}
                <Link
                  href={"/"}
                  className={`${classes.logoContainer} ${scrolled ? classes.logoContainerScrolled : ''}`}
                >
                  <Image
                    src={Logo}
                    width={scrolled ? 70 : 90}
                    height={scrolled ? 70 : 90}
                    alt="logo image"
                    className="transition-all duration-300 object-contain"
                  />
                </Link>
                
                {/* Desktop nav items */}
                <div className="order-3 lg:order-2 w-full lg:w-auto flex-col lg:flex-row justify-between gap-5 mt-2 lg:mt-0 flex">
                  {navItem.map((item) => (
                    <div key={item.id} className="w-fit mx-auto">
                      <NavItem
                        item={item}
                        currentSection={currentSection}
                        offset="100"
                      />
                    </div>
                  ))}
                </div>

                {/* Desktop menu button */}
                <div className="mt-0 order-2 lg:order-3 flex items-center">
                  <PageHeader scrolled={scrolled} isJoburiPage={true} />
                </div>
              </nav>
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default JoburiHeader;
