import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import "./news-details.css";
import Image from "next/image";
import { mediaData, newsData } from "@/config/data";
import { Metadata, ResolvingMetadata } from "next";

type paramsPros = {
  params: {
    news: string;
  };
};

const returnFilterData = ({ params }: paramsPros) => {
  let filterData = newsData.filter((data) => data.slug === params.news)[0];

  if (filterData === undefined) {
    filterData = mediaData.filter((data) => data.slug === params.news)[0];
  }
  return filterData;
};

export async function generateMetadata(
  { params }: { params: { news: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = returnFilterData({ params });

  return {
    title: `sie.ro/${res.slug}`,
    description: res.title,
  };
}

const page = ({ params }: { params: { news: string } }) => {
  const res = returnFilterData({ params });

  if (params.news !== res?.slug) return <div>404</div>;
  return (
    <>
      <div
        className={`bg-white my-14 md:my-32 w-[90%] md:w-[74%] m-auto p-7 md:p-10 ${
          res.isBackground
            ? "news-details-markdown text-black"
            : "media-details-markdown text-[#69717c]"
        }`}
      >
        <div className="w-full flex justify-center">
          {res?.detailsImage && (
            <Image
              src={res.detailsImage}
              alt="newsImage"
              width={200}
              height={200}
            />
          )}
        </div>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
          {res.newsDetails}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default page;

export async function generateStaticParams() {
  const res1 = newsData.map((id) => ({
    news: id.slug,
  }));

  const res2 = mediaData.map((id) => ({
    news: id.slug,
  }));

  // Concatenate the arrays
  const res = res1.concat(res2);
  return res;
}
