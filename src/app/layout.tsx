import type { Metadata, Viewport } from "next";
import { Share_Tech_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CONTACT_EMAIL, SITE_URL, WHATSAPP_NUMBER } from "@/lib/contact";

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

const TITLE = "Talento con Tarifa | Agencia Irreverente // Brinca al Vacío";
const DESCRIPTION =
  "El mundo es vasto como tus necesidades. Brinca al vacío, Dorothy: háblame y veamos qué tan profundo llega el agujero del conejo. Bots de venta, cotizaciones en 15 segundos y seguimiento implacable.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "agencia de automatización",
    "bots de WhatsApp",
    "automatización de ventas",
    "cotizaciones automáticas",
    "Talento con Tarifa",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: "Talento con Tarifa",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/cerebro.webp", alt: "Cerebro Agencial Talento con Tarifa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/cerebro.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#CCFF00",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Talento con Tarifa",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: CONTACT_EMAIL,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      telephone: `+${WHATSAPP_NUMBER}`,
      availableLanguage: ["es"],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
