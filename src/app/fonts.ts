import { Inter, Roboto_Mono, Poppins } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--Poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
