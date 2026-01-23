"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Facebook, Menu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-radial-blue relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      {/* Layer 1: Background Shield (Escudo) */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20 pointer-events-none">
        <Image
          src="/assets/uploaded_image_2_1769136748167.jpg"
          alt="Escudo Background"
          width={800}
          height={800}
          className="w-[120%] h-auto object-contain animate-pulse-fast blur-sm grayscale opacity-30"
        />
      </div>

      {/* Layer 2: Marquee Background (Inclined & Blinking) */}
      <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none flex flex-col justify-center items-center">
        <div className="w-[150%] -rotate-6 space-y-8 opacity-50">
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
        <div className="w-48 h-12 relative flex items-center">
          <h1 className="text-white font-black text-2xl italic tracking-tighter">TALENTO<span className="text-sm align-top">con</span>TARIFA</h1>
        </div>

        <div className="flex gap-6 text-white text-sm font-bold tracking-widest uppercase items-center">
          <Link href="#" className="hidden md:block hover:text-primary transition-colors">Paquetes</Link>
          <Link href="#" className="hidden md:block hover:text-primary transition-colors">Orientación</Link>
          <Menu className="w-8 h-8 md:hidden cursor-pointer" />
        </div>
      </nav>

      {/* Main Content (Z-Index above marquee) */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mt-10">

        {/* Floating Glitch Brain */}
        <motion.div
          className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]"
          animate={{ translateY: [-15, 15, -15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/assets/uploaded_image_1_1769136748167.jpg"
            alt="Cerebro Talento"
            fill
            className="object-contain drop-shadow-[0_0_35px_rgba(0,240,255,0.6)] animate-glitch"
            priority
          />

          {/* Holographic Ring Effect */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 rotate-12 scale-110 animate-pulse-fast"></div>
          <div className="absolute inset-0 rounded-full border border-secondary/30 -rotate-12 scale-125"></div>
        </motion.div>

        {/* Text Content */}
        <div className="mt-4 md:mt-0 space-y-4 max-w-2xl relative z-20">
          <p className="text-xl md:text-2xl text-white font-medium italic">
            Lo único que nos importa es que tu <span className="text-secondary font-black">SERVICIO</span> o
            <span className="text-secondary font-black block md:inline"> PRODUCTO</span> se vea <span className="bg-accent text-black px-1 font-black transform -skew-x-12 inline-block">FREGÓN</span>,
          </p>
          <p className="text-xl md:text-2xl text-white font-medium italic">
            que tú te veas <span className="bg-accent text-black px-1 font-bold transform -skew-x-12 inline-block">FREGÓN</span> y que
          </p>

          <div className="relative">
            <div className="text-6xl md:text-8xl font-black italic text-secondary tracking-tighter leading-none" style={{ textShadow: '4px 4px 0px #000' }}>
              VENDAS, VENDAS,
            </div>
            <div className="text-7xl md:text-9xl font-black italic text-secondary tracking-tighter leading-none relative inline-block animate-glitch" style={{ textShadow: '4px 4px 0px #00f0ff' }}>
              VENDAS!!!
              <div className="absolute inset-0 bg-secondary/20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Social Footer */}
      <div className="absolute bottom-8 left-8 z-50">
        <div className="w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center">
          <span className="text-xs text-white/50">🛡️</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-50 flex gap-4">
        <Link href="https://wa.me/5211234567890" target="_blank" className="bg-[#25D366] p-2 rounded-full hover:scale-110 transition-transform shadow-[0_0_15px_#25D366]">
          <MessageCircle className="text-white w-8 h-8" />
        </Link>
        <Link href="https://www.facebook.com/talentocontarifa" target="_blank" className="bg-[#1877F2] p-2 rounded-full hover:scale-110 transition-transform shadow-[0_0_15px_#1877F2]">
          <Facebook className="text-white w-8 h-8" />
        </Link>
      </div>

    </main>
  );
}
