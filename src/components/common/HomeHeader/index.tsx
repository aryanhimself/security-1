import React from "react";
import classes from "./header.module.css";
import Image from "next/image";
import NavItem from "@/components/ui/NavItem";
import PageHeader from "./PageHeader";
import Logo from "../../../../public/images/logo.png";
import Link from "next/link";

const navItem = [
  {
    // CHANGE AFLĂ to DESCOPERĂ
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

const HomeHeader = ({
  currentSection,
  scrolled,
  isJoburiPage
}: {
  currentSection: string;
  scrolled?: boolean;
  isJoburiPage?: boolean;
}) => {
  return (
    <div>
      {/* Sticky top bar for mobile and tablet */}
      {isJoburiPage && (
        <div className={`${classes.mobileSticky} lg:hidden ${scrolled ? 'bg-black/80 backdrop-blur-sm' : ''}`}>
          <div className="container-sm px-4">
            <div className="flex items-center justify-between">
              <Link href={"/"} className="-ml-[0.938rem]">
                <Image
                  src={Logo}
                  width={scrolled ? 80 : 124}
                  height={scrolled ? 80 : 124}
                  alt="logo image"
                  className="transition-all duration-300"
                />
              </Link>
              <div className="order-2">
                <PageHeader scrolled={scrolled} isJoburiPage={true} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main header */}
      <header className={`${classes.header} ${scrolled ? 'bg-black/80 backdrop-blur-sm' : ''}`}>
        <div className="h-full max-w-[1150px] m-auto py-4">
          <div className="container-sm md:px-4">
            <nav className="flex md:px-7 flex-wrap w-full items-center gap-5 justify-between md:justify-start">
              {/* Desktop logo and nav */}
              <Link
                href={"/"}
                className={`-ml-[0.938rem] ${isJoburiPage ? 'hidden lg:block' : ''}`}
              >
                <Image
                  src={Logo}
                  width={scrolled ? 80 : 124}
                  height={scrolled ? 80 : 124}
                  alt="logo image"
                  className="transition-all duration-300"
                />
              </Link>
              <div className="hidden lg:flex order-3 lg:order-2 w-full lg:w-auto flex-col lg:flex-row justify-between gap-5 mt-10 lg:mt-0">
                {navItem.map((item) => (
                  <div key={item.id} className="w-fit mx-auto">
                    <NavItem
                      item={item}
                      currentSection={currentSection}
                      offset="150"
                    />
                  </div>
                ))}
              </div>

              {/* Mobile and tablet nav items */}
              <div className={`flex lg:!hidden order-3 lg:order-2 w-full lg:w-auto flex-col lg:flex-row justify-between gap-5 ${isJoburiPage ? 'mt-[100px]' : 'mt-10'} lg:mt-0`}>
                {navItem.map((item) => (
                  <div key={item.id} className="w-fit mx-auto">
                    <NavItem
                      item={item}
                      currentSection={currentSection}
                      offset="0"
                    />
                  </div>
                ))}
              </div>

              {/* Desktop menu button */}
              <div className={`mt-0 lg:mt-[-1.4rem] order-2 lg:order-3 ${isJoburiPage ? 'hidden lg:block' : ''}`}>
                <PageHeader scrolled={scrolled} isJoburiPage={isJoburiPage} />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeHeader;
