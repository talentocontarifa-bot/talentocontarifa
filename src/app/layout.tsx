import type { Metadata } from "next";
import { Share_Tech_Mono, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Talento con Tarifa | Agencia Irreverente",
  description: "Tu agencia irreverente. Vendes o te vas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${shareTechMono.variable} ${inter.variable} antialiased font-sans bg-[#050510] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
