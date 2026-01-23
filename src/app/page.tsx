"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, Zap, Facebook, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510] relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Background Grid & Noise */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,20,0)50%,rgba(0,0,0,0.25)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>

      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center p-6 z-20">
        <div className="text-white font-bold text-xl tracking-tighter uppercase font-mono">
          Talento<span className="text-sm align-top mx-1">con</span>Tarifa
        </div>
        <button className="text-primary hover:text-white transition-colors">
          <Menu size={32} />
        </button>
      </nav>

      {/* Decorative Neon Lines */}
      <div className="absolute top-20 right-0 w-32 h-1 bg-gradient-to-l from-secondary to-transparent rotate-45 blur-sm opacity-70"></div>
      <div className="absolute bottom-20 left-0 w-48 h-1 bg-gradient-to-r from-primary to-transparent -rotate-45 blur-sm opacity-70"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">

        {/* Glitch Headline */}
        <div className="mb-8 space-y-2">
          <h1 className="text-5xl md:text-7xl font-black font-mono tracking-tighter text-white uppercase leading-none glitch-wrapper" data-text="TU AGENCIA">
            TU AGENCIA
          </h1>
          <h1 className="text-5xl md:text-7xl font-black font-mono tracking-tighter text-white uppercase leading-none glitch-wrapper" data-text="IRREVERENTE.">
            IRREVERENTE.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-white uppercase mt-4">
            VENDES O TE VAS.
          </h2>
        </div>

        {/* Mascot (Brain) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80 my-2"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        >
          {/* Hexagon Background behind brain */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent clip-path-hexagon blur-xl"></div>

          <Image
            src="/assets/uploaded_image_1_1769136748167.jpg"
            alt="Cerebro Talento"
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(255,0,60,0.5)] mixed-blend-screen"
            priority
          />

          {/* "RENTA" Visor Overlay Effect (Simulated if using image) */}
          <div className="absolute bottom-16 left-0 right-0 h-12 bg-gradient-to-r from-primary/80 to-blue-600/80 skew-x-12 flex items-center justify-center border-t border-b border-primary/50 shadow-[0_0_15px_#00f0ff]">
            <span className="font-mono text-black font-extrabold text-2xl tracking-widest animate-pulse">RENTA</span>
          </div>
        </motion.div>

        {/* Copy Text */}
        <div className="mt-8 mb-10 space-y-1">
          <p className="text-gray-300 text-lg md:text-xl font-medium italic">
            Lo único que nos importa es que tu <span className="text-secondary font-bold">SERVICIO</span> o
          </p>
          <p className="text-gray-300 text-lg md:text-xl font-medium italic">
            <span className="text-secondary font-bold">PRODUCTO</span> se vea <span className="bg-accent text-black px-1 font-bold">FREGÓN</span>,
          </p>
          <p className="text-gray-300 text-lg md:text-xl font-medium italic">
            que tú te veas <span className="bg-accent text-black px-1 font-bold">FREGÓN</span> y que
          </p>
          <p className="text-3xl md:text-5xl font-black text-secondary italic mt-4 tracking-tight">
            VENDAS, VENDAS,
          </p>
          <p className="text-4xl md:text-6xl font-black text-secondary italic tracking-tighter glitch-wrapper" data-text="VENDAS!!!">
            VENDAS!!!
          </p>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(255,255,255)" }}
          whileTap={{ scale: 0.95 }}
          className="relative group px-8 py-4 bg-transparent border-2 border-accent text-accent font-mono text-2xl font-bold uppercase tracking-widest overflow-hidden"
        >
          <span className="absolute inset-0 w-full h-full bg-accent/10 group-hover:bg-accent/20 transition-all"></span>
          <span className="relative z-10 flex items-center gap-2">
            <Zap className="w-6 h-6 animate-pulse" /> Ejecutar Ventas
          </span>
          {/* Glitch Borders */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white translate-x-1 translate-y-1"></div>
        </motion.button>
      </div>

      {/* Social Footer */}
      <div className="absolute bottom-6 w-full flex justify-between px-8 text-white">
        <MessageCircle size={32} className="cursor-pointer hover:text-green-400 transition-colors" />
        <Facebook size={32} className="cursor-pointer hover:text-blue-500 transition-colors" />
      </div>
    </main>
  );
}
