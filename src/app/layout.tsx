import type { Metadata } from "next";
import { Inter, Archivo_Black, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { Header } from "@/components/Header";
import { KonamiListener } from "@/components/KonamiListener";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo-black",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AYUSHJC.EXE",
  description: "Interactive Developer Portfolio of Ayush",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${archivoBlack.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <KonamiListener />
        <CustomCursor />
        <Header />
        {children}
      </body>
    </html>
  );
}
