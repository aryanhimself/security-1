"use client";
import { useLink } from "@/providers/scroll_provider";
import Link from "next/link";
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
        <Link href={href} >
          <button
            type="button"
            className="button"
            id="unique__feature__button"
          >
            {name}
          </button>
        </Link>
      </div>
      <div className="md:hidden block">
        <Link href={href} >
          <button
            type="button"
            className="button"
            id="unique__feature__button"
          >
            {name}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionButton;
