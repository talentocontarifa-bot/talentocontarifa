"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-radial-blue relative overflow-hidden flex flex-col items-center justify-center p-4">

      {/* Background Grunge Pattern - Tiled Glitch Effect 
          Instead of one big bg, we use a grid of divs to glitch independently 
      */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-multiply pointer-events-none grid grid-cols-4 grid-rows-4 overflow-hidden">
        {Array(16).fill(0).map((_, i) => (
          <div key={i} className="relative w-full h-full overflow-hidden">
            <div
              className={`absolute inset-0 bg-repeat bg-[length:300px] animate-glitch `}
              style={{
                backgroundImage: 'url("/assets/grunge_pattern.webp")',
                animationDelay: `${Math.random() * 5}s`, // Random delay per tile
                animationDuration: `${2 + Math.random() * 3}s` // Random speed
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Layer 1: Marquee Background (3 Lines, Diagonal -12deg, White, Exclusion) */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center items-center mix-blend-exclusion pointer-events-none opacity-80">
        <div className="w-[150%] -rotate-12 space-y-4">

          {/* Row 1 */}
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-baseline">
            {Array(20).fill("SE RENTA").map((txt, i) => (
              <span key={i} className={`font-black tracking-tighter text-white 
                ${i % 3 === 0 ? 'text-4xl md:text-6xl font-serif italic' : i % 3 === 1 ? 'text-3xl md:text-5xl font-mono' : 'text-5xl md:text-7xl font-sans'}
              `}>
                {txt}
              </span>
            ))}
          </div>

          {/* Row 2 (Reverse) */}
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-baseline" style={{ animationDirection: 'reverse' }}>
            {Array(20).fill("SE RENTA").map((txt, i) => (
              <span key={i} className={`font-black tracking-tighter text-white 
                 ${i % 4 === 0 ? 'text-6xl md:text-8xl font-sans italic' : i % 4 === 1 ? 'text-4xl md:text-6xl font-serif' : 'text-5xl md:text-7xl font-mono'}
              `}>
                {txt}
              </span>
            ))}
          </div>

          {/* Row 3 */}
          <div className="animate-marquee whitespace-nowrap flex gap-12 items-baseline">
            {Array(20).fill("SE RENTA").map((txt, i) => (
              <span key={i} className={`font-black tracking-tighter text-white 
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
          <Link href="https://wa.me/5219845828658" target="_blank" className="hover:scale-110 transition-transform">
            <MessageCircle className="text-white w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
          </Link>
        </div>
      </nav>

      {/* Main Content (Z-Index above marquee) */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mt-12 md:mt-4">

        {/* Floating Glitch Brain (Cerebro WebP) - Interactive */}
        <motion.div
          className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] cursor-pointer group"
          animate={{ translateY: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: [0, -5, 5, 0] }}
          onClick={() => {
            const audio = new Audio('/assets/coin.mp3');
            audio.play().catch(e => console.error(e));
          }}
        >
          <div className="relative w-full h-full glitch-wrapper" data-text="CEREBRO">
            <Image
              src="/assets/cerebro.webp"
              alt="Cerebro Talento"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.4)] animate-glitch group-hover:brightness-125 transition-all"
              priority
            />
          </div>
          {/* Click Hint */}
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-primary/50">
            DONT TOUCH THE BRAIN!
          </span>
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

        {/* Radioactive CTA Button */}
        <motion.button
          whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(0,0,0)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            // Optional: Another sound here?
          }}
          className="relative px-12 py-6 mt-8 rounded-full font-black text-2xl md:text-4xl italic tracking-tighter shadow-[0_0_40px_rgba(0,255,100,0.6)] overflow-visible group"
          style={{
            background: 'linear-gradient(90deg, #00FF9D 0%, #00F0FF 100%)',
            color: '#000030',
            border: '2px solid #fff'
          }}
        >
          {/* Glitch Artifacts */}
          <span className="absolute -left-2 top-1/2 w-4 h-1 bg-white animate-pulse"></span>
          <span className="absolute -right-2 top-1/3 w-3 h-1 bg-primary animate-ping"></span>

          <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
            EJECUTAR VENTAS
            {/* Simple radioactive icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              {/* Replaced clock with nuclear-ish shape if needed, sticking to simple punchy icon for now or standard radioactive symbol if pure svg */}
            </svg>
          </span>

          <div className="absolute inset-0 rounded-full blur-md bg-green-400 opacity-50 group-hover:opacity-100 animate-pulse-fast"></div>
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
