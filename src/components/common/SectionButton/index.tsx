"use client";
import { useLink } from "@/providers/scroll_provider";
import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const SectionButton = ({
  href,
  name,
  id,
  offset = "0",
}: {
  href: string;
  name: string;
  id: string;
  offset: string;
}) => {
  const { setLink, setOffset } = useLink();

  const handleAnchorLink = (link: string) => {
    setLink(link);
    setOffset(offset);
  };
  return (
    <div>
      <div className="hidden md:block">
        <AnchorLink href={href} offset="100">
          <button
            type="button"
            className="button"
            id="unique__feature__button"
            onClick={() => handleAnchorLink(id)}
          >
            {name}
          </button>
        </AnchorLink>
      </div>
      <div className="md:hidden block">
        <AnchorLink href={href} offset="0">
          <button
            type="button"
            className="button"
            id="unique__feature__button"
            onClick={() => handleAnchorLink(id)}
          >
            {name}
          </button>
        </AnchorLink>
      </div>
    </div>
  );
};

export default SectionButton;
