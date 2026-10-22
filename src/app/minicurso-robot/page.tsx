import type { Metadata } from "next";
import { WHATSAPP_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Mini-Curso Robot Publicador 24/7 | Talento con Tarifa Academy",
  description:
    "Aprende a construir tu propio Estudio de Videos con HyperFrames + API de ElevenLabs y tu Robot Publicador 24/7 en GitHub Actions con los planes gratuitos vigentes a oct-2026.",
};

const STRIPE_BASIC_URL = "https://buy.stripe.com/5kQ9ATeNm01j0Wa15X0gw01";
const STRIPE_PRO_URL = "https://buy.stripe.com/eVqaEX20AaFX34idSJ0gw02";

const MODULES = [
  {
    num: "MÓDULO 01",
    title: "El Mapa y Tu Obrero IA Gratis (Antigravity / Claude Code)",
    badge: "59 SEG VIDEO + MANUAL 6 LÁMINAS + SKILL #01",
    desc: "Cómo instalar Google Antigravity en su versión gratuita (o usar Claude Code con plan Pro/API), activar el protocolo de autodiagnóstico para que el propio agente instale Node.js 22 LTS+, Python y FFmpeg por ti, y blindar tus llaves con .gitignore y .env.",
    highlights: [
      "Prompts #01 y #02 Copiar y Pegar: Autodiagnóstico Node 22+ y bóveda .env",
      "Cómo alternar modelos en el tier gratis y resolver bloqueos de PowerShell o PATH",
      "Videoteca curada en YouTube con créditos completos a los autores originales",
    ],
  },
  {
    num: "MÓDULO 02",
    title: "La Fábrica de Videos (API de ElevenLabs + HyperFrames + Edge-TTS)",
    badge: "60 SEG VIDEO + MANUAL 6 LÁMINAS + SKILL #02",
    desc: "Cómo sacar tu API Key y Voice ID en ElevenLabs en 3 clics (plan Free = uso no comercial con atribución; modelo Flash v2.5 ~0.5 créditos/letra, verifica en elevenlabs.io/pricing) con caché SHA-256, respaldarte con Edge-TTS (alternativa gratuita no oficial) y renderizar tus .mp4 con HyperFrames.",
    highlights: [
      "Guía paso a paso de la API REST v1 de ElevenLabs + Caché SHA-256",
      "Anatomía 1080x1920 con Zonas Seguras (Safe Zones) de Reels, TikTok y Shorts",
      "Prompts #03 y #04 en 1 clic para fabricar tus primeros videos MP4",
    ],
  },
  {
    num: "MÓDULO 03",
    title: "El Robot Fantasma en GitHub Actions + Gemini API en el Runner",
    badge: "60 SEG VIDEO + MANUAL 6 LÁMINAS + SKILL #03",
    desc: "Cómo funciona el runner Ubuntu gratuito de GitHub en repositorios públicos, tabla horaria cron UTC (en minuto 7 y con notas de horario de verano), cómo guardar tus llaves en GitHub Secrets y cómo activar Gemini API (plan gratuito) con plantilla de respaldo para redactar copys y hashtags nuevos en cada turno.",
    highlights: [
      "Tabla horaria UTC (minuto 7) para México, Colombia, Miami, Argentina, Chile y España",
      "Gemini API (plan gratuito) + plantilla de respaldo automática dentro del runner",
      "Escudo anti-pausa de 60 días y gestión de peso del repositorio (50 MB / 100 MB)",
    ],
  },
  {
    num: "MÓDULO 04",
    title: "Las Tuberías: API Directa (Meta / YouTube Opcional) vs. Metricool Gratis",
    badge: "60 SEG VIDEO + MANUAL 6 LÁMINAS + STARTER KIT ZIP",
    // <!-- PENDIENTE D2 --> <!-- PENDIENTE D3 -->
    desc: "Dos caminos para publicar con planes gratuitos: Vía A conectando Meta Graph API (con Token Permanente para publicar video en tu Página de Facebook e Instagram Reels, más YouTube Shorts opcional sujeto a auditoría de Google); o Vía B usando el plan gratuito de Metricool para publicar en TikTok y Shorts en Público sin auditorías de desarrollador.",
    highlights: [
      "Lista completa de permisos y Token Permanente en Meta for Developers",
      "Por qué las apps nuevas de TikTok y Google Cloud sin auditoría salen en privado",
      "Descarga directa del Starter Kit .ZIP (starter-kit-robot-tct/) en el Pase Pro",
    ],
  },
];

