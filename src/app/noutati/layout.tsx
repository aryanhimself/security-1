import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Noutăţi - SIE",
    description: "Noutăţi",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
} 