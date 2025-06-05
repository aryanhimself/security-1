import Image from "next/image";
import React from "react";
import "./Section5.css";
import { ABOUTUS_DATA } from "@/config/data";
import { poppins } from "@/app/fonts";

// Type Definitions
interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface GalleryItem {
  title: string;
  image: ImageData;
  source: string;
}

interface TextImageSection {
  id: number;
  type: "text-image";
  text: string;
  image: ImageData;
  imagePosition: "left" | "right";
}

interface TextGallerySection {
  id: number;
  type: "text-gallery";
  text: string;
  gallery: GalleryItem[];
}

type ContentSectionData = TextImageSection | TextGallerySection;

interface EmblemaContent {
  sections: ContentSectionData[];
}

// Data Constants
const EMBLEMA_CONTENT: EmblemaContent = {
  sections: [
    {
      id: 1,
      type: "text-image",
      text: `În lumea simbolurilor care comunică sensuri profunde, grifonul reprezintă un reper special care îmbină energia celestă cu puterea terestră.

Această ființă fabuloasă, cu cap și gheare de vultur și corp de leu, este simbol al forței și inteligenței, dar şi obstacol ce trebuie depăşit pentru a avea acces la lucruri de mare preţ.`,
      image: {
        src: "/images/emblema/emb-1.jpg",
        alt: "emblema",
        width: 256,
        height: 288,
      },
      imagePosition: "right",
    },
    {
      id: 2,
      type: "text-gallery",
      text: "Grifonul are rădăcini adânci în cultura dacică, apărând frecvent pe pietrele anterioare și ulterioare cuceririi romane, pe Columna lui Traian, pe coifuri dacice și piese de harnaşament.",
      gallery: [
        {
          title: "Ipostaze ale grifonilor pe matriță.",
          image: {
            src: "/images/emblema/emb-2.png",
            alt: "emblema",
            width: 256,
            height: 256,
          },
          source:
            "Sursa: Matrița de bronz de la Sarmizegetusa Regia – pagina 115",
        },
        {
          title: "Grifoni-vultur",
          image: {
            src: "/images/emblema/emb-6.png",
            alt: "emblema",
            width: 320,
            height: 256,
          },
          source:
            "Sursa: Matrița de bronz de la Sarmizegetusa Regia – pagina 65",
        },
      ],
    },
    {
      id: 3,
      type: "text-image",
      text: `Anticii Pindar, Apollo-nius din Rhodos și Virgilius îl menționează ca făcând parte din panteonul tracic, adesea însoțindu-l pe Apollo. Pindar amintește că "Apollo, după ce a construit cetatea Troiei, s-a întors în patria lui, dincolo de Dunăre la Hiperboreeni."`,
      image: {
        src: "/images/emblema/emb-3.jpg",
        alt: "emblema",
        width: 256,
        height: 288,
      },
      imagePosition: "right",
    },
    {
      id: 4,
      type: "text-image",
      text: "Vulturul din reprezentarea grifonului ține crucea în cioc, amintind de vulturul cruciat românesc din stema țării. În gheare poartă cheile comorii, simbol al puterii de a păzi și dezvălui secrete prețioase. Tradiția heraldică adaugă vulturului urechi pentru a-i spori vigilența și simțurile.",
      image: {
        src: "/images/emblema/emb-4.png",
        alt: "emblema",
        width: 224,
        height: 288,
      },
      imagePosition: "left",
    },
    {
      id: 5,
      type: "text-image",
      text: "Acest simbol ancestral, conectat profund cu spațiul românesc, ilustrează perfect misiunea Serviciului de Informații Externe - o instituție al cărei scop este să slujească, sub semnul credinței și al rațiunii, națiunea pe care o reprezintă, păstrând și protejând secretele esențiale pentru securitatea statului.",
      image: {
        src: "/images/emblema/emb-5.png",
        alt: "emblema",
        width: 288,
        height: 300,
      },
      imagePosition: "right",
    },
  ],
};

// Reusable Components
interface EmblemImageProps {
  image: ImageData;
}

