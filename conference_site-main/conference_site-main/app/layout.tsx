import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const _inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "30-й юбилейный Пленум ФУМО ВО ИБ — Всероссийская конференция",
  description:
    "30-й юбилейный Пленум Федерального учебно-методического объединения в сфере высшего образования по информационной безопасности. Москва, МИРЭА.",
  keywords: [
    "информационная безопасность",
    "ФУМО ИБ",
    "конференция",
    "пленум",
    "кибербезопасность",
    "образование",
    "МИРЭА",
  ],
  openGraph: {
    title: "30-й юбилейный Пленум ФУМО ВО ИБ",
    description:
      "Всероссийская конференция по информационной безопасности. Москва, МИРЭА.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${_inter.variable} ${_jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
