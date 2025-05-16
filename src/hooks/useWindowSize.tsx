import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const handleWindowSizeChange = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    // Set initial size
    handleWindowSizeChange();

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
