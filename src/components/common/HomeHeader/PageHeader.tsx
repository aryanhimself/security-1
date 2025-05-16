"use client";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import classes from "./header.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import useWindowSize from "@/hooks/useWindowSize";

const pageNavItem = [
  {
    label: "HOMEPAGE",
    link: "/",
    isHomePage: false,
  },
  {
    label: "CARIERE",
    link: "/joburi",
    isHomePage: false,
    toScroll: "/joburi?scrollTo=section-1&offset=110",
  },
  {
    label: "SESIZĂRI",
    link: "/sesizari",
    isHomePage: false,
  },

  {
    label: "DESPRE NOI",
    link: "/despre-noi",
    isHomePage: false,
  },
  {
    label: "NOUTĂȚI",
    link: "/noutati",
    isHomePage: false,
  },
  {
    label: "FAQ",
    isHomePage: true,
    link: "/joburi?scrollTo=section-11&offset=110",
    redirectLink: "/",
    toScroll: "/joburi?scrollTo=section-11&offset=110",
  },
];

const PageHeader = ({ isWhite = false }: { isWhite?: boolean }) => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { width } = useWindowSize();

  useEffect(() => {
    if (showMenu) {
      // Disable background scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable background scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  const navigateAndScroll = (url: string) => {
    router.push(url);
  };

  const isMobile = width <= 768;

  return (
    <div className="order-2 lg:order-3">
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={`flex flex-row px-5 h-[38px]  items-center gap-1 cursor-pointer bg-[rgba(24,45,79,0.80)]`}
        onClick={() => setShowMenu(true)}
      >
        <p className={`text-white`}>Meniu</p>
        <Menu color={`#fff`} size={30} />
      </div>
      <div>
        <div
          className={`${classes.menuContainer} ${
            showMenu ? classes.menuOpen : ""
          } overflow-scroll pb-2`}
        >
          <div className={`container-sm`}>
            <div
              className={`flex flex-row justify-between ${
                pathname === "/test"
                  ? "pt-[2.3rem] "
                  : "md:pt-[6.9rem] pt-[4rem]"
              }`}
            >
              <div></div>
              <div
                className={`${
                  pathname === "/test" ? "mr-[22px] md:mr-0" : "mr-[22px]"
                }  cursor-pointer `}
              >
                <X color="#fff" size={24} onClick={() => setShowMenu(false)} />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:mt-16 mt-2">
            <div className="flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={() => (
                  navigateAndScroll("/joburi?scrollTo=Oferta-de-joburi"),
                  setShowMenu(false)
                )}
                className="bg-secondary w-[171px] h-[60px] border-solid border-[primary] border-2 rounded-[1px] text-[22px] font-bold text-primary"
              >
                JOBURI
              </button>

              <p className="text-[14px] font-semibold">Disponibile ACUM!</p>
            </div>
            {pageNavItem.map((item, i) =>
              item.isHomePage ? (
                item.toScroll && (
                  <button
                    type="button"
                    className={`bg-[#e0e0e0] w-[171px] h-[60px] border-solid border-2 rounded-[1px] border-white text-[22px] font-bold text-primary hover:bg-secondary ${
                      pathname === item.link && "text-white bg-blue-500"
                    }`}
                    onClick={() => (
                      navigateAndScroll(isMobile ? item.toScroll : item.link),
                      setShowMenu(false)
                    )}
                  >
                    {item.label}
                  </button>
                )
              ) : item.toScroll ? (
                <button
                  type="button"
                  className={`bg-[#e0e0e0] w-[171px] h-[60px] border-solid border-2 rounded-[1px] border-white text-[22px] font-bold text-primary hover:bg-secondary ${
                    pathname === item.link && "text-white bg-blue-500"
                  }`}
                  onClick={() => (
                    navigateAndScroll(isMobile ? item.toScroll : item.link),
                    setShowMenu(false)
                  )}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={`${item.link}_${i}`}
                  href={item.link}
                  onClick={() => setShowMenu(false)}
                >
                  <button
                    type="button"
                    className={`bg-[#e0e0e0] w-[171px] h-[60px] border-solid border-2 rounded-[1px] border-white text-[22px] font-bold text-primary hover:bg-secondary ${
                      pathname === item.link && "text-white bg-blue-500"
                    }`}
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
  );
};

export default PageHeader;
