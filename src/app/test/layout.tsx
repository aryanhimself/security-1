import Image from "next/image";
import Link from "next/link";
import React, { type FC, type PropsWithChildren } from "react";
import logo from "../../../public/images/logo.png";
import classes from "./test-layout.module.css";
import PageHeader from "@/components/common/HomeHeader/PageHeader";

const navItem = [
  {
    title: "AFLĂ",
    label: "SIE ca loc de muncă!",
    id: "AFLĂ",
    link: "section-1",
  },
  {
    title: "ALEGE",
    label: "Oportunițăti angajare!",
    id: "ALEGE",
    link: "section-4",
  },
  {
    title: "APLICĂ",
    label: "Pentru un job unic!",
    id: "APLICA",
    link: "section-9",
  },
  {
    title: "JOBURI",
    label: "Disponibile ACUM!",
    id: "JOBURI",
    link: "section-10",
  },
  {
    title: "ÎNTREABĂ",
    label: "Intreaba",
    id: "Intreaba",
    link: "section-13",
  },
];

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div>
        <header className={classes.header}>
          <div className="h-full max-w-[1150px] m-auto py-4">
            <nav
              className={`flex px-10 flex-wrap justify-between w-full items-center`}
            >
              <Link className="order-1  shrink-0" href={"/"}>
                <Image alt="Logo" height={65} width={100} src={logo} />
              </Link>
              <div className="order-3 lg:order-2 w-full lg:w-auto flex flex-col lg:flex-row justify-between gap-5 mt-10 md:mt-0">
                {navItem.map((item) => (
                  <div key={item.id} className="w-fit mx-auto">
                    <Link key={item.link} href={`/joburi#${item.link}`}>
                      <div
                        key={item.id}
                        className={classes.navItem}
                        id={`${item.id}_Button`}
                      >
                        <p
                          className={`${classes.navLink} 
                            }`}
                          id={item.id}
                        >
                          {item.title}
                        </p>
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="-mt-6 order-2 lg:order-3">
                <PageHeader />
              </div>
            </nav>
          </div>
        </header>
      </div>
      {children}
    </>
  );
};

export default Layout;
