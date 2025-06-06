"use client";
import { useLink } from "@/providers/scroll_provider";
import React from "react";

const SectionButton = ({
  href,
  name,
  id,
  offset = "0",
  element,
  className = "",
}: {
  href: string;
  name: string;
  id: string;
  offset: string;
  element: HTMLElement;
  className?: string;
}) => {
  const { onLinkChange } = useLink();
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={ref}>
      <div className="hidden md:block">
        <button
          onClick={() => onLinkChange(element!, href)}
          type="button"
          className={"button" + " " + className}
        >
          {name}
        </button>
      </div>
      <div className="md:hidden block">
        <button
          onClick={() => onLinkChange(element!, href)}
          type="button"
          className={"button" + " " + className}
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default SectionButton;
