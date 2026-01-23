"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-radial-blue relative overflow-hidden flex flex-col items-center justify-center p-4">

      {/* Layer 1: Marquee Background (3 Lines, Tighter, Behind Brain) */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center items-center mix-blend-overlay pointer-events-none opacity-40">
        <div className="w-[150%] -rotate-12 space-y-4">

          {/* Row 1 */}
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-baseline">
            {Array(20).fill("SE RENTA").map((txt, i) => (
              <span key={i} className={`font-black tracking-tighter text-white/60 
                ${i % 3 === 0 ? 'text-4xl md:text-6xl font-serif italic' : i % 3 === 1 ? 'text-3xl md:text-5xl font-mono' : 'text-5xl md:text-7xl font-sans'}
              `}>
                {txt}
              </span>
            ))}
          </div>

          {/* Row 2 (Reverse) */}
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-baseline" style={{ animationDirection: 'reverse' }}>
            {Array(20).fill("SE RENTA").map((txt, i) => (
              <span key={i} className={`font-black tracking-tighter text-white/60 
                 ${i % 4 === 0 ? 'text-6xl md:text-8xl font-sans italic' : i % 4 === 1 ? 'text-4xl md:text-6xl font-serif' : 'text-5xl md:text-7xl font-mono'}
              `}>
                {txt}
              </span>
            ))}
          </div>

          {/* Row 3 */}
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-baseline">
            {Array(20).fill("SE RENTA").map((txt, i) => (
              <span key={i} className={`font-black tracking-tighter text-white/60 
                 ${i % 5 === 0 ? 'text-4xl md:text-6xl font-mono italic' : i % 5 === 1 ? 'text-5xl md:text-7xl font-sans' : 'text-3xl md:text-5xl font-serif'}
              `}>
                {txt}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-6 py-6 z-50">
        <div className="relative w-48 h-12">
          {/* Using Horizontal Logo SVG - White Filter */}
          <Image
            src="/assets/horizontal.svg"
            alt="Talento con Tarifa Logo"
            fill
            className="object-contain object-left brightness-0 invert"
          />
        </div>

        <div className="flex gap-4 text-white items-center">
          <Link href="#" className="hidden md:block text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors hover:shadow-[0_0_10px_#00f0ff] hover:text-stroke-primary mr-4">Paquetes</Link>
          <Link href="#" className="hidden md:block text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors hover:shadow-[0_0_10px_#00f0ff] hover:text-stroke-primary mr-4">Orientación</Link>

          {/* Social Icons moved to Header */}
          <Link href="https://www.facebook.com/talentocontarifa" target="_blank" className="hover:scale-110 transition-transform">
            <Facebook className="text-white w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
          </Link>
          <Link href="https://wa.me/5211234567890" target="_blank" className="hover:scale-110 transition-transform">
            <MessageCircle className="text-white w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
          </Link>
        </div>
      </nav>

      {/* Main Content (Z-Index above marquee) */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mt-12 md:mt-4">

        {/* Floating Glitch Brain (Cerebro WebP) */}
        <motion.div
          className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]"
          animate={{ translateY: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative w-full h-full glitch-wrapper" data-text="CEREBRO">
            <Image
              src="/assets/cerebro.webp"
              alt="Cerebro Talento"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.4)] animate-glitch"
              priority
            />
          </div>

        </motion.div>

        {/* Text Content */}
        <div className="mt-8 mb-4 space-y-4 max-w-3xl relative z-20 px-4">
          {/* Boxed Text Block */}
          <div className="bg-black p-6 md:p-8 transform -skew-x-3 shadow-[10px_10px_0_rgba(255,0,60,0.5)] border border-white/10">
            <p className="text-xl md:text-3xl text-white font-medium italic leading-relaxed transform skew-x-3">
              Lo único que nos importa es que tu <span className="text-secondary font-black">SERVICIO</span> o
              <span className="text-secondary font-black block md:inline"> PRODUCTO</span> se vea <span className="bg-accent text-black px-2 font-black transform -skew-x-12 inline-block shadow-[4px_4px_0_rgba(0,0,0,1)]">FREGÓN</span>,
            </p>
            <p className="text-xl md:text-3xl text-white font-medium italic mt-2 transform skew-x-3">
              que tú te veas <span className="bg-accent text-black px-2 font-bold transform -skew-x-12 inline-block shadow-[4px_4px_0_rgba(0,0,0,1)]">FREGÓN</span> y que
            </p>
          </div>

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

        {/* Small White Shield as Footer Closer */}
        <div className="mt-16 opacity-50 hover:opacity-100 transition-opacity">
          <Image
            src="/assets/escudo.svg"
            alt="Talento Shield"
            width={60}
            height={60}
            className="brightness-0 invert"
          />
        </div>

      </div>

    </main>
  );
}
