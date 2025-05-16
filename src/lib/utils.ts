import { LOGIN_KEY } from "@/config/login";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLoginStatus = () => {
  return localStorage.getItem(LOGIN_KEY) === "true";
};

export const setLogout = () => {
  localStorage.clear();
};

export const setLogin = () => {
  localStorage.setItem(LOGIN_KEY, "true");
};

export const validEmailDomains = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
  "aol.com",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
  "mail.com",
  "live.com",
];
