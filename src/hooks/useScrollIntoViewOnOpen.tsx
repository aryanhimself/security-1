import { useEffect, useRef, useState } from "react";

export default function useScrollIntoViewOnOpen(
  isOpen: boolean,
  offsetWeb = 0,
  isMobile = false
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  // console.log("offset", offset);
  // Function to determine the offset based on screen size
  const determineOffset = () => {
    const width = window.innerWidth;
    if (width < 768) {
      // Mobile screens
      return 20; // 50px offset for mobile
    } else if (width >= 768 && width < 1024) {
      // Tablet screens
      return 20; // 70px offset for tablets
    } else {
      // Desktop screens
      return offsetWeb; // 100px offset for desktops
    }
  };

  useEffect(() => {
    // Set the initial offset based on the screen size
    setOffset(determineOffset());

    // Update the offset on window resize
    const handleResize = () => {
      setOffset(determineOffset());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Runs only on mount and when the window resizes

  useEffect(() => {
    if (isOpen && ref.current) {
      // First scroll into view with smooth behavior
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scrolls the element to the top of the viewport
        inline: "nearest",
      });

      // After scrolling, adjust by a pixel offset (e.g., for a sticky header)
      setTimeout(() => {
        const elementTop = ref.current?.getBoundingClientRect().top || 0;
        window.scrollBy({
          top: elementTop - offset, // Move the viewport by the offset value
          behavior: "smooth",
        });
      }, 100); // Delay to ensure scrollIntoView finishes before adjusting
    }
  }, [isOpen, offset]);

  return ref;
}
