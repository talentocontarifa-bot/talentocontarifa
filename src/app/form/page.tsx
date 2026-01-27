"use client";

import React, { useState, useEffect } from 'react';
import {
    Send,
    MessageSquare,
    Target,
    MapPin,
    Mail,
    Phone,
    User,
    ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// --- CONFIGURACIÓN DE ESTILO NEO-BRUTALIST ---
const THEME = {
    bg: "bg-[#F0F0F0]",
    fg: "text-black",
    panel: "bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    input: "bg-white border-4 border-black p-4 text-black placeholder-gray-500 focus:outline-none focus:shadow-[4px_4px_0px_0px_#CCFF00] transition-all font-bold",
    accent: "text-[#CCFF00]",
    accentBg: "bg-[#CCFF00]",
    fontDisplay: "font-mono", // Share Tech Mono
    fontBody: "font-sans",    // Inter
};

// --- COMPONENTES ATÓMICOS ---
const GridBackground = () => (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-10"
        style={{
            backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)',
            backgroundSize: '24px 24px'
        }}>
    </div>
);

const FriendlyInput = ({ label, icon: Icon, value, onChange, placeholder, type = "text", required = false }: any) => (
    <div className="group relative mb-8">
        <label className="text-black font-black text-lg mb-2 flex items-center gap-2 uppercase">
            {Icon && <Icon size={20} />} {label} {required && <span className="text-red-600">*</span>}
        </label>

        <div className="relative">
            {type === 'textarea' ? (
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    rows={4}
                    className={`${THEME.input} w-full text-lg resize-none`}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={`${THEME.input} w-full text-xl h-16`}
                />
            )}
        </div>
    </div>
);

const Button = ({ onClick, disabled, variant = 'primary', children, className = '' }: any) => {
    const baseStyle = "h-14 px-8 font-black text-lg uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-3 border-4 border-black active:translate-y-1 active:shadow-none cursor-pointer w-full md:w-auto";

    const variants: any = {
        primary: "bg-black text-[#CCFF00] hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#CCFF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        success: "bg-[#CCFF00] text-black hover:bg-black hover:text-[#CCFF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
    };

    return (
        <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

export default function ContactForm() {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        location: '',
        source: '',
        pain: ''
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleInput = (field: string, val: string) => {
        setFormData(prev => ({ ...prev, [field]: val }));
    };

    const generateWhatsAppLink = () => {
        const message = `
🔥 SOLICITUD DE CONTACTO - TALENTO CON TARIFA
----------------------------------------
👤 NOMBRE: ${formData.name}
📱 TELÉFONO: ${formData.phone}
📧 EMAIL: ${formData.email}
📍 UBICACIÓN: ${formData.location}

🔍 ¿CÓMO LLEGÓ?: ${formData.source}

💀 DOLOR/NECESIDAD:
${formData.pain}
----------------------------------------`.trim();

        return `https://wa.me/5219845828658?text=${encodeURIComponent(message)}`;
    };

    if (!mounted) return null;

    return (
        <div className={`min-h-screen ${THEME.bg} ${THEME.fg} ${THEME.fontDisplay} flex flex-col md:flex-row overflow-hidden selection:bg-black selection:text-[#CCFF00]`}>
            <GridBackground />

            {/* SIDEBAR (Info) */}
            <aside className="w-full md:w-[400px] border-b-4 md:border-b-0 md:border-r-4 border-black bg-white z-20 relative flex flex-col justify-between shrink-0">
                <div className="p-8 border-b-4 border-black bg-[#CCFF00]">
                    <div className="flex items-center gap-3 text-black">
                        <div className="p-1 text-[#CCFF00] w-12 h-12 relative">
                            <Image
                                src="/icon.svg"
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <span className="font-black text-2xl tracking-tighter block leading-none">TALENTO<br />CON TARIFA</span>
                        </div>
                    </div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter">
                        HABLA <br />
                        <span className="bg-black text-white px-2">AHORA</span>
                    </h1>
                    <p className="font-bold text-lg text-gray-700 border-l-4 border-black pl-4">
                        Cuéntanos qué te duele y nosotros traeremos la morfina (o el arsenal).
                    </p>

                    <div className="space-y-4 pt-8">
                        <div className="flex items-center gap-3 font-bold">
                            <div className="bg-black text-[#CCFF00] p-2"><Mail size={20} /></div>
                            <span>contacto@talentocontarifa.lat</span>
                        </div>
                        <div className="flex items-center gap-3 font-bold">
                            <div className="bg-black text-[#CCFF00] p-2"><Phone size={20} /></div>
                            <span>+52 1 984 582 8658</span>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-black text-[#CCFF00] text-center font-bold text-sm uppercase tracking-widest">
                    TIEMPO DE RESPUESTA: INMEDIATO
                </div>
            </aside>

            {/* FORM AREA */}
            <main className="flex-grow relative z-10 overflow-y-auto custom-scrollbar p-6 md:p-12 lg:p-24 flex items-center justify-center">
                <div className="max-w-2xl w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-2"
                    >
                        <FriendlyInput
                            label="NOMBRE COMPLETO"
                            icon={User}
                            placeholder="EJ. TONY STARK"
                            value={formData.name}
                            onChange={(v: string) => handleInput('name', v)}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FriendlyInput
                                label="TELÉFONO"
                                icon={Phone}
                                placeholder="WHATSAPP PREFERIBLE"
                                value={formData.phone}
                                onChange={(v: string) => handleInput('phone', v)}
                            />
                            <FriendlyInput
                                label="CORREO"
                                icon={Mail}
                                placeholder="HUMANO@EMPRESA.COM"
                                value={formData.email}
                                onChange={(v: string) => handleInput('email', v)}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FriendlyInput
                                label="¿DE DÓNDE ERES?"
                                icon={MapPin}
                                placeholder="CDMX, MONTERREY, MARTE..."
                                value={formData.location}
                                onChange={(v: string) => handleInput('location', v)}
                            />
                            <FriendlyInput
                                label="¿CÓMO LLEGASTE?"
                                icon={Target}
                                placeholder="INSTAGRAM, RECOMENDACIÓN..."
                                value={formData.source}
                                onChange={(v: string) => handleInput('source', v)}
                            />
                        </div>

                        <FriendlyInput
                            type="textarea"
                            label="¿QUÉ TE DUELE? / ¿QUÉ NECESITAS?"
                            icon={MessageSquare}
                            placeholder="EJ. MI SITIO WEB APESTA Y NO VENDO NADA."
                            value={formData.pain}
                            onChange={(v: string) => handleInput('pain', v)}
                        />

                        <div className="pt-8">
                            <a
                                href={generateWhatsAppLink()}
                                target="_blank"
                                className="block w-full"
                            >
                                <Button variant="primary" className="w-full h-20 text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    ENVIAR SOLICITUD <Send size={24} strokeWidth={3} />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
