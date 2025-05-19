import React from "react";
import classes from "./NavItem.module.css";
import Link from "next/link";
const NavItem = ({
  item,
  currentSection,
  offset,
}: {
  item: {
    title: string;
    label: string;
    id: string;
    link: string;
    highlightLink: string[];
  };
  offset: string;
  currentSection: string;
}) => {
  // console.log("item link", item.highlightLink);
  // console.log("currentSection", currentSection);
  // let scroll1 = ["section-1", "section-2", "section-3"];

  // Check if item.link is in scroll1 and matches currentSection
  const isActive = item.highlightLink.includes(currentSection);
  // console.log("isActive", isActive);

  return (
    <Link href={`#${item.link}`} >
      <div key={item.id} className={classes.navItem} id={`${item.id}_Button`}>
        <p
          className={`${classes.navLink} ${isActive ? classes.active : ""}`}
          id={item.id}
        >
          {item.title} 
        </p>
        <span>{item.label}</span>
      </div>
    </Link>
  );
};

export default NavItem;
