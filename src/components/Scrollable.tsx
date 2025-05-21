"use client";

import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const MOBILE_OFFSET = 40;
const DESKTOP_OFFSET = 90;

export function scrollToHashWithOffset(hash: string, offset: number) {
  if (!hash) return;
  
  const id = hash.replace('#', '');
  const el = document.getElementById(id);
  
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

const Scrollable = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Determine offset based on window width
    const offset = window.innerWidth <= 768 ? MOBILE_OFFSET : DESKTOP_OFFSET;
    
    // Reset scroll to top to prevent default jump
    // window.scrollTo(0,0);
    
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        scrollToHashWithOffset(hash, offset);
      }, 100);
    }
    
    // Add event listener for hash changes (for in-page navigation)
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      if (currentHash) {
        setTimeout(() => {
          scrollToHashWithOffset(currentHash, offset);
        }, 100);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname, searchParams]);
  
  return null;
};

export default Scrollable;