import Image from "next/image";
import React from "react";
import "./Section5.css";
import { ABOUTUS_DATA } from "@/config/data";
import { poppins } from "@/app/fonts";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const Section5 = () => {
  return (
    <div className="emblema-section">
      <div className="container-sm p-2">
        <div className="emblema-container">
          <div className="cooperate-title-container">
            <h1 className={`emblema-title ${poppins.className}`}>
              {ABOUTUS_DATA.title}
            </h1>
            <div className="cooperate-bottom-border">
              <div className="border-blue" />
              <div className="border-yellow" />
              <div className="border-red" />
            </div>
          </div>
          <div className="emblema-content">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 items-center emblema-first-content item-center gap-10 md:gap-0">
              <div>
                <p className="first-paragraph">{ABOUTUS_DATA.firstParagraph}</p>
                <p className="first-paragraph mt-[20px]">
                  {ABOUTUS_DATA.secondParagraph}
                </p>
              </div>
              <div className="first-content-image m-auto lg:m-0">
                <Image
                  src={ABOUTUS_DATA.imageOne}
                  alt="emblema image"
                  width={340}
                  height={300}
                  className="!h-[300px]"
                />
              </div>
            </div>

            <p>{ABOUTUS_DATA.thirdParagraph}</p>
            <br />
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <Image
                src={ABOUTUS_DATA.imageTwo}
                alt="dfasd"
                width={300}
                height={340}
                className="!h-[300px]"
              />
              <div>
                <p>{ABOUTUS_DATA.fourthParagraph}</p>
                <br />
                <p>{ABOUTUS_DATA.fifthParagraph}</p>
                <br />
              </div>
            </div>

            <p className="mt-5">{ABOUTUS_DATA.sixthParagraph}</p>
            <br />
            <p className="">{ABOUTUS_DATA.seventhParagraph}</p> */}
            <ReactMarkdown
              className="text-[12px]"
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
            >
              {`
<div style="display: flex;
    gap: 50px;" className="flex flex-col md:flex-row items-center md:items-start">

    
<div>

În lumea simbolurilor care comunică sensuri profunde, grifonul reprezintă un reper special care îmbină energia celestă cu puterea terestră.

<br/>
<Image
  src="/images/emblema/emb-1.jpg"
  alt="emblema"
  width={60}
  height={60}
  className="rounded-lg  h-72 md:hidden block m-auto"
/>
<br />

Această ființă fabuloasă, cu cap și gheare de vultur și corp de leu, este simbol al forței și inteligenței, dar şi obstacol ce trebuie depăşit pentru a avea acces la lucruri de mare preţ. 

</div>
<Image
  src="/images/emblema/emb-1.jpg"
  alt="emblema"
  width={60}
  height={60}
  className="rounded-lg  h-72 hidden md:block"
/>

</div>

<br />




<div style="display: flex
;
    gap: 30px;" className="flex flex-col md:flex-row items-center md:items-start">
<Image
  src="/images/emblema/emb-2.png"
  alt="emblema"
  width={30}
  height={30}
  className="rounded-lg  h-64 w-64"
/>

<div style="width:100%">

Grifonul are rădăcini adânci în cultura dacică, apărând frecvent pe pietrele anterioare și ulterioare cuceririi romane, pe Columna lui Traian, pe coifuri dacice și piese de harnaşament.


</div>
</div>

<br/>
<br/>
<br/>

<div style="display: flex;
    gap: 50px;" className="flex flex-col md:flex-row items-center md:items-start">

<Image
  src="/images/emblema/emb-3.jpg"
  alt="emblema"
  width={30}
  height={30}
  className="rounded-lg  h-72 md:hidden block"
/>
<div>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Anticii Pindar, Apollo-nius din Rhodos și Virgilius îl menționează ca făcând parte din panteonul tracic, adesea însoțindu-l pe Apollo. Pindar amintește că "Apollo, după ce a construit cetatea Troiei, s-a întors în patria lui, dincolo de Dunăre la Hiperboreeni."

</div>
<Image
  src="/images/emblema/emb-3.jpg"
  alt="emblema"
  width={30}
  height={30}
  className="rounded-lg  h-72 hidden md:block"
/>

</div>

<br />
<br />

<div style="display: flex;
    gap: 50px;" className="flex flex-col md:flex-row items-center md:items-start">
<Image
  src="/images/emblema/emb-4.png"
  alt="emblema"
  width={30}
  height={30}
  className="rounded-lg  h-72 "
/>

<div>

Vulturul din reprezentarea grifonului ține crucea în cioc, amintind de vulturul cruciat românesc din stema țării.

În gheare poartă cheile comorii, simbol al puterii de a păzi și dezvălui secrete prețioase. Tradiția heraldică adaugă vulturului urechi pentru a-i spori vigilența și simțurile.

</div>



</div>

<br />
<br />



<div style="display: flex;
    gap: 50px;" className="flex flex-col md:flex-row items-center md:items-start">

<Image
  src="/images/emblema/emb-5.png"
  alt="emblema"
  width={30}
  height={30}
  className="rounded-lg  h-72 block md:hidden"
/>
<div>

Acest simbol ancestral, conectat profund cu spațiul românesc, ilustrează perfect misiunea Serviciului de Informații Externe - o instituție al cărei scop este să slujească, sub semnul credinței și al rațiunii, națiunea pe care o reprezintă, păstrând și protejând secretele esențiale pentru securitatea statului.

</div>
<Image
  src="/images/emblema/emb-5.png"
  alt="emblema"
  width={30}
  height={30}
  className="rounded-lg  h-72 hidden md:block"
/>

</div>
`}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
