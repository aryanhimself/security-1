"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type ScrollType = {
  link: string;
  setLink: (link: string) => void;
  offset: string;
  setOffset: (offset: string) => void;
};

const ScrollContext = createContext<ScrollType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [link, setLink] = useState("#section-1");
  const [offset, setOffset] = useState("0");

  return (
    <ScrollContext.Provider value={{ link, setLink, offset, setOffset }}>
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
