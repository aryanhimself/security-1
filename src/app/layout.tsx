import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense} from "react";
import AuthProvider from "@/providers/auth_provider";
import RecaptchaProvider from "@/providers/recaptcha_provider";
import { ScrollProvider } from "@/providers/scroll_provider";
import { inter, poppins } from "./fonts";
import Scrollable from "@/components/Scrollable";
import Header from "@/components/ui/layout/header";
import { LayoutProvider } from "@/providers/layout-provider";
const AccessabilityBar = dynamic(
  () => import("@/components/common/AccessabilityBar")
);

export const metadata: Metadata = {
  title: "Serviciul de Informaţii Externe",
  description: "Serviciul de Informaţii Externe (SIE)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className={`${inter.className}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        /> */}

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </head>
      <body id="root">
        <RecaptchaProvider>
          <AuthProvider>
            <LayoutProvider>
            <ScrollProvider>
              <Header />
              {children}
              </ScrollProvider>
            </LayoutProvider>
          </AuthProvider>
        </RecaptchaProvider>
        {/* <Suspense fallback={<>Loading..</>}>
          <AccessabilityBar />
        </Suspense> */}
      </body>
    </html>
  );
}
