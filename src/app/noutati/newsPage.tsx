"use client";
import Footer from "@/components/common/Footer";
import React, { useState, useEffect } from "react";
import "./news.css";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import NewsCard from "@/components/common/NewsCard";
import PageHeader from "@/components/common/HomeHeader/PageHeader";
import { mediaData, newsData } from "@/config/data";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Metadata } from "next";
import BackScrollButton from "@/components/common/ScrollButton/BackScrollButton";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import { getLoginStatus } from "@/lib/utils";
import HeaderSpacing from "@/components/common/header-spacing";

const sections = {
  news: "news",
  release: "release",
  accreditation: "accreditation",
  notice: "notice",
};

const NewsPage = () => {
  useAuthRedirect(getLoginStatus);
  const [activeSection, setActiveSection] = useState(sections.news);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSectionContent = () => {
    switch (activeSection) {
      case sections.news:
        return (
          <div
            className="gap-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            id="news-section"
          >
            {newsData.map((data, index) => (
              <NewsCard key={index} news={data} />
            ))}
          </div>
        );
      case sections.release:
        return (
          <div
            className="gap-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            id="media-section"
          >
            {mediaData.map((data, index) => (
              <NewsCard key={index} news={data} />
            ))}
          </div>
        );
      case sections.accreditation:
        return (
          <div className="accreditation-section" id="accreditation-section">
            <h1>Acreditare</h1>
            <br />
            <p>
              Pentru acreditarea la SIE a jurnaliştilor din presa centrală şi
              locală care au în responsabilitate problematica serviciilor de
              informaţii sunt necesare următoarele:
            </p>
            <br />
            <ul style={{ listStyleType: "disc" }}>
              <li>
                cerere de acreditare, semnată de o persoană din conducerea
                redacţiei, în care să se precizeze datele de contact ale
                jurnalistului pentru care se solicită acreditarea (telefon, fax,
                e-mail);
              </li>
              <li>
                copii după buletinul/cartea de identitate şi legitimaţia de
                presă, vizată la zi, ale jurnalistului desemnat.
              </li>
            </ul>
            <br />
            <p>
              Actele menţionate se transmit prin fax sau e-mail la adresele de
              contact publicate pe site.
            </p>
          </div>
        );
      case sections.notice:
        return (
          <div className="notice-section" id="notice-section">
            <ReactMarkdown
              className={"text-black"}
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
            >
              {`
<p style="font-size:22px;font-weight:600">Documentele necesare emiterii de către S.I.E a avizelor pentru documentații de amenajare a teritoriului, urbanism și autorizarea executării / desființării lucrărilor de construcții</p>



Autoritățile administrației publice, agenții economici, persoane fizice și juridice, pot obține avizul Serviciului de Informații Externe, în conformitate cu prevederile următoarelor acte normative:

-   Legea nr. 50/1991 privind autorizarea executării lucrărilor de construcții, republicată, cu modificările și completările ulterioare;

-   Legea nr. 350/2001 privind amenajarea teritoriului și urbanismului, cu modificările și completările ulterioare.


Documentele necesare emiterii de către S.I.E a avizelor pentru documentații de amenajare a teritoriului, urbanism și autorizarea executării / desființării lucrărilor de construcții, pe tipuri de documentații avizate, sunt următoarele:

## Documentații de urbanism:

<p>1. Pentru Planurile Urbanistice Generale (P.U.G):<p>

-   [cerere / solicitare aviz](https://sie.ro/Doc/CERERE_AVIZ.docx) (n.b. conform modelului anexat)

-   memoriu general de prezentare;

-   regulament local de urbanism;

-   planșe cu reglementări urbanistice – zonificare funcțională;

-   planșe cu reglementări echipare tehnico-edilitare;

-   un fișier tip DWG cu reprezentarea grafică a reglementărilor urbanistice.

<div style="border:1px solid #002B7F4D;height: 1px;"></div>

<p>2. Pentru Planurile Urbanistice Zonale și Planurile Urbanistice de Detaliu (P.U.Z. și P.U.D.):<p>

-   [cerere / solicitare aviz](https://sie.ro/Doc/CERERE_AVIZ.docx) (n.b. conform modelului anexat);

-   certificat de urbanism;

-   împuternicire persoană fizică/ juridică, copie CI/BI, copie certificat înregistrare;

-   aviz de oportunitate;

-   documente juridice ale imobilului ( acte de proprietate, concesiune, extras de carte funciară la zi ,etc.);

-   extras din regulamentul local de urbanism ( doar în cazul PUZ);

-   plan de încadrare în teritoriu;

-   planșe cu reglementări urbanistice – zonificare funcțională;

-   planșe cu reglementări echipare tehnico-edilitare;


<div style="border:1px solid #002B7F4D;height: 1px;"></div>


<p>3. Pentru autorizarea executării lucrărilor de construcții și de desființare (D.T.A.C. și D.T.A.D.):<p>

-   [cerere / solicitare aviz](https://sie.ro/Doc/CERERE_AVIZ.docx) (n.b. conform modelului anexat);

-   certificat de urbanism;

-   împuternicire persoană fizică/ juridică, copie CI/BI, copie certificat înregistrare;

-   documente juridice ale imobilului (acte de proprietate, concesiune, extras de carte funciară la zi ,etc.);

-   memoriu tehnic;

-   plan de încadrare în teritoriu;

-   plan de situație ( scara 1:500 sau 1:1000);

-   planșe pe specialități ( arhitectură, structură, instalații, etc).


<div style="border:1px solid #002B7F4D;height: 1px;"></div>


<pre> </pre>


## Precizări suplimentare:

-   a) Cererea în vederea eliberării avizului poate fi formulată și depusă în numele beneficiarului / titularului imobilului / obiectivului, de către alte persoane fizice sau juridice (institute de proiectare, ateliere de arhitectură, reprezentant), pe bază de împuternicire;

-   b) Documentațiile tehnice / de urbanism se vor depune într-un singur exemplar, în copie. Se va anexa un fișier în format editabil cu coordonatele punctelor de contur ale imobilului / construcției, în sistem STEREO 1970;

-   c) Documentațiile transmise către SIE trebuie să fie întocmite conform cerințelor reglementărilor și normelor tehnice aplicabile, să conțină inclusiv elemente de identificare corespunzătoare: antet oficial (unde este cazul), semnături autorizate, ștampile autentice, număr de înregistrare, etc;

-   d) Solicitările pot fi depuse în format electronic, la adresa de  **e-mail** [**relatii_publice@sie.ro**](mailto:relatii_publice@sie.ro)  sau trimise prin poștă la  **Oficiul poștal 41, Căsuța Poștală 59 – București.**

-   e) Dacă între etapele de proiectare (exemplu: între etapa S.F., unde a fost emis un aviz de principiu din partea SIE și etapa de autorizare D.T.A.C.) au apărut modificări de propuneri și/sau soluții, acest lucru va impune o reavizare din partea S.I.E. la faza de autorizare lucrări (D.T.A.D., D.T.A.C., D.A.L.I.);

-   f) Dacă în timpul execuției, poziționarea lucrărilor pe amplasament, soluțiile sau caracteristicile tehnice ale lucrărilor, vor suferi modificări din diverse motive, acest lucru va impune o reavizare din partea S.I.E., la faza de autorizare lucrări (D.T.A.D., D.T.A.C., D.A.L.I.).`}
            </ReactMarkdown>
          </div>
        );
      default:
        return null;
    }
  };

  const renderButton = (label: string, section: string) => (
    <div className="flex flex-col items-center news-button-div">
      <button
        type="button"
        className={`news-button ${activeSection !== section ? "!bg-white opacity-80" : "bg-white"
          }`}
        onClick={() => setActiveSection(section)}
      >
        {label}
      </button>
      {activeSection === section && (
        <svg
          width="31"
          height="16"
          viewBox="0 0 31 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Image</title>

          <path
            d="M29.5323 0H1.46773C0.569389 0 0.126663 1.09252 0.771583 1.7179L14.8039 15.3249C15.1917 15.7011 15.8083 15.7011 16.1961 15.3249L30.2284 1.7179C30.8733 1.09252 30.4306 0 29.5323 0Z"
            fill="white"
          />
        </svg>
      )}
    </div>
  );
  return (
    <div>
      {/* Fixed Header */}
     

      <div className="news-body">
        {/* Hero Section with adjusted padding for fixed header */}
        <div className="news-body-container">
        <HeaderSpacing />
          
          <div className="container-sm">
            <div className="flex flex-col items-start gap-10 news-showcase-container">
              <div className="news-text-content">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  UN SERVICIU DE ELITĂ, EFICIENT ŞI DINAMIC,
                </h2>
                <p className="!text-base">
                  cu o atitudine proactivă, redutabil în confruntarea cu
                  provocările contextului extern în care funcţionează
                </p>
              </div>
              <div className="news-button-container">
                {renderButton("Noutăți", sections.news)}
                {renderButton("Comunicate și apariții în media", sections.release)}
                {renderButton("Acreditare", sections.accreditation)}
                {renderButton("Avize Tehnice", sections.notice)}
              </div>
            </div>
          </div>
        </div>

        <div className="news-container">
          <div className="container-sm">
            <div className="px-5 md:px-0">{renderSectionContent()}</div>
          </div>
        </div>
        <Footer />
      </div>
      <BackScrollButton />
    </div>
  );
};
export default NewsPage;
