"use client";

import React, { useState, useEffect } from 'react';
import {
    ArrowRight,
    ArrowLeft,
    Check,
    Sparkles,
    Send,
    Heart,
    Copy,
    Terminal,
    Skull,
    Crosshair,
    Crown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

const Button = ({ onClick, disabled, variant = 'primary', children, className = '' }: any) => {
    const baseStyle = "h-14 px-8 font-black text-lg uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-3 border-4 border-black active:translate-y-1 active:shadow-none cursor-pointer";

    const variants: any = {
        primary: "bg-black text-[#CCFF00] hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#CCFF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        outline: "bg-transparent text-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        ghost: "border-transparent hover:bg-[#CCFF00]/20 text-black",
        success: "bg-[#CCFF00] text-black hover:bg-black hover:text-[#CCFF00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
    };

    return (
        <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

const FriendlyInput = ({ label, helpText, value, onChange, placeholder, type = "text" }: any) => (
    <div className="group relative mb-8">
        <label className="text-black font-black text-2xl mb-2 block uppercase transform -rotate-1 w-fit bg-[#CCFF00] px-2 border-2 border-black">
            {label}
        </label>
        {helpText && (
            <p className="text-gray-600 text-sm mb-4 font-bold border-l-4 border-black pl-3 my-2">
                {helpText}
            </p>
        )}

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

const RangeSlider = ({ leftLabel, rightLabel, value, onChange, description }: any) => (
    <div className="py-8 px-4 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
        <div className="flex justify-between mb-4 items-end font-black uppercase">
            <span className="bg-black text-white px-2 py-1 transform -rotate-2 text-sm">{leftLabel}</span>
            <span className="bg-black text-[#CCFF00] px-2 py-1 transform rotate-2 text-sm text-right">{rightLabel}</span>
        </div>

        <div className="relative h-14 flex items-center cursor-pointer">
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
            />
            {/* Track Background */}
            <div className="w-full h-4 border-2 border-black bg-gray-200 relative overflow-hidden">
                {/* Striped Fill */}
                <div
                    className="h-full bg-[#CCFF00] border-r-4 border-black"
                    style={{ width: `${value}%`, backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '10px 10px', opacity: 0.5 }}
                ></div>
            </div>

            {/* Thumb */}
            <motion.div
                className="absolute h-8 w-8 bg-black border-2 border-[#CCFF00] z-10 flex items-center justify-center transform hover:scale-125 transition-transform"
                style={{ left: `calc(${value}% - 16px)` }}
                layoutId="sliderThumb"
            >
                <div className="w-2 h-2 bg-[#CCFF00]" />
            </motion.div>
        </div>
        <p className="text-black font-mono text-xs mt-2 text-center font-bold border-t-2 border-black pt-2 uppercase tracking-tight">
            {description}
        </p>
    </div>
);

const ArchetypeCard = ({ title, subtitle, description, icon: Icon, selected, onClick }: any) => (
    <div
        onClick={onClick}
        className={`
      relative p-6 border-4 cursor-pointer transition-all duration-200 h-full flex flex-col gap-4 group
      ${selected
                ? 'border-black bg-[#CCFF00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] translate-x-[-4px] translate-y-[-4px]'
                : 'border-black bg-white hover:bg-gray-50 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-none'}
    `}
    >
        <div className="flex justify-between items-start">
            <div className={`p-3 border-2 border-black ${selected ? 'bg-black text-[#CCFF00]' : 'bg-[#CCFF00] text-black group-hover:bg-black group-hover:text-white transition-colors'}`}>
                <Icon size={32} strokeWidth={2.5} />
            </div>
            {selected && <div className="bg-black text-[#CCFF00] p-1"><Check size={24} strokeWidth={4} /></div>}
        </div>

        <div>
            <h3 className="text-2xl font-black uppercase text-black italic">{title}</h3>
            <span className="text-sm font-bold bg-black text-white px-2 py-0.5 inline-block mb-3 transform -rotate-1">{subtitle}</span>
            <p className="text-sm text-black font-medium leading-tight border-t-2 border-black pt-3 mt-1">
                {description}
            </p>
        </div>
    </div>
);

const InfoBox = ({ children }: any) => (
    <div className="bg-black text-[#CCFF00] border-4 border-[#CCFF00] p-4 flex gap-4 items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
        <Terminal className="shrink-0" size={24} />
        <div className="font-mono text-sm leading-tight font-bold">{children}</div>
    </div>
);

// --- MAIN APP ---

export default function BrandJourney() {
    const [step, setStep] = useState(0);
    const [isCopied, setIsCopied] = useState(false);
    const [mounted, setMounted] = useState(false);

    const [formData, setFormData] = useState({
        name: '', brandName: '', description: '', audience: '',
        personality: { classicModern: 50, subtleBold: 50, luxuriousAccessible: 50, seriousPlayful: 50 },
        archetype: '', colors: [], inspiration: ''
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const steps = [
        { id: 0, title: 'INICIO' },
        { id: 1, title: 'DATA' },
        { id: 2, title: 'EL CORAZÓN' },
        { id: 3, title: 'VIBE CHECK' },
        { id: 4, title: 'ARQUETIPO' },
        { id: 5, title: 'LOOK' },
        { id: 6, title: 'MANIFIESTO' },
    ];

    const progress = ((step + 1) / steps.length) * 100;

    const handleNext = () => step < steps.length - 1 && setStep(s => s + 1);
    const handlePrev = () => step > 0 && setStep(s => s - 1);
    const handleInput = (field: string, val: any) => setFormData(p => ({ ...p, [field]: val }));
    const handleNested = (parent: string, field: string, val: any) => setFormData((p: any) => ({ ...p, [parent]: { ...p[parent], [field]: val } }));
    const toggleColor = (c: never) => setFormData((p: any) => ({ ...p, colors: p.colors.includes(c) ? p.colors.filter((x: any) => x !== c) : [...p.colors, c] }));

    if (!mounted) return null;

    // --- CONTENIDO DE SLIDES ---
    const renderContent = () => {
        const slideVariants = {
            hidden: { opacity: 0, x: 20, rotate: 1 },
            visible: { opacity: 1, x: 0, rotate: 0 },
            exit: { opacity: 0, x: -20, rotate: -1 }
        };

        switch (step) {
            case 0:
                return (
                    <motion.div
                        key="step0"
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="h-full flex flex-col justify-center items-center text-center space-y-8"
                    >
                        <div className="bg-[#CCFF00] border-4 border-black px-6 py-2 transform rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="font-black text-xl tracking-widest flex items-center gap-2">
                                <Skull size={24} /> PROTOCOLO DE INICIACIÓN
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase relative">
                            <span className="block transform -rotate-2">NO SEAS</span>
                            <span className="bg-black text-white px-4 block transform rotate-1 border-4 border-[#CCFF00]">INVISIBLE</span>
                        </h1>

                        <p className="text-xl font-bold max-w-lg mx-auto bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            Vamos a construir tu marca desde cero. <br />
                            Sin tonterías. Directo a la yugular.
                        </p>

                        <Button onClick={handleNext} className="mt-8 text-xl py-6 px-10">
                            INICIAR PROCESO <ArrowRight size={24} strokeWidth={4} />
                        </Button>
                    </motion.div>
                );

            case 1:
                return (
                    <motion.div
                        key="step1"
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-8"
                    >
                        <div className="border-b-4 border-black pb-4 mb-8">
                            <h2 className="text-5xl font-black uppercase italic transform -skew-x-12">¿QUIÉN ERES?</h2>
                            <p className="font-bold text-lg mt-2 bg-black text-white inline-block px-2">Datos básicos para la ficha técnica.</p>
                        </div>

                        <div className="grid gap-2">
                            <FriendlyInput
                                label="TU NOMBRE"
                                helpText="Para saber a quién enviarle la factura (broma... o no)."
                                placeholder="EJ. RICK SÁNCHEZ"
                                value={formData.name}
                                onChange={(v: string) => handleInput('name', v)}
                            />
                            <FriendlyInput
                                label="CODENAME DEL PROYECTO"
                                helpText="Nombre de tu marca. Si no tienes, pon 'PROYECTO X'."
                                placeholder="EJ. WUBBA LUBBA DUB DUB INC."
                                value={formData.brandName}
                                onChange={(v: string) => handleInput('brandName', v)}
                            />
                        </div>
                    </motion.div>
                );

            case 2:
                return (
                    <motion.div
                        key="step2"
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-8"
                    >
                        <div className="border-b-4 border-black pb-4">
                            <h2 className="text-5xl font-black uppercase italic transform -skew-x-12">VENDES O TE VAS</h2>
                            <p className="font-bold text-lg mt-2 bg-black text-white inline-block px-2">Define tu arma de guerra.</p>
                        </div>

                        <InfoBox>
                            <strong>PRO TIP:</strong> Sé brutalmente honesto. Si vendes humo, dilo. Si vendes oro, grítalo.
                        </InfoBox>

                        <div className="grid gap-2">
                            <FriendlyInput
                                type="textarea"
                                label="¿QUÉ PROBLEMA RESUELVES?"
                                helpText="¿Por qué la gente debería darte su dinero?"
                                placeholder="Ej: La gente está cansada de café malo. Yo vendo gasolina para humanos."
                                value={formData.description}
                                onChange={(v: string) => handleInput('description', v)}
                            />
                            <FriendlyInput
                                type="textarea"
                                label="¿QUIÉN ES LA VÍCTIMA (CLIENTE)?"
                                helpText="Describe a tu cliente ideal. Sé específico."
                                placeholder="Ej: Hipsters de 25-35 años que pagan $100 por un latte sin llorar."
                                value={formData.audience}
                                onChange={(v: string) => handleInput('audience', v)}
                            />
                        </div>
                    </motion.div>
                );

            case 3:
                return (
                    <motion.div
                        key="step3"
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-8"
                    >
                        <div className="border-b-4 border-black pb-4">
                            <h2 className="text-5xl font-black uppercase italic transform -skew-x-12">VIBE CHECK</h2>
                            <p className="font-bold text-lg mt-2 bg-black text-white inline-block px-2">Ajusta los niveles de intensidad.</p>
                        </div>

                        <div className="bg-[#CCFF00] border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <RangeSlider
                                leftLabel="ABUELITA"
                                rightLabel="CYBERPUNK"
                                description={formData.personality.classicModern < 50 ? "Clásico, confiable, seguro." : "Innovador, disruptivo, peligroso."}
                                value={formData.personality.classicModern}
                                onChange={(v: string) => handleNested('personality', 'classicModern', v)}
                            />
                            <RangeSlider
                                leftLabel="NINJA (SUTIL)"
                                rightLabel="EXPLOSIÓN"
                                description={formData.personality.subtleBold < 50 ? "El silencio es oro." : "Mírame a huevo."}
                                value={formData.personality.subtleBold}
                                onChange={(v: string) => handleNested('personality', 'subtleBold', v)}
                            />
                            <RangeSlider
                                leftLabel="BARRIO"
                                rightLabel="VIP"
                                description={formData.personality.luxuriousAccessible < 50 ? "Para la gente real." : "Exclusividad total."}
                                value={formData.personality.luxuriousAccessible}
                                onChange={(v: string) => handleNested('personality', 'luxuriousAccessible', v)}
                            />
                            <RangeSlider
                                leftLabel="TRAJE"
                                rightLabel="PARIS HILTON"
                                description={formData.personality.seriousPlayful < 50 ? "Serio como un infarto." : "La vida es un carnaval."}
                                value={formData.personality.seriousPlayful}
                                onChange={(v: string) => handleNested('personality', 'seriousPlayful', v)}
                            />
                        </div>
                    </motion.div>
                );

            case 4:
                return (
                    <motion.div
                        key="step4"
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-6 h-full flex flex-col"
                    >
                        <div className="shrink-0 border-b-4 border-black pb-4">
                            <h2 className="text-5xl font-black uppercase italic transform -skew-x-12">ELIGE TU PELEADOR</h2>
                            <p className="font-bold text-lg mt-2 bg-black text-white inline-block px-2">El arquetipo que dominará tu comunicación.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow overflow-y-auto pr-2 pb-10">
                            <ArchetypeCard
                                icon={Crown}
                                title="EL JEFE"
                                subtitle="THE RULER"
                                description="Poder absoluto. Control. Estatus. Para marcas que lideran sin pedir permiso."
                                selected={formData.archetype === 'Ruler'}
                                onClick={() => handleInput('archetype', 'Ruler')}
                            />
                            <ArchetypeCard
                                icon={Heart}
                                title="EL SANTO"
                                subtitle="THE CAREGIVER"
                                description="Servicio puro. Protección. Altruismo. Para marcas que realmente dan un carajo."
                                selected={formData.archetype === 'Caregiver'}
                                onClick={() => handleInput('archetype', 'Caregiver')}
                            />
                            <ArchetypeCard
                                icon={Skull}
                                title="EL REBELDE"
                                subtitle="THE OUTLAW"
                                description="Romper reglas. Libertad. Revolución. Para marcas que incomodan al sistema."
                                selected={formData.archetype === 'Rebel'}
                                onClick={() => handleInput('archetype', 'Rebel')}
                            />
                            <ArchetypeCard
                                icon={Sparkles}
                                title="EL VISIONARIO"
                                subtitle="THE CREATOR"
                                description="Innovación. Arte. Imaginación. Para los que construyen el futuro."
                                selected={formData.archetype === 'Creator'}
                                onClick={() => handleInput('archetype', 'Creator')}
                            />
                        </div>
                    </motion.div>
                );

            case 5:
                const colors = [
                    { id: 'red', hex: '#ef4444', name: 'ROJO (PELIGRO)' },
                    { id: 'blue', hex: '#3b82f6', name: 'AZUL (CORPO)' },
                    { id: 'green', hex: '#22c55e', name: 'VERDE (DINERO)' },
                    { id: 'yellow', hex: '#CCFF00', name: 'VOLT (ACID)' },
                    { id: 'purple', hex: '#a855f7', name: 'MORADO (ROYAL)' },
                    { id: 'black', hex: '#000000', name: 'NEGRO (DARK)' },
                ];
                return (
                    <motion.div
                        key="step5"
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-8"
                    >
                        <div className="border-b-4 border-black pb-4">
                            <h2 className="text-5xl font-black uppercase italic transform -skew-x-12">CÓDIGO VISUAL</h2>
                            <p className="font-bold text-lg mt-2 bg-black text-white inline-block px-2">¿De qué color quieres pintar tu imperio?</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {colors.map(c => (
                                <button
                                    key={c.id}
                                    onClick={() => toggleColor(c.name as never)}
                                    className={`h-28 border-4 flex flex-col justify-between p-4 transition-all group relative overflow-hidden ${formData.colors.includes(c.name as never) ? 'border-black bg-black' : 'border-black bg-white hover:bg-gray-100'}`}
                                >
                                    <div className={`absolute inset-0 opacity-10 ${formData.colors.includes(c.name as never) ? 'bg-[#CCFF00]' : ''}`}></div>
                                    <div className="w-full flex justify-end relative z-10">
                                        <div className="w-8 h-8 border-2 border-black" style={{ backgroundColor: c.hex }}></div>
                                    </div>
                                    <span className={`font-black text-sm text-left relative z-10 ${formData.colors.includes(c.name as never) ? 'text-[#CCFF00]' : 'text-black'}`}>{c.name}</span>
                                </button>
                            ))}
                        </div>

                        <div className="mt-8">
                            <FriendlyInput
                                type="textarea"
                                label="ROBAR COMO ARTISTA"
                                helpText="Pega aquí links de Pinterest o Instagram. Todo se vale."
                                placeholder="Me gusta el estilo de..."
                                value={formData.inspiration}
                                onChange={(v: string) => handleInput('inspiration', v)}
                            />
                        </div>
                    </motion.div>
                );

            case 6:
                const summary = `
🔥 MANIFIESTO DE MARCA - TALENTO CON TARIFA
----------------------------------------
AGENTE: ${formData.name}
PROYECTO: ${formData.brandName}

⚡ MISIÓN (KILLER FEATURE):
${formData.description}

🎯 VÍCTIMAS (TARGET):
${formData.audience}

🎚️ NIVELES DE INTENSIDAD:
- ${formData.personality.classicModern < 50 ? 'CLÁSICO' : 'MODERNO'} (${formData.personality.classicModern}%)
- ${formData.personality.subtleBold < 50 ? 'SILENCIOSO' : 'RUIDOSO'} (${formData.personality.subtleBold}%)
- ${formData.personality.luxuriousAccessible < 50 ? 'PARA EL PUEBLO' : 'VIP'} (${formData.personality.luxuriousAccessible}%)
- ${formData.personality.seriousPlayful < 50 ? 'SERIO' : 'FIESTA'} (${formData.personality.seriousPlayful}%)

🎭 ARQUETIPO: ${formData.archetype}
🎨 PALETA: ${formData.colors.join(', ')}
🔗 REF: ${formData.inspiration}
----------------------------------------`.trim();

                return (
                    <motion.div
                        key="step6"
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-8 text-center"
                    >
                        <div className="py-8 bg-black text-[#CCFF00] border-4 border-[#CCFF00] transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
                            <div className="inline-flex items-center justify-center p-4 border-4 border-white rounded-full text-white mb-4 bg-black">
                                <Check size={48} strokeWidth={4} />
                            </div>
                            <h2 className="text-4xl font-black uppercase mb-2 text-white">MISÍON CUMPLIDA</h2>
                            <p className="font-bold text-[#CCFF00]">
                                Ya tenemos la munición. Ahora nosotros disparamos.
                            </p>
                        </div>

                        <div className="bg-white border-4 border-black p-6 text-left shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-black font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre max-h-60 overflow-y-auto">
                            {summary}
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                            <Button
                                onClick={() => { navigator.clipboard.writeText(summary); setIsCopied(true); setTimeout(() => setIsCopied(false), 2000); }}
                                variant="outline"
                            >
                                {isCopied ? 'COPIADO' : 'COPIAR DATA'} <Copy size={24} />
                            </Button>
                            <a
                                href={`https://wa.me/5219845828658?text=${encodeURIComponent("HOLA, YA TERMINÉ MI BRIEF EN TALENTOCONTARIFA.LAT/FORM:\n\n" + summary)}`}
                                target="_blank"
                                className="w-full md:w-auto"
                            >
                                <Button variant="success" className="w-full">
                                    ENVIAR POR WHATSAPP <Send size={24} />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                );

            default: return null;
        }
    };

    return (
        <div className={`min-h-screen ${THEME.bg} ${THEME.fg} ${THEME.fontDisplay} flex overflow-hidden selection:bg-black selection:text-[#CCFF00]`}>
            <GridBackground />

            {/* SIDEBAR (Desktop) */}
            <aside className="hidden md:flex flex-col w-96 border-r-4 border-black bg-white z-20 relative shadow-[4px_0px_0px_0px_rgba(0,0,0,0.1)]">
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

                <div className="flex-grow p-8 space-y-2 overflow-y-auto">
                    {steps.map((s, i) => (
                        <div key={s.id} className={`flex items-center gap-4 py-3 px-4 border-2 transition-all duration-150 ${i === step ? 'bg-black text-[#CCFF00] border-black translate-x-2 shadow-[4px_4px_0px_0px_#CCFF00]' : 'border-transparent text-gray-400 opacity-50'}`}>
                            <div className={`font-black text-xl`}>0{i}</div>
                            <span className={`text-lg font-black uppercase tracking-wider`}>{s.title}</span>
                        </div>
                    ))}
                </div>

                <div className="p-8 border-t-4 border-black">
                    <div className="bg-black text-white p-4 border-2 border-transparent hover:border-[#CCFF00] transition-colors group cursor-help">
                        <p className="text-xs text-[#CCFF00] mb-2 font-black uppercase mb-1 flex items-center gap-2">
                            <Crosshair size={14} /> SOPORTE TÁCTICO
                        </p>
                        <p className="text-xs font-bold leading-relaxed group-hover:text-gray-200">
                            ¿Trabas? No pienses, solo escribe. Nosotros arreglamos el desorden después.
                        </p>
                    </div>
                </div>
            </aside>

            {/* MOBILE HEADER */}
            <div className="md:hidden fixed top-0 w-full h-20 border-b-4 border-black bg-[#CCFF00] z-50 flex items-center justify-between px-4 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-black border-2 border-white">
                        {step + 1}
                    </div>
                    <span className="font-black text-lg text-black uppercase tracking-tighter">FASE {step + 1}/{steps.length}</span>
                </div>
                <div className="flex gap-2">
                    <button onClick={handlePrev} disabled={step === 0} className="p-2 border-2 border-black bg-white hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><ArrowLeft size={24} /></button>
                    <button onClick={handleNext} disabled={step === 6} className="p-2 border-2 border-black bg-black text-[#CCFF00] hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><ArrowRight size={24} /></button>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <main className="flex-grow relative z-10 flex flex-col h-screen pt-20 md:pt-0">
                <div className="flex-grow overflow-y-auto overflow-x-hidden custom-scrollbar">
                    <div className="max-w-4xl mx-auto w-full min-h-full flex flex-col justify-center p-4 md:p-16">
                        <AnimatePresence mode="wait">
                            {renderContent()}
                        </AnimatePresence>
                    </div>
                </div>

                {/* FOOTER NAV (Desktop) */}
                {step > 0 && step < 6 && (
                    <div className="hidden md:flex h-28 border-t-4 border-black items-center justify-between px-16 bg-white shrink-0 z-30 relative">
                        <Button onClick={handlePrev} variant="outline" className="px-8 gap-4 group">
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" strokeWidth={3} /> ANTERIOR
                        </Button>

                        <div className="flex flex-col items-center gap-2 w-1/3">
                            <div className="w-full h-6 border-4 border-black p-1 bg-white">
                                <div className="h-full bg-[#CCFF00] transition-all duration-300 relative" style={{ width: `${progress}%` }}>
                                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-black animate-pulse"></div>
                                </div>
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-black">CARGANDO MÓDULO {Math.round(progress)}%</span>
                        </div>

                        <Button onClick={handleNext} variant="primary">
                            SIGUIENTE <ArrowRight size={20} strokeWidth={3} />
                        </Button>
                    </div>
                )}
            </main>
        </div>
    );
}
