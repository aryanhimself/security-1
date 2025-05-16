import Image from "next/image";
import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const NewsCard = ({
  news = {
    title: `Serviciul de Informații Externe organizează stagiu de practică în
          domeniul Criptologie, în perioada iunie-iulie 2023.`,
    date: "24 Aprilie 2023",
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_SMSJPRF",
  },
}: {
  news?: { title: string; date: string; mainImage: string; slug?: string };
}) => {
  return (
    <div className="bg-[#182d4f]">
      <div className="relative">
        <Image
          src={news.mainImage}
          alt="news_one"
          className="w-full h-full"
          width={300}
          height={400}
        />
        <div className="absolute bottom-[20px] left-[10px] border border-black rounded-[2px] bg-white text-black px-[6px] py-[4px] flex items-center justify-center">
          <ReactMarkdown
            className="text-[12px]"
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {news.date}
          </ReactMarkdown>
        </div>
      </div>
      <div className="px-[20px] py-[30px] flex flex-col">
        <ReactMarkdown
          className={"text-[14px]"}
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
        >
          {news.title}
        </ReactMarkdown>
        <Link
          href={`/noutati/${news.slug}`}
          className="mt-4 text-[12px] underline"
        >
          Citește mai mult
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