const EmblemImage: React.FC<EmblemImageProps> = ({ image }) => (
  <div className="flex justify-center">
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className="rounded-lg transition-transform hover:scale-105"
      style={{
        width: "auto",
        height: "auto",
        maxWidth: "100%",
        maxHeight: `${image.height}px`,
      }}
    />
  </div>
);

interface GalleryItemProps {
  item: GalleryItem;
}

const GalleryItemComponent: React.FC<GalleryItemProps> = ({ item }) => (
  <div className="text-center">
    <p className="!text-xs !text-center mb-3 text-gray-700">{item.title}</p>
    <div className="flex justify-center mb-3">
      <Image
        src={item.image.src}
        alt={item.image.alt}
        width={item.image.width}
        height={item.image.height}
        className="rounded-lg transition-transform hover:scale-105"
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: `${item.image.height}px`,
        }}
      />
    </div>
    <p className="!text-xs italic !text-center text-gray-600">{item.source}</p>
  </div>
);

interface TextImageSectionProps {
  section: TextImageSection;
}

const TextImageSectionComponent: React.FC<TextImageSectionProps> = ({
  section,
}) => {
  const isImageLeft = section.imagePosition === "left";
  const paragraphs = section.text.split("\n\n");

  return (
    <div className="mb-12">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <React.Fragment key={index}>
              <p className="md:text-justify text-base !leading-6">
                {paragraph} asdads
              </p>
              {/* Show image after first paragraph for section 1, or after all text for others */}
              {((section.id === 1 && index === 0) ||
                (section.id !== 1 && index === paragraphs.length - 1)) && (
                <div className="flex justify-center py-4">
                  <EmblemImage image={section.image} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-2 gap-12 items-center">
        <div className={isImageLeft ? "order-2" : "order-1"}>
          {paragraphs.map((paragraph, index) => (
            <React.Fragment key={index}>
              <p className="md:text-justify text-base !leading-6">
                {paragraph}
              </p>
              {index < paragraphs.length - 1 && <div className="mb-6" />}
            </React.Fragment>
          ))}
        </div>
        <div
          className={`flex justify-center ${
            isImageLeft ? "order-1" : "order-2"
          }`}
        >
          <EmblemImage image={section.image} />
        </div>
      </div>
    </div>
  );
};

interface TextGallerySectionProps {
  section: TextGallerySection;
}

const TextGallerySectionComponent: React.FC<TextGallerySectionProps> = ({
  section,
}) => (
  <div className="mb-12">
    <div className="mb-8">
      <p className="md:text-justify !leading-6">{section.text}</p>
    </div>

    {/* Mobile Layout - Stack images vertically */}
    <div className="block md:hidden space-y-8">
      {section.gallery.map((item, index) => (
        <div key={index} className="text-center">
          <p className="!text-xs !text-center mb-3 text-gray-700">
            {item.title} ram
          </p>
          <div className="flex justify-center mb-3">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              className="rounded-lg "
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "300px",
              }}
            />
          </div>
          <p className="!text-xs itali text-center text-gray-600 px-4">
            {item.source}
          </p>
        </div>
      ))}
    </div>

    {/* Desktop Layout - Side by side */}
    <div className="hidden md:grid grid-cols-2 gap-8 justify-items-center">
      {section.gallery.map((item, index) => (
        <GalleryItemComponent key={index} item={item} />
      ))}
    </div>
  </div>
);

interface ContentSectionProps {
  section: ContentSectionData;
}

const ContentSection: React.FC<ContentSectionProps> = ({ section }) => {
  switch (section.type) {
    case "text-image":
      // return <></>;
      return <TextImageSectionComponent section={section} />;
    case "text-gallery":
      return <TextGallerySectionComponent section={section} />;
    default:
      return null;
  }
};

const Section5: React.FC = () => {
  return (
    <div className="emblema-section">
      <div className="container-sm p-2">
        <div className="emblema-container">
          {/* Header Section */}
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

          {/* Main Content Grid */}
          <div className="emblema-content leading-[30px] text-[16px]">
            {EMBLEMA_CONTENT.sections.map((section) => (
              <ContentSection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