export default function MinicursoRobotPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] font-sans selection:bg-[#CCFF00] selection:text-black">
      {/* BARRA SUPERIOR NEOBRUTALISTA */}
      <nav className="sticky top-0 z-50 border-b-4 border-black bg-[#CCFF00] text-black px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center p-1.5 shadow-[3px_3px_0px_#000]">
              <img src="/icon.svg" alt="Talento con Tarifa" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="font-mono font-black text-xs sm:text-sm uppercase tracking-wider">
                TALENTO CON TARIFA // ACADEMY
              </div>
              <div className="text-[11px] font-mono font-bold text-black/80">
                MINI-CURSO + STARTER KIT OFICIAL
              </div>
            </div>
          </a>

          <div className="flex items-center gap-3">
            {/* <!-- PENDIENTE D4 --> */}
            <a
              href="/minicurso-robot/aula"
              className="hidden sm:inline-block bg-white text-black font-mono font-bold text-xs uppercase px-3.5 py-2 border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-black hover:text-[#CCFF00] transition-colors"
            >
              🎓 ENTRAR AL AULA
            </a>
            <a
              href="#precios"
              className="bg-black text-[#CCFF00] font-mono font-black text-xs sm:text-sm uppercase px-4 py-2 border-2 border-black shadow-[4px_4px_0px_#FFF] hover:bg-white hover:text-black transition-colors"
            >
              ⚡ DESBLOQUEAR DESDE 1€ ($20 MXN)
            </a>
          </div>
        </div>
      </nav>

      {/* HERO PRINCIPAL */}
      <header
        className="relative py-14 sm:py-20 px-4 sm:px-8 border-b-4 border-[#CCFF00]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(204, 255, 0, 0.14) 1px, transparent 1px), linear-gradient(180deg, #0D0F14 0%, #08090B 100%)",
          backgroundSize: "24px 24px, 100% 100%",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Columna Izquierda: Propuesta de Valor (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* C9: Reemplazo de promesa absoluta y corrección tipográfica */}
            <div className="inline-flex items-center gap-2 bg-[#CCFF00] text-black font-mono font-black text-xs sm:text-sm px-3.5 py-1.5 border-2 border-white shadow-[4px_4px_0px_#FF0055] uppercase">
              <span>⚡ TU STACK CON PLANES GRATUITOS ($0 USD/MES VIGENTES A OCT-2026)</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight">
              ARMA TU ESTUDIO Y{" "}
              <span className="bg-[#CCFF00] text-black px-2 border-2 border-white shadow-[6px_6px_0px_#FF0055] inline-block my-1">
                ROBOT PUBLICADOR 24/7
              </span>{" "}
              CON GITHUB ACTIONS
            </h1>

            <p className="text-base sm:text-xl text-zinc-200 leading-relaxed max-w-2xl">
              Deja de pagar mensualidades en dólares o perder horas editando y subiendo videos a mano. Aprende paso a paso cómo usar{" "}
              <strong className="text-[#CCFF00]">Google Antigravity Gratis (o Claude Code)</strong>, la{" "}
              <strong className="text-[#00E5FF]">API de ElevenLabs + HyperFrames</strong> y un runner automático en{" "}
              <strong className="text-[#CCFF00]">GitHub Actions</strong> que publica por ti con tu PC apagada.
            </p>

            {/* Píldoras de Stack */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="bg-[#14171F] border-2 border-zinc-600 p-3 shadow-[4px_4px_0px_#CCFF00]">
                <div className="font-mono text-xs text-[#CCFF00] font-bold">OBRERO IA</div>
                <div className="font-black text-sm mt-0.5">Antigravity / Claude</div>
              </div>
              <div className="bg-[#14171F] border-2 border-zinc-600 p-3 shadow-[4px_4px_0px_#00E5FF]">
                <div className="font-mono text-xs text-[#00E5FF] font-bold">VOZ + VIDEO</div>
                <div className="font-black text-sm mt-0.5">ElevenLabs API + HF</div>
              </div>
              <div className="bg-[#14171F] border-2 border-zinc-600 p-3 shadow-[4px_4px_0px_#FF0055]">
                <div className="font-mono text-xs text-[#FF0055] font-bold">SERVIDOR $0</div>
                <div className="font-black text-sm mt-0.5">GitHub Actions Cron</div>
              </div>
              <div className="bg-[#14171F] border-2 border-zinc-600 p-3 shadow-[4px_4px_0px_#CCFF00]">
                <div className="font-mono text-xs text-[#CCFF00] font-bold">TUBERÍAS</div>
                <div className="font-black text-sm mt-0.5">Meta API / Metricool</div>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={STRIPE_PRO_URL}
                className="bg-[#CCFF00] text-black font-black text-base sm:text-lg uppercase px-7 py-4 border-4 border-white shadow-[7px_7px_0px_#FF0055] hover:bg-white hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center"
              >
                🚀 PASE PRO BUILDER + STARTER KIT — $5 USD ($99 MXN)
              </a>
              <a
                href={STRIPE_BASIC_URL}
                className="bg-[#14171F] text-white font-mono font-bold text-sm sm:text-base uppercase px-6 py-4 border-2 border-[#CCFF00] shadow-[5px_5px_0px_#CCFF00] hover:bg-[#CCFF00] hover:text-black transition-all text-center"
              >
                🎟️ PASE BÁSICO — 1€ ($20 MXN)
              </a>
            </div>
          </div>

          {/* Columna Derecha: Video Demo en Vivo (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px] bg-[#14171F] border-4 border-white shadow-[10px_10px_0px_#CCFF00] p-3">
              <div className="bg-black border-b-2 border-[#CCFF00] px-3 py-2 flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF0055] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#CCFF00] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#00E5FF] inline-block" />
                </div>
                <span className="font-mono text-[11px] text-[#CCFF00] font-bold">
                  DEMO_CLASE_01.MP4 // 9:16
                </span>
              </div>

              <div className="aspect-[9/16] w-full bg-black border-2 border-zinc-700 overflow-hidden relative">
                <video
                  src="/minicurso-robot/01_mapa_y_obrero_ia.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-3 bg-black border border-zinc-700 p-2.5 font-mono text-xs text-zinc-300 flex items-center justify-between">
                <span>🎙️ Avatar Neobrutalista + Consola UI</span>
                <span className="bg-[#CCFF00] text-black font-bold px-2 py-0.5">4 MÓDULOS</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* TEMARIO DETALLADO DE LOS 4 MÓDULOS */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="inline-block bg-[#FF0055] text-white font-mono font-bold text-xs uppercase px-3 py-1 border-2 border-white mb-3">
            CERO RELLENO • PASO A PASO FOR DUMMIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            ¿QUÉ INCLUYEN LOS <span className="text-[#CCFF00] underline">4 MÓDULOS + MANUALES INTERACTIVOS</span>?
          </h2>
          <p className="text-zinc-400 mt-2 max-w-3xl text-base sm:text-lg">
            Cada módulo incluye su clase en video vertical + un Manual Interactivo Horizontal en fondo negro (PDF + versión Web) con botones para{" "}
            <strong className="text-white">copiar cada Prompt en 1 clic</strong>, solución a errores comunes y videoteca en YouTube con créditos a los creadores originales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {MODULES.map((m) => (
            <div
              key={m.num}
              className="bg-[#12151C] border-3 border-white p-6 shadow-[7px_7px_0px_#CCFF00] flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="bg-[#CCFF00] text-black font-mono font-black text-xs px-3 py-1 border border-black">
                    {m.num}
                  </span>
                  <span className="font-mono text-xs text-[#00E5FF] bg-black px-2.5 py-1 border border-[#00E5FF]">
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase text-white mb-2 leading-tight">
                  {m.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">{m.desc}</p>
              </div>

              <div className="bg-black/80 border border-zinc-700 p-3.5 space-y-1.5">
                {m.highlights.map((h) => (
                  <div key={h} className="font-mono text-xs text-zinc-200 flex items-start gap-2">
                    <span className="text-[#CCFF00] font-bold">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TABLA DE PRECIOS: LA JUGADA HÍBRIDA (1€ vs $5 USD) */}
      <section id="precios" className="py-16 px-4 sm:px-8 bg-[#0E1016] border-t-4 border-b-4 border-[#CCFF00]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="bg-[#CCFF00] text-black font-mono font-black text-xs uppercase px-3 py-1 border-2 border-white">
              LA JUGADA HÍBRIDA • PAGO ÚNICO VÍA STRIPE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase mt-3">
              ELIGE TU PASE DE ACCESO INMEDIATO
            </h2>
            <p className="text-zinc-300 mt-2 text-base sm:text-lg">
              Aceptamos Tarjeta de Débito/Crédito, Apple Pay, Google Pay y OXXO. Al completar el pago, Stripe te redirige automáticamente al Aula Interactiva.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* OPCIÓN 1: PASE BÁSICO 1€ ($20 MXN) */}
            {/* <!-- PENDIENTE D1 --> */}
            <div className="bg-[#141821] border-3 border-white p-7 sm:p-8 shadow-[8px_8px_0px_#00E5FF] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-[#00E5FF] text-black font-mono font-black text-xs px-3 py-1 uppercase border border-black">
                    PASE BÁSICO • SIMBÓLICO
                  </span>
                  <span className="font-mono text-xs text-zinc-400">ACCESO DE POR VIDA</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase">
                  MINI-CURSO + MANUALES INTERACTIVOS
                </h3>
                <div className="my-4 flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl font-black text-[#00E5FF]">1€</span>
                  <span className="font-mono text-xl text-zinc-300 font-bold">($20 MXN Pago Único)</span>
                </div>

                <p className="text-sm text-zinc-300 mb-6">
                  Ideal si quieres aprender toda la metodología desde cero y construir los archivos con tu agente copiando los Prompts de los manuales.
                </p>

                <ul className="space-y-3 text-sm text-zinc-200 mb-8 font-mono">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>Las 4 Clases en Video HD con Avatar Neobrutalista y Consola UI</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>Los 4 Manuales Horizontales en Fondo Negro (PDF + Versión Web Interactiva)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>Botones de Copiar y Pegar para los 8 Prompts Maestros</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#00E5FF] font-bold">✓</span>
                    <span>Videoteca curada en YouTube con atribuciones y guía de excepciones</span>
                  </li>
                </ul>
              </div>

              <a
                href={STRIPE_BASIC_URL}
                className="w-full block text-center bg-[#00E5FF] text-black font-mono font-black text-base uppercase py-4 border-2 border-white shadow-[5px_5px_0px_#FFF] hover:bg-white transition-all"
              >
                🎟️ ENTRAR POR 1€ ($20 MXN) ➔
              </a>
            </div>

            {/* OPCIÓN 2: PASE PRO BUILDER $5 USD ($99 MXN) */}
            <div className="bg-[#161B24] border-4 border-[#CCFF00] p-7 sm:p-8 shadow-[10px_10px_0px_#FF0055] flex flex-col justify-between relative">
              <div className="absolute -top-4 right-4 bg-[#FF0055] text-white font-mono font-black text-xs px-3.5 py-1 border-2 border-white uppercase shadow-[3px_3px_0px_#000]">
                ★ EL MÁS ELEGIDO (AHORRA HORAS) ★
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-[#CCFF00] text-black font-mono font-black text-xs px-3 py-1 uppercase border border-black">
                    PASE PRO BUILDER • LLAVE EN MANO
                  </span>
                  <span className="font-mono text-xs text-[#CCFF00]">INCLUYE STARTER KIT .ZIP</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                  CURSO COMPLETO + STARTER KIT .ZIP + 3 SKILLS
                </h3>
                <div className="my-4 flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl font-black text-[#CCFF00]">$5 USD</span>
                  <span className="font-mono text-xl text-zinc-300 font-bold">($99 MXN Pago Único)</span>
                </div>

                <p className="text-sm text-zinc-200 mb-6">
                  Todo lo del Pase Básico <strong>MÁS el repositorio `.zip` pre-armado (`starter-kit-robot-tct/`)</strong> para que solo descomprimas, pongas tu llave de ElevenLabs y subas tu robot hoy mismo.
                </p>

                <ul className="space-y-3 text-sm text-zinc-100 mb-8 font-mono">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#CCFF00] font-bold">★</span>
                    <span>
                      <strong>TODO lo del Pase Básico</strong> (4 Videos + 4 Manuales PDF/HTML Interactivos)
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#CCFF00] font-bold">★</span>
                    <span>
                      <strong>Las 3 Skills Oficiales (.gemini/skills y .claude/skills)</strong> listas para usar en Antigravity o Claude Code
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#CCFF00] font-bold">★</span>
                    <span>
                      <strong>Script `voice_elevenlabs_hybrid.py`</strong> con API ElevenLabs + Caché SHA-256 + Fallback Edge-TTS
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    {/* <!-- PENDIENTE D2 --> */}
                    <span className="text-[#CCFF00] font-bold">★</span>
                    <span>
                      <strong>Workflow `.github/workflows/robot_publicador.yml`</strong> + Scripts `publish_social.js` (Meta API + YouTube opcional) y CSV de Metricool
                    </span>
                  </li>
                </ul>
              </div>

              <a
                href={STRIPE_PRO_URL}
                className="w-full block text-center bg-[#CCFF00] text-black font-mono font-black text-base sm:text-lg uppercase py-4 border-3 border-white shadow-[6px_6px_0px_#FFF] hover:bg-white transition-all"
              >
                🚀 DESCARGAR PASE PRO BUILDER ($99 MXN) ➔
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-4 sm:px-8 bg-black text-zinc-400 font-mono text-xs border-t-2 border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            ⚡ TALENTO CON TARIFA (`talentocontarifa.lat`) — TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="flex items-center gap-4">
            <a href="/minicurso-robot/aula" className="text-[#CCFF00] hover:underline">
              Ir al Aula de Alumnos
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              Soporte por WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
