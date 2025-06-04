"use client";
import { useLink } from "@/providers/scroll_provider";
import React from "react";

const SectionButton = ({
  href,
  name,
  id,
  offset = "0",
  element,
}: {
  href: string;
  name: string;
  id: string;
  offset: string;
  element: HTMLElement;
}) => {
  const { onLinkChange } = useLink();
  const ref = React.useRef<HTMLDivElement>(null);
  const section = document.getElementById(id);

  return (
    <div ref={ref}>
      <div className="hidden md:block">
        {/* <Link href={`?ref=${ref.current?.getBoundingClientRect().top}${href}`}> */}
        <button
          onClick={() => onLinkChange(element!, href)}
          type="button"
          className="button"
          id="unique__feature__button"
        >
          {name}
        </button>
        {/* </Link> */}
      </div>
      <div className="md:hidden block">
        {/* <Link href={`?ref=${ref.current?.getBoundingClientRect().top}${href}`}> */}
        <button
          onClick={() => onLinkChange(element!, href)}
          type="button"
          className="button"
          id="unique__feature__button"
        >
          {name}
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default SectionButton;
