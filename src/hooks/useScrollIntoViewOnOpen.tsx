import { useEffect, useRef, useState } from "react";

export default function useScrollIntoViewOnOpen(
  isOpen: boolean,
  offsetWeb = 0,
  isMobile = false
) {
  const ref = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
  if (ref.current && isOpen) {
    const offset = offsetWeb ===0? 95:offsetWeb; // change this to whatever offset you need
    const elementTop = ref.current.getBoundingClientRect().top + window.pageYOffset;
    const scrollTo = elementTop - offset;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
  }
}, [isOpen]);

  return ref;
}
