import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sesizări - SIE",
    description: "Sesizări",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
} 