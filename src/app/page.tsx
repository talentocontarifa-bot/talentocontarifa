"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  Zap,
  Layout,
  TrendingUp,
  Play,
  Crosshair,
  Shield,
  BarChart
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// --- ANIMATION COMPONENTS ---
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

const ScaleIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

// --- UI COMPONENTS ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F0F0F0]/90 backdrop-blur-md border-b border-black/10 py-4 h-20 flex items-center">
    <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 relative bg-[#CCFF00] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <Image src="/icon.svg" alt="Icon" width={24} height={24} className="object-contain" />
        </div>
        <div className="relative w-40 h-10">
          {/* Logo forced to black as requested */}
          <Image
            src="/assets/horizontal.svg"
            alt="Talento con Tarifa"
            fill
            className="object-contain brightness-0"
          />
        </div>
      </div>
      <div className="hidden md:flex gap-8 font-bold text-sm tracking-widest">
        <a href="#manifiesto" className="hover:text-[#6db300] transition-colors">MANIFIESTO</a>
        <a href="#servicios" className="hover:text-[#6db300] transition-colors">SERVICIOS</a>
        <a href="#proceso" className="hover:text-[#6db300] transition-colors">PROCESO</a>
      </div>
      <button className="bg-black text-[#CCFF00] px-6 py-2 font-black uppercase text-sm border-2 border-transparent hover:bg-[#CCFF00] hover:text-black hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
        EMPEZAR
      </button>
    </div>
  </nav>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#F0F0F0]">
      {/* Background Grid - Fixed to stay behind content */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 font-bold text-xs uppercase tracking-widest mb-2 border-l-4 border-[#CCFF00]">
              <div className="relative w-4 h-4">
                <Image src="/icon.svg" alt="Icon" fill className="object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(84%) sepia(35%) saturate(466%) hue-rotate(15deg) brightness(108%) contrast(106%)' }} />
              </div>
              Agencia de Alto Rendimiento
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-black">
              DISEÑO QUE <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-white [-webkit-text-stroke:2px_black]">VENDE</span>
                <span className="absolute inset-0 bg-black skew-x-12 -z-0 transform scale-105"></span>
              </span> <br />
              O SE MUERE.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-lg leading-relaxed">
              El mercado es un campo de batalla. <br />
              Queremos ser tu <span className="font-bold bg-[#CCFF00]/50 px-1">ventaja injusta.</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="/form" className="h-16 px-10 bg-[#CCFF00] text-black font-black text-lg uppercase tracking-wider border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all flex items-center justify-center gap-2">
                INICIAR MISIÓN <ArrowRight strokeWidth={3} />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Hero Visual */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <motion.div
            style={{ rotate }}
            className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px]"
          >
            {/* Circle Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#CCFF00] to-transparent opacity-30 animate-pulse blur-3xl"></div>

            <Image
              src="/assets/cerebro.webp"
              alt="Brain"
              fill
              className="object-contain drop-shadow-2xl relative z-10"
              priority
            />

            {/* Floating Stats */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-10 -left-4 md:-left-12 bg-white p-4 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-20 max-w-[240px]"
            >
              <div className="text-4xl font-black text-black mb-1">90%</div>
              <div className="text-xs font-bold text-gray-500 uppercase leading-tight">DE LAS MARCAS SON RUIDO. SEA LA SEÑAL.</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Marquee = () => (
  <div className="bg-black text-[#CCFF00] border-y-4 border-black py-4 overflow-hidden rotate-1 scale-[1.02] relative z-20">
    <div className="flex whitespace-nowrap animate-marquee">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center gap-8 mx-4">
          <span className="text-4xl font-black tracking-tight">RÁPIDOS</span>
          <div className="relative w-8 h-8">
            <Image
              src="/icon.svg"
              alt="Icon"
              fill
              className="object-contain drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              style={{ filter: 'brightness(0) saturate(100%) invert(76%) sepia(59%) saturate(637%) hue-rotate(66deg) brightness(101%) contrast(101%)' }}
            />
          </div>
          <span className="text-4xl text-transparent [-webkit-text-stroke:1px_#CCFF00] font-black tracking-tight">RAPACES</span>
          <div className="relative w-8 h-8">
            <Image
              src="/icon.svg"
              alt="Icon"
              fill
              className="object-contain drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              style={{ filter: 'brightness(0) saturate(100%) invert(76%) sepia(59%) saturate(637%) hue-rotate(66deg) brightness(101%) contrast(101%)' }}
            />
          </div>
          <span className="text-4xl font-black tracking-tight">ASTUTOS</span>
          <div className="relative w-8 h-8">
            <Image
              src="/icon.svg"
              alt="Icon"
              fill
              className="object-contain drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              style={{ filter: 'brightness(0) saturate(100%) invert(76%) sepia(59%) saturate(637%) hue-rotate(66deg) brightness(101%) contrast(101%)' }}
            />
          </div>
        </div>
      ))}
    </div>
    <style jsx>{`
            .animate-marquee { animation: marquee 20s linear infinite; }
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
         `}</style>
  </div>
);

