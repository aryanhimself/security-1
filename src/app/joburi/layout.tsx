import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Joburi - SIE",
  description: "Joburi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
