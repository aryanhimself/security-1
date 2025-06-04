"use client"
import { createContext, ReactNode, useEffect, useState } from "react";

type LayoutType = {
    headerHeight: number
    isScrolled: boolean
    setHeaderHeight: (height: number) => void
    setIsScrolled: (scrolled: boolean) => void
}

export const LayoutContext = createContext<LayoutType>({
    headerHeight: 5,
    isScrolled: false,
    setHeaderHeight: () => {},
    setIsScrolled: () => {},
})

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Determine if it's mobile or PC
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint if needed
        }

        checkIsMobile(); // Initial check
        window.addEventListener("resize", checkIsMobile);

        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    useEffect(() => {
        if (isScrolled) {
            setHeaderHeight(isMobile ? 4 : 5); // Shorter header when scrolled
        } else {
            setHeaderHeight(isMobile ? 6 : 8); // Taller header normally
        }
    }, [isScrolled, isMobile]);

    return (
        <LayoutContext.Provider value={{
            headerHeight,
            isScrolled,
            setHeaderHeight,
            setIsScrolled
        }}>
            {children}
        </LayoutContext.Provider>
    );
}
