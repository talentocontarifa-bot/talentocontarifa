"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, Zap, Facebook, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-radial-blue relative overflow-hidden flex flex-col items-center justify-center p-4">

      {/* Layer 1: Background Shield (Escudo) from SVG */}
      <div className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
        <Image
          src="/assets/escudo.svg"
          alt="Escudo Background"
          width={900}
          height={900}
          className="w-[100%] md:w-[70%] h-auto object-contain opacity-50"
        />
      </div>

      {/* Layer 2: Marquee Background (Inclined & Blinking) */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none flex flex-col justify-center items-center">
        <div className="w-[150%] -rotate-6 space-y-8 opacity-40">
          <div className="animate-marquee whitespace-nowrap flex gap-8">
            {Array(20).fill("SE RENTA").map((txt, i) => (
              <span key={i} className={`text-8xl font-black italic tracking-tighter ${i % 2 === 0 ? 'text-stroke-primary' : 'text-primary'} animate-pulse-fast`}>
                {txt}
              </span>
            ))}
          </div>
          <div className="animate-marquee whitespace-nowrap flex gap-8" style={{ animationDirection: 'reverse' }}>
            {Array(20).fill("SE RENTA").map((txt, i) => (
              <span key={i} className={`text-8xl font-black italic tracking-tighter ${i % 2 !== 0 ? 'text-stroke-white' : 'text-white'} opacity-30`}>
                {txt}
              </span>
            ))}
          </div>
          <div className="animate-marquee whitespace-nowrap flex gap-8">
            {Array(20).fill("SE RENTA").map((txt, i) => (
              <span key={i} className={`text-8xl font-black italic tracking-tighter ${i % 2 === 0 ? 'text-stroke-primary' : 'text-primary'} animate-pulse-fast`}>
                {txt}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-6 py-6 z-50">
        <div className="relative w-48 h-12">
          {/* Using Image 2 (Horizontal Logo) */}
          <Image
            src="/assets/uploaded_image_2_1769137813079.png"
            alt="Talento con Tarifa Logo"
            fill
            className="object-contain object-left"
          />
        </div>

        <div className="flex gap-6 text-white text-sm font-bold tracking-widest uppercase items-center">
          <Link href="#" className="hidden md:block hover:text-primary transition-colors hover:shadow-[0_0_10px_#00f0ff]">Paquetes</Link>
          <Link href="#" className="hidden md:block hover:text-primary transition-colors hover:shadow-[0_0_10px_#00f0ff]">Orientación</Link>
          <Menu className="w-8 h-8 md:hidden cursor-pointer" />
        </div>
      </nav>

      {/* Main Content (Z-Index above marquee) */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mt-12 md:mt-4">

        {/* Floating Glitch Brain (Image 0) */}
        <motion.div
          className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]"
          animate={{ translateY: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative w-full h-full glitch-wrapper" data-text="CEREBRO"> {/* Wrapper for glitch context if needed, but applied to image container */}
            <Image
              src="/assets/cerebro.webp"
              alt="Cerebro Talento"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.4)] animate-glitch"
              priority
            />
          </div>

          {/* Holographic Ring Effect */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 rotate-12 scale-110 animate-pulse-fast"></div>
          <div className="absolute inset-0 rounded-full border border-secondary/20 -rotate-12 scale-125"></div>
        </motion.div>

        {/* Text Content */}
        <div className="mt-8 mb-4 space-y-4 max-w-3xl relative z-20 px-4">
          <p className="text-xl md:text-3xl text-white font-medium italic leading-relaxed">
            Lo único que nos importa es que tu <span className="text-secondary font-black">SERVICIO</span> o
            <span className="text-secondary font-black block md:inline"> PRODUCTO</span> se vea <span className="bg-accent text-black px-2 font-black transform -skew-x-12 inline-block shadow-[4px_4px_0_rgba(0,0,0,1)]">FREGÓN</span>,
          </p>
          <p className="text-xl md:text-3xl text-white font-medium italic">
            que tú te veas <span className="bg-accent text-black px-2 font-bold transform -skew-x-12 inline-block shadow-[4px_4px_0_rgba(0,0,0,1)]">FREGÓN</span> y que
          </p>

          <div className="relative mt-6">
            <div className="text-5xl md:text-8xl font-black italic text-secondary tracking-tighter leading-none glitch-wrapper" data-text="VENDAS, VENDAS,">
              VENDAS, VENDAS,
            </div>
            <div className="block mt-2">
              <div className="text-6xl md:text-9xl font-black italic text-secondary tracking-tighter leading-none glitch-wrapper" data-text="VENDAS!!!">
                VENDAS!!!
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
          whileTap={{ scale: 0.95 }}
          className="relative group px-10 py-6 mt-6 bg-transparent border-4 border-accent text-accent font-black text-2xl md:text-3xl uppercase tracking-widest overflow-hidden shadow-[0_0_20px_rgba(57,255,20,0.4)]"
        >
          <span className="absolute inset-0 w-full h-full bg-accent/10 group-hover:bg-accent/20 transition-all"></span>
          <span className="relative z-10 flex items-center gap-3">
            Ejecutar Ventas
          </span>
        </motion.button>

      </div>

      {/* Social Footer - Bottom Right Corner */}
      <div className="absolute bottom-6 right-6 z-50 flex gap-4">
        <Link href="https://www.facebook.com/talentocontarifa" target="_blank" className="hover:scale-110 transition-transform">
          <Facebook className="text-white w-10 h-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
        </Link>
        <Link href="https://wa.me/5211234567890" target="_blank" className="hover:scale-110 transition-transform">
          <MessageCircle className="text-white w-10 h-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
        </Link>
      </div>

    </main>
  );
}
