"use client";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { set } from "video.js/dist/types/tech/middleware";

type ScrollType = {
  link: string;
  setLink: (link: string) => void;
  offset: string;
  setOffset: (offset: string) => void;
  onLinkChange: (link: HTMLElement, to: string) => void;
  popHistory: () => void;
};

const ScrollContext = createContext<ScrollType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [history, setHistory] = useState<HTMLElement[]>([]);
  const router = useRouter();

  const getScrollPosition = (element: HTMLElement) => {
    const sectionTop = element?.getBoundingClientRect().top || 0;
    const offsetValue = sectionTop + window.scrollY;
    const offset = 50; // Adjust this value to your desired offset
    const scrollPosition = offsetValue - offset;
    return scrollPosition;
  };
  const getScrollPositionWithSection = (section: string) => {
    const element = document.getElementById(section.replace("#", ""));
    if (element) {
      const sectionTop = element.getBoundingClientRect().top;
      const offsetValue = sectionTop + window.scrollY;
      const offset = 50; // Adjust this value to your desired offset

      const scrollPosition = offsetValue - offset;
      return scrollPosition;
    }
    return 0;
  };

  const onLinkChange = (link: HTMLElement, to: string) => {
    const scrollPosition = getScrollPositionWithSection(to);
    setHistory((prev) => {
      const newHistory = [...prev];
      if (newHistory.length > 0) {
        const lastLink = newHistory[newHistory.length - 1];
        if (lastLink !== link) {
          newHistory.push(link);
        }
      } else {
        newHistory.push(link);
      }
      return newHistory;
    });
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const popHistory = () => {
    if (history.length === 0) {
      const scrollPosition = getScrollPositionWithSection("section-1");
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
      return;
    }
    setHistory((prev) => {
      const newHistory = [...prev];
      newHistory.pop();
      return newHistory;
    });
    const lastLink = history[history.length - 1];
    const scrollPosition = getScrollPosition(lastLink);
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const [link, setLink] = useState("#section-1");
  const [offset, setOffset] = useState("0");

  return (
    <ScrollContext.Provider
      value={{ link, setLink, offset, setOffset, onLinkChange, popHistory }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useLink = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useLink must be used within a LinkProvider");
  }
  return context;
};
