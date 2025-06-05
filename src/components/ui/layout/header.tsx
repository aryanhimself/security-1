"use client";
import PageHeader from "@/components/common/HomeHeader/PageHeader";
import uselayout from "@/hooks/useLayout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const { isScrolled, setIsScrolled, headerHeight } = uselayout();
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setIsScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[${headerHeight}rem] transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : ""
      }`}
      style={{
        height: headerHeight + "rem",
      }}
    >
      {!isScrolled && <div className="h-2 md:h-5 w-full"></div>}
      <div className="container pl-[1.5rem] pr-[0.6rem] h-full">
        <div className="header-container justify-center my-auto h-full">
          <div className="flex flex-row items-center justify-between content-center h-full">
            <Link
              href={"/"}
              className={`transition-all  duration-300 flex align-center`}
            >
              <Image
                src={"/images/logo.png"}
                alt="logo image"
                width={200}
                height={60}
                className={`transition-all duration-300`}
                style={{
                  maxHeight: `${headerHeight - 1}rem`,
                  width: "auto",
                  height: "auto",
                }}
                priority
              />
            </Link>
            <PageHeader isWhite={true} scrolled={isScrolled} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
