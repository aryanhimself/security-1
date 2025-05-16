import React from "react";
import "./news.css";
import { Metadata } from "next";
import NewsPage from "./newsPage";

export const metadata: Metadata = {
  title: "Noutăţi - SIE",
  description: "Noutăţi",
};

const Page = () => {
  return <NewsPage />;
};
export default Page;
