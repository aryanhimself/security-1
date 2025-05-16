import React, { useEffect } from "react";
import "./joburi.css";

import HomePage from "./HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviciul de Informaţii Externe",
  description: "Serviciul de Informaţii Externe (SIE)",
};

const page = () => {
  return <HomePage />;
};

export default page;
