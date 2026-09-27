import type { Metadata } from "next";
import { Share_Tech_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  variable: "--font-share-tech",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talento con Tarifa | Agencia Irreverente // Brinca al Vacío",
  description: "El mundo es vasto como tus necesidades. Brinca al vacío, Dorothy: háblame y veamos qué tan profundo llega el agujero del conejo.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth bg-[#F0F0F0]">
      <body
        className={`${shareTechMono.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased font-sans bg-[#F0F0F0] text-black overflow-x-hidden selection:bg-black selection:text-[#CCFF00] min-h-screen flex flex-col justify-between`}
      >
        {children}
      </body>
    </html>
  );
}