const BentoGrid = () => (
  <section id="servicios" className="py-24 bg-white relative">
    <div className="container mx-auto px-6 max-w-7xl">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-black text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
              NUESTRO <br /> ARSENAL
            </h2>
          </div>
          <p className="text-xl font-medium max-w-md text-gray-600 border-l-4 border-black pl-4">
            Herramientas diseñadas para una sola cosa: <br />
            <strong className="text-black">Destruir a tu competencia.</strong>
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* Branding - Tall Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-1 md:row-span-2 bg-[#F5F5F5] border-2 border-black p-8 relative overflow-hidden group flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Shield size={120} strokeWidth={1} color="black" />
          </div>
          <div>
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center mb-6 rounded-none">
              <Crosshair size={24} />
            </div>
            <h3 className="text-3xl font-black uppercase mb-4">Branding<br />Táctico</h3>
            <p className="font-medium text-gray-600">Identidades visuales que no solo se ven bien, sino que comunican autoridad instantánea.</p>
          </div>
          <ul className="space-y-2 mt-8 font-bold text-sm">
            <li className="flex gap-2"><Check size={16} /> Logo & Sistema</li>
            <li className="flex gap-2"><Check size={16} /> Voz de Marca</li>
            <li className="flex gap-2"><Check size={16} /> Manual de Guerra</li>
          </ul>
        </motion.div>

        {/* Web Dev - Wide Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-black text-white p-10 border-2 border-black flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#CCFF00] opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <div className="relative z-10 flex-1">
            <h3 className="text-3xl font-black uppercase mb-2 text-[#CCFF00]">Sitios Web de Combate</h3>
            <p className="text-gray-300 text-lg">Landing pages optimizadas para conversión. Cero distracciones, 100% ventas.</p>
          </div>
          <div className="relative z-10 bg-white/10 p-4 rounded border border-white/20 backdrop-blur">
            <Layout size={48} className="text-[#CCFF00]" />
          </div>
        </motion.div>

        {/* Ads - Standard Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-[#CCFF00] border-2 border-black p-8 flex flex-col justify-center"
        >
          <TrendingUp size={48} className="mb-4 text-black" />
          <h3 className="text-2xl font-black uppercase mb-2">Tráfico Pago</h3>
          <p className="font-bold text-black/80">Meta & Google Ads. Ponemos tu oferta frente a los ojos correctos.</p>
        </motion.div>

        {/* Content - Standard Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white border-2 border-black p-8 flex flex-col justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]"
        >
          <Play size={48} className="mb-4 text-black" />
          <h3 className="text-2xl font-black uppercase mb-2">Contenido</h3>
          <p className="font-medium text-gray-600">Síntesis Digital. Dirección creativa potenciada por modelos de IA Generativa de vanguardia.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProcessStep = ({ num, title, desc }: any) => (
  <div className="flex gap-6 items-start group">
    <div className="w-16 h-16 shrink-0 bg-white border-2 border-black flex items-center justify-center text-2xl font-black shadow-[4px_4px_0px_0px_black] group-hover:bg-[#CCFF00] transition-colors duration-300">
      {num}
    </div>
    <div>
      <h3 className="text-2xl font-black uppercase mb-2">{title}</h3>
      <p className="text-gray-600 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Process = () => (
  <section id="proceso" className="py-24 bg-[#F0F0F0] border-t border-black/5">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-black uppercase mb-12">CÓMO TRABAJAMOS</h2>
          <div className="space-y-12">
            <ProcessStep
              num="01"
              title="Diagnóstico Implacable"
              desc="La verdad es incómoda pero rentable. Revelamos las ineficiencias narrativas que su competencia agradece."
            />
            <ProcessStep
              num="02"
              title="Ingeniería de Precisión"
              desc="Cada pixel y cada palabra tienen un propósito financiero. Nada es azar. Estructura y forma."
            />
            <ProcessStep
              num="03"
              title="Escalado"
              desc="Lanzamos mísiles teledirigidos al mercado. Optimización constante hasta la dominación."
            />
          </div>
        </div>
        <div className="relative h-[600px] border-2 border-black bg-white p-4 hidden lg:block shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-gray-100 h-full w-full flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent"></div>
            <div className="relative z-10 w-full max-w-sm">
              <div className="bg-black text-[#CCFF00] p-4 font-black uppercase text-xl flex justify-between items-center mb-4">
                <span>ARCHIVO CONFIDENCIAL</span>
                <div className="w-3 h-3 bg-[#CCFF00] rounded-full animate-pulse"></div>
              </div>
              <div className="bg-white border-2 border-black p-8 relative">
                <div className="absolute -top-3 -left-3 bg-[#CCFF00] text-black text-xs font-bold px-2 py-1 rotate-[-5deg] border border-black uppercase">
                  Solo Personal Autorizado
                </div>
                <h3 className="font-black text-3xl uppercase mb-6 leading-none">NUESTRO MANIFIESTO</h3>
                <div className="space-y-4 font-mono font-medium text-sm leading-relaxed text-gray-800">
                  <p>Mercenarios del marketing.</p>
                  <p>Rápidos, rapaces y sigilosos.</p>
                  <p>Nos vendemos al mejor postor y entregamos resultados tangibles.</p>
                  <p className="font-bold border-t-2 border-black pt-4 mt-4">Sin ruido. Sin piedad. Sin excusas.</p>
                </div>
                <div className="mt-8 flex justify-end">
                  <Shield size={32} className="text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 bg-black text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter">
        ¿LISTO PARA <span className="text-[#CCFF00]">DOMINAR?</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <a href="/form" className="group bg-[#CCFF00] text-black h-20 px-12 text-2xl font-black uppercase tracking-wider flex items-center justify-center gap-4 hover:bg-white transition-all shadow-[8px_8px_0px_0px_white] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] hover:translate-x-1 hover:translate-y-1">
          INICIAR PROYECTO <ArrowRight size={32} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
      <p className="mt-8 text-gray-500 font-mono text-sm uppercase tracking-widest">
        SOLO ACEPTAMOS 5 PROYECTOS AL MES.
      </p>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="font-sans bg-[#F0F0F0] text-black selection:bg-black selection:text-[#CCFF00] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <BentoGrid />
      <Process />
      <CTA />

      <footer className="bg-black text-gray-600 py-8 border-t border-gray-900 text-center font-mono text-xs uppercase tracking-widest">
        <p>© 2026 TALENTO CON TARIFA. HECHO CON ODIO AL DISEÑO ABURRIDO.</p>
      </footer>
    </div>
  );
}
