"use client";
import React, { useEffect, useRef } from "react";
import "./index.css";
import AddIcon, {
  FontIcon,
  GrayScaleIcon,
  InvertColorIcon,
  MinusIcon,
  RevertIcon,
  UnderlineIcon,
} from "@/components/Icons/AccessibilityIcons";
import AccessabilityRow from "./AccessabilityRow";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const markup = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "span",
  "div",
  "p",
  "a",
  "input",
  "textarea",
  "li",
  "button",
  "i",
];
const AccessabilityBar = () => {
  const obj = {
    fontSize: 0,
    isEffectChanged: false,
    isLinkHighlight: false,
    isRegularFont: false,
    isInvertColor: false,
  };
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter()

  const onClick = () => {
    ref?.current?.classList.toggle("open");
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      applyStoredFontSize(); // Ensure it only runs on client-side
    }
  }, [pathname]);

  function markupTag(sign: "plus" | "minus", number = 2) {
    const storedFontChange = Number(
      localStorage.getItem("fontSizeChange") || 0
    );
    const root = document.getElementById("root");
    const excludedIds = ["video-player"]; // Add IDs to ignore

    let storedFontSize = Number(localStorage.getItem("fontSize")) || 0;
    console.log("storedFontSize", storedFontSize);

    if (sign === "plus" && storedFontSize <= 3) {
      storedFontSize++;
    } else if (sign === "minus" && storedFontSize > -2) {
      storedFontSize--;
    }

    localStorage.setItem("fontSize", storedFontSize.toString());
    localStorage.setItem("fontSizeTimestamp", Date.now().toString());

    for (const element of markup) {
      const tags = root?.getElementsByTagName(element) as
        | HTMLElement[]
        | undefined;
      if (tags) {
        for (let i = 0; i < tags.length; i++) {
          if (
            excludedIds.includes(tags[i].id) ||
            tags[i].closest("#video-player")
          )
            continue;

          let computedSize = Number.parseInt(
            window.getComputedStyle(tags[i]).fontSize
          );
          // console.log(`Before: ${tags[i].tagName} -> ${computedSize}px`);

          const newSize =
            sign === "plus" ? computedSize + number : computedSize - number;
          tags[i].style.fontSize = `${newSize}px`;

          // console.log(`After: ${tags[i].tagName} -> ${newSize}px`);
        }
      }
    }
  }

  // Function to apply saved font size on page load
  function applyStoredFontSize() {
    const root = document.getElementById("root");
    if (!root) return;

    const storedFontSize = Number(localStorage.getItem("fontSize")) || 0;

    const timestamp = Number(localStorage.getItem("fontSizeTimestamp")) || 0;
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

    // Check if the stored font size is expired
    if (Date.now() - timestamp > oneHour) {
      localStorage.removeItem("fontSize");
      localStorage.removeItem("fontSizeTimestamp");
      return;
    }

    for (const element of markup) {
      const tags = Array.from(
        root?.getElementsByTagName(element) || []
      ) as HTMLElement[];

      if (tags) {
        for (let i = 0; i < tags.length; i++) {
          if (tags[i].closest("#video-player")) continue;

          const newSize =
            Number.parseInt(window.getComputedStyle(tags[i]).fontSize) +
            storedFontSize * 2;

          tags[i].style.fontSize = `${newSize}px`;
        }
      }
    }
  }

  function increaseFont() {
    if (obj.fontSize < 3) {
      obj.fontSize++;
      markupTag("plus");
    }
  }

  function decreaseFont() {
    if (obj.fontSize > -3) {
      obj.fontSize--;
      markupTag("minus");
    }
  }

  function regularFont() {
    const html = document.getElementsByTagName("html")[0];
    if (obj.isRegularFont) {
      html.classList.remove("real-accessability-regularFont");
      obj.isRegularFont = false;
    } else {
      html.classList.add("real-accessability-regularFont");
      obj.isRegularFont = true;
    }
  }
  function invertColor() {
    const html = document.getElementsByTagName("html")[0];
    if (obj.isInvertColor) {
      html.classList.remove("real-accessability-invert");
      obj.isInvertColor = false;
    } else {
      html.classList.add("real-accessability-invert");
      obj.isInvertColor = true;
    }
  }
  function onGreyScale() {
    const html = document.getElementsByTagName("html")[0];
    if (obj.isEffectChanged) {
      html.classList.remove("real-accessability-grayscale");
      obj.isEffectChanged = false;
    } else {
      html.classList.add("real-accessability-grayscale");
      obj.isEffectChanged = true;
    }
  }
  function linkHighlight() {
    const html = document.getElementsByTagName("html")[0];

    if (obj.isLinkHighlight) {
      html.classList.remove("real-accessability-linkHighlight");
      obj.isLinkHighlight = false;
    } else {
      html.classList.add("real-accessability-linkHighlight");
      obj.isLinkHighlight = true;
    }
  }
  function reset() {
    const html = document.getElementsByTagName("html")[0];

    const storedFontSize = Number(localStorage.getItem("fontSize")) || 0;
    console.log("storedFontSize", storedFontSize);

    // Explicitly reset the font size in session storage
    // localStorage.setItem("fontSize", "0");
    // localStorage.setItem("fontSizeTimestamp", Date.now().toString());

    // Ensure obj.fontSize is 0 before calling markupTag()
    const previousFontSize = obj.fontSize;
    obj.fontSize = 0;

    // if (storedFontSize !== 0) {
    //   obj.fontSize = 0;
    //   // Explicitly reset the font size in session storage
    //   localStorage.setItem("fontSize", "0");
    //   localStorage.setItem("fontSizeTimestamp", Date.now().toString());
    // }

    console.log("previousFontSize", previousFontSize);

    // Reset the actual font size only if it was modified before
    if (previousFontSize !== 0) {
      markupTag("minus", previousFontSize * 2);
    }

    // Remove all applied effects
    html.classList.remove("real-accessability-grayscale");
    obj.isEffectChanged = false;

    html.classList.remove("real-accessability-linkHighlight");
    obj.isLinkHighlight = false;

    html.classList.remove("real-accessability-regularFont");
    obj.isRegularFont = false;

    html.classList.remove("real-accessability-invert");
    obj.isInvertColor = false;
    localStorage.removeItem("fontSize");
    localStorage.removeItem("fontSizeTimestamp");
   window.location.reload();
  }

  const accessibilityBars = [
    {
      if: "1",
      title: "Mareste Fontul",
      onClick: increaseFont,
      icon: <AddIcon />,
    },
    {
      id: "2",
      title: "Micsoreaza Fontul",
      onClick: decreaseFont,
      icon: <MinusIcon />,
    },
    {
      id: "3",
      title: "Alb si Negru",
      onClick: onGreyScale,
      icon: <GrayScaleIcon />,
    },
    {
      id: "4",
      title: "Inversare Culori",
      onClick: invertColor,
      icon: <InvertColorIcon />,
    },
    {
      id: "5",
      title: "Sublinieaza Link-uri",
      onClick: linkHighlight,
      icon: <UnderlineIcon />,
    },
    {
      id: "6",
      title: "Font Regular",
      onClick: regularFont,
      icon: <FontIcon />,
    },
    {
      id: "7",
      title: "Resetare",
      onClick: reset,
      icon: <RevertIcon />,
    },
  ];

  return (
    <div ref={ref} id="real-accessability" className="excludedElement">
      <a
        id="real-accessability-btn"
        className="accessability"
        // biome-ignore lint/a11y/useValidAnchor: <explanation>
        onClick={onClick}
      >
        <i className="real-accessability-loading" style={{ display: "none" }} />
        <i className="real-accessability-icon" />
      </a>
      <ul>
        {accessibilityBars.map((x, i) => (
          <AccessabilityRow
            key={`${x.id} ${i}`}
            onClick={x.onClick}
            icon={x.icon}
            title={x.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default AccessabilityBar;
