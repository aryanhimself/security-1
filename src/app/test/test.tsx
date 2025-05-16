"use client";
import type { IQuestionResponse } from "@/types/test";
import React, { useEffect } from "react";
import TestPage from "./testPage";
import { notFound, useSearchParams } from "next/navigation";

const Test = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<IQuestionResponse>([]);
  useEffect(() => {
    fetch("/test.json")
      .then((response) => response.json())
      .then((data: IQuestionResponse) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (!slug) return notFound();
  if (loading) return <>loading...</>;
  const questionData = data.filter((q) => q.test_category === slug);
  if (questionData.length === 0) return notFound();
  return <TestPage data={questionData} />;
};

export default Test;
