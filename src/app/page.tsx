"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Rocket, DollarSign, Menu, X, ArrowRight, Star } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PAQUETES', href: '#paquetes' },
    { name: 'ORIENTACIÓN', href: '#orientacion' },
    { name: 'MANIFIESTO', href: '#manifiesto' },
  ];

  return (
    <div className="min-h-screen bg-[#F0F0F0] font-sans text-black selection:bg-black selection:text-[#CCFF00]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b-4 border-black ${scrolled ? 'bg-white py-2' : 'bg-[#CCFF00] py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-black flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform p-2 border-2 border-black shadow-[2px_2px_0px_0px_#CCFF00]">
                {/* Filter to turn the icon Neon Yellow (#CCFF00) */}
                <Image
                  src="/icon.svg"
                  alt="Icono"
                  width={32}
                  height={32}
                  className="object-contain"
                  style={{ filter: 'invert(82%) sepia(55%) saturate(738%) hue-rotate(24deg) brightness(103%) contrast(104%)' }}
                />
              </div>
              <div className="relative w-40 h-10 md:w-64 md:h-12 ml-2">
                <Image src="/assets/horizontal.svg" alt="Talento con Tarifa" fill className="object-contain grayscale brightness-0" />
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="font-black text-lg hover:underline decoration-4 underline-offset-4 decoration-black">
                  {link.name}
                </a>
              ))}
              <button className="bg-black text-white px-6 py-2 font-bold border-2 border-transparent hover:bg-white hover:text-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                EJECUTAR VENTAS
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 border-2 border-black bg-white hover:bg-gray-100">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black text-white border-b-4 border-black">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-2xl font-black hover:text-[#CCFF00] tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-[#CCFF00] text-black px-6 py-4 font-black text-xl border-2 border-white hover:bg-white transition-colors">
                EJECUTAR VENTAS !!!
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 relative overflow-hidden bg-[#CCFF00]">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-block bg-black text-white px-4 py-1 font-bold text-sm transform -rotate-2">
              AGENCIA IRREVERENTE
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter">
              TU MARCA <br />
              <span className="bg-white px-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black inline-block transform rotate-1 my-2">SE VE FREGÓN</span> <br />
              O NO SE VENDE.
            </h1>
            <p className="text-xl md:text-2xl font-bold max-w-lg border-l-8 border-black pl-6 py-2">
              Lo único que nos importa es que vendas, vendas y VENDAS. Sin rodeos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-black text-[#CCFF00] px-8 py-4 text-xl font-black border-4 border-black hover:bg-transparent hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 group">
                <Rocket className="group-hover:-translate-y-1 transition-transform" />
                QUIERO VENDER
              </button>
              <button className="bg-white text-black px-8 py-4 text-xl font-black border-4 border-black hover:bg-gray-100 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                VER PAQUETES
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center relative">
            {/* Abstract visual representation of "The Brain" */}
            {/* Free Floating Brain (No Circle) */}
            <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] hover:scale-105 transition-transform duration-500">
              <Image
                src="/assets/cerebro.webp"
                alt="Cerebro Agencial"
                fill
                className="object-contain drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] animate-float"
              />

              <div className="absolute -bottom-4 -right-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-6 z-20">
                <p className="font-black text-center text-sm">DON'T TOUCH <br /> THE BRAIN</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Marquee Strip */}
      <div className="bg-black text-white py-4 overflow-hidden border-y-4 border-black rotate-1 scale-105 z-20 relative">
        <div className="whitespace-nowrap animate-marquee flex gap-8">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-2xl font-black mx-4 flex items-center gap-4">
              SE RENTA TALENTO
              <span className="relative w-8 h-8">
                <Image src="/icon.svg" alt="*" fill className="object-contain brightness-0 invert" />
              </span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </div>

      {/* Philosophy Section */}
      <section id="manifiesto" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="border-4 border-black p-8 bg-[#F0F0F0] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-3xl font-black mb-4">¿POR QUÉ NOSOTROS?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-black text-[#CCFF00] p-1 mt-1"><ArrowRight size={16} /></div>
                    <span className="font-bold text-lg">Odiamos el diseño aburrido.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-black text-[#CCFF00] p-1 mt-1"><ArrowRight size={16} /></div>
                    <span className="font-bold text-lg">Tu producto merece verse increíble.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-black text-[#CCFF00] p-1 mt-1"><ArrowRight size={16} /></div>
                    <span className="font-bold text-lg">No vendemos humo, vendemos resultados.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6 uppercase">
                Hacemos que tu servicio se vea <span className="bg-[#CCFF00] px-2 italic">FREGÓN</span>.
              </h2>
              <p className="text-xl font-medium leading-relaxed mb-6">
                No somos una agencia tradicional con trajes y corbatas. Somos el cerebro creativo que necesitas para dejar de ser invisible.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-1 flex-1 bg-black"></div>
                <DollarSign size={48} className="text-black" />
                <div className="h-1 flex-1 bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="paquetes" className="py-24 px-4 bg-black text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
              PAQUETES <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-green-500">DEVASTADORES</span>
            </h2>
            <p className="text-gray-400 text-xl font-bold max-w-2xl mx-auto">
              Elige tu arma. Todo lo que necesitas para dominar tu mercado sin vender un riñón.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white text-black p-8 border-4 border-[#CCFF00] hover:translate-y-[-10px] transition-transform duration-300 relative group">
              <div className="absolute -top-6 -right-6 bg-[#CCFF00] text-black px-4 py-2 font-black border-2 border-black transform rotate-12 group-hover:rotate-0 transition-transform">
                BÁSICO
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase">Despegue</h3>
              <div className="text-5xl font-black mb-6">$XX<span className="text-2xl font-bold">.00</span></div>
              <ul className="space-y-3 mb-8">
                <li className="font-bold border-b border-gray-200 pb-2">Branding Esencial</li>
                <li className="font-bold border-b border-gray-200 pb-2">3 Post para Redes</li>
                <li className="font-bold border-b border-gray-200 pb-2">Asesoría de Impacto</li>
              </ul>
              <button className="w-full bg-black text-white py-4 font-black text-lg border-2 border-black hover:bg-[#CCFF00] hover:text-black transition-colors">
                LO QUIERO
              </button>
            </div>

            {/* Card 2 (Featured) */}
            <div className="bg-[#CCFF00] text-black p-8 border-4 border-white transform md:-translate-y-8 shadow-[0px_0px_40px_rgba(204,255,0,0.3)] relative">
              <div className="absolute top-0 left-0 w-full bg-black text-white text-center py-1 font-bold uppercase tracking-widest text-sm">
                Más Popular
              </div>
              <h3 className="text-4xl font-black mb-4 uppercase mt-6">Dominio</h3>
              <div className="text-6xl font-black mb-6">$XX<span className="text-3xl font-bold">.00</span></div>
              <ul className="space-y-3 mb-8">
                <li className="font-black border-b border-black pb-2">Rebranding Total</li>
                <li className="font-black border-b border-black pb-2">Estrategia de Ventas</li>
                <li className="font-black border-b border-black pb-2">Sitio Web One-Page</li>
                <li className="font-black border-b border-black pb-2">Campañas Ads</li>
              </ul>
              <button className="w-full bg-white text-black py-4 font-black text-lg border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                CONTRATAR AHORA
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-black p-8 border-4 border-[#CCFF00] hover:translate-y-[-10px] transition-transform duration-300 relative group">
              <h3 className="text-3xl font-black mb-4 uppercase">Imperio</h3>
              <div className="text-5xl font-black mb-6">$XX<span className="text-2xl font-bold">.00</span></div>
              <ul className="space-y-3 mb-8">
                <li className="font-bold border-b border-gray-200 pb-2">Todo incluido</li>
                <li className="font-bold border-b border-gray-200 pb-2">Consultoría 24/7</li>
                <li className="font-bold border-b border-gray-200 pb-2">Desarrollo a Medida</li>
              </ul>
              <button className="w-full bg-black text-white py-4 font-black text-lg border-2 border-black hover:bg-[#CCFF00] hover:text-black transition-colors">
                COTIZAR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-[#CCFF00] pt-20 pb-10 px-4 border-t-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black text-black mb-8 leading-none">
            ¿LISTO PARA <br /> VENDER?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <button className="bg-black text-white px-10 py-5 text-2xl font-black border-4 border-transparent hover:bg-white hover:text-black hover:border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              WHATSAPP
            </button>
            <button className="bg-transparent text-black px-10 py-5 text-2xl font-black border-4 border-black hover:bg-black hover:text-[#CCFF00] transition-all">
              EMAIL
            </button>
          </div>

          <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-bold">
            <p>Talento con Tarifa © {new Date().getFullYear()}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
