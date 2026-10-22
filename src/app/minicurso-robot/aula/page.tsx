"use client";

import React, { useState } from "react";

// <!-- PENDIENTE D4 --> Paywall real (verificar session_id de Stripe y sacar los archivos de /public)
const STRIPE_PRO_URL = "https://buy.stripe.com/eVqaEX20AaFX34idSJ0gw02";

// Fuente única de verdad de los 8 Prompts (RX-12: idénticos a los manuales HTML y PDF)
const COURSE_MODULES = [
  {
    id: 1,
    code: "MÓDULO 01",
    title: "El Mapa y Tu Obrero IA Gratis (Antigravity / Claude Code)",
    videoUrl: "/minicurso-robot/01_mapa_y_obrero_ia.mp4",
    pdfUrl: "/minicurso-robot/TCT_Modulo_01_Mapa_y_Obrero_IA.pdf",
    htmlUrl: "/minicurso-robot/manuales-interactivos/html_fuente/TCT_Modulo_01_Mapa_y_Obrero_IA.html",
    summary:
      "Instala Google Antigravity en su versión gratuita (o Claude Code con plan Pro/API), activa tu protocolo de autodiagnóstico y deja que el propio agente prepare Node.js 22 LTS+, Python 3.10+, FFmpeg, tu archivo .gitignore y tu bóveda .env.",
    prompts: [
      {
        label: "PROMPT #01 // AUTODIAGNÓSTICO E INSTALACIÓN AUTOMÁTICA",
        text: `Hola. Soy alumno del Mini-Curso de Talento con Tarifa y quiero preparar mi computadora desde cero para mi Robot Publicador de Videos.
Por favor ejecuta por mí en la terminal los siguientes pasos sin que yo tenga que programar nada:
1. Verifica si tengo instalados Node.js 22 LTS o superior, Python (3.10+), FFmpeg y Git.
2. Si falta alguno en mi sistema (Windows o Mac), instálalo automáticamente usando winget o brew, y si estás en Windows PowerShell configura ExecutionPolicy RemoteSigned en CurrentUser para permitir scripts locales. Si en Windows el comando python abre la Microsoft Store, indícame cómo desactivar los alias de ejecución de aplicaciones.
3. Instala las librerías de Python ejecutando: python -m pip install edge-tts requests python-dotenv
4. Confírmame con una tabla de checks verdes cuando mi computadora esté 100% lista.`,
      },
      {
        label: "PROMPT #02 // CANDADO DE SEGURIDAD (.GITIGNORE) Y BÓVEDA .ENV",
        text: `Revisa mi carpeta de trabajo y crea un archivo .gitignore blindado que bloquee cualquier archivo .env, *tokens*.json o credenciales privadas para que jamás se suban por error a GitHub. Además, crea las carpetas videos/, scripts/ y .github/workflows/ listas para los siguientes módulos, y crea .env.example con las variables del curso (ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID, ELEVENLABS_MODEL_ID, GEMINI_API_KEY, META_PAGE_TOKEN, FB_PAGE_ID, IG_USER_ID) y una copia .env vacía; confirma que .env esté en .gitignore.`,
      },
    ],
  },
  {
    id: 2,
    code: "MÓDULO 02",
    title: "La Fábrica de Videos (API de ElevenLabs + HyperFrames + Edge-TTS)",
    videoUrl: "/minicurso-robot/02_fabrica_videos_hyperframes.mp4",
    pdfUrl: "/minicurso-robot/TCT_Modulo_02_Fabrica_Videos_Gratis.pdf",
    htmlUrl: "/minicurso-robot/manuales-interactivos/html_fuente/TCT_Modulo_02_Fabrica_Videos_Gratis.html",
    summary:
      "Conecta la API oficial de ElevenLabs en 3 clics (plan Free = uso no comercial con atribución; modelo Flash v2.5 ~0.5 créditos/letra, verifica en elevenlabs.io/pricing) con caché SHA-256, respaldo con Edge-TTS (alternativa gratuita no oficial) y renderiza tus MP4 verticales con HyperFrames (Node.js 22+).",
    prompts: [
      {
        label: "PROMPT #03 // CREAR MI REEL CON API DE ELEVENLABS + HYPERFRAMES",
        text: `Usando la Skill hyperframes-video-factory, créame un video vertical completo (1080x1920 MP4) de 30 segundos sobre: [ESCRIBE AQUÍ TU TEMA O NEGOCIO].
Por favor haz todo el flujo por mí:
1. Escribe un guion magnético dividido en 4 escenas cortas más un cierre de llamado a la acción.
2. Genera la voz conectándote a la API de ElevenLabs (POST /v1/text-to-speech/{voice_id}) leyendo mi ELEVENLABS_API_KEY y ELEVENLABS_VOICE_ID desde .env con caché SHA-256 en voice_cache/ (y si no hay cuota, usa edge-tts de respaldo).
3. Diseña la animación Neo-Brutalista en HyperFrames respetando las Safe Zones y sincronízala con la duración de cada audio.
4. Renderiza el resultado final en videos/01_reel_automatico.mp4 (H.264 yuv420p + AAC).`,
      },
      {
        label: "PROMPT #04 // PROBAR CONEXIÓN A LA API DE ELEVENLABS",
        text: `Revisa o completa mi archivo .env con ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID y ELEVENLABS_MODEL_ID=eleven_flash_v2_5, y haz una prueba rápida llamando al endpoint https://api.elevenlabs.io/v1/text-to-speech/{voice_id} con caché SHA-256 en voice_cache/ y respaldo automático a edge-tts si devuelve error 401/429.`,
      },
    ],
  },
  {
    id: 3,
    code: "MÓDULO 03",
    title: "El Robot Fantasma en GitHub Actions + Gemini API en el Runner",
    videoUrl: "/minicurso-robot/03_robot_github_actions.mp4",
    pdfUrl: "/minicurso-robot/TCT_Modulo_03_Robot_GitHub_Actions.pdf",
    htmlUrl: "/minicurso-robot/manuales-interactivos/html_fuente/TCT_Modulo_03_Robot_GitHub_Actions.html",
    summary:
      "Configura tu servidor Ubuntu en GitHub Actions dentro de un repositorio público (minutos gratuitos y URL raw accesible para Meta), programa 3 horarios cron diarios en el minuto 7 para tu país, guarda tus llaves en GitHub Secrets y activa Gemini API (plan gratuito) con plantilla de respaldo.",
    prompts: [
      {
        label: "PROMPT #05 // CREAR MI WORKFLOW GITHUB ACTIONS + IA GRATIS",
        text: `Usando la Skill github-actions-publisher, construye en mi proyecto el robot publicador completo para GitHub Actions:
1. Crea .github/workflows/robot_publicador.yml programado con cron (usando minuto 7 para evitar colas pico) para publicar 3 veces al día en mi zona horaria ([ESCRIBE TU PAÍS, EJ: MÉXICO CDMX]) más el botón manual workflow_dispatch y permisos contents: write.
2. Crea scripts/generate_caption.js que tome el video en turno de la carpeta videos/ y redacte un título y hashtags virales usando Gemini API (plan gratuito con GEMINI_API_KEY) y una plantilla de respaldo automática si no hay llave configurada.
3. Incluye protección anti-inactividad de 60 días actualizando estado_rotacion.json para que el reloj cron nunca se pause.`,
      },
      {
        label: "PROMPT #06 // SUBIR REPO PÚBLICO A GITHUB Y HACER TEST",
        text: `Verifica primero que mi archivo .env esté dentro de .gitignore para no exponer llaves. Luego ayúdame a autenticarme con GitHub (gh auth login), inicializar Git, crear o conectar mi repositorio público en GitHub, subir mis carpetas videos/, scripts/ y .github/workflows/ y dime cómo presionar el botón Run workflow para ver mi primera ejecución en verde.`,
      },
    ],
  },
  {
    id: 4,
    code: "MÓDULO 04",
    title: "Las Tuberías: API Directa (Meta / YouTube Opcional) vs. Metricool Gratis",
    videoUrl: "/minicurso-robot/04_tuberias_api_y_metricool.mp4",
    pdfUrl: "/minicurso-robot/TCT_Modulo_04_Tuberias_API_y_Metricool.pdf",
    htmlUrl: "/minicurso-robot/manuales-interactivos/html_fuente/TCT_Modulo_04_Tuberias_API_y_Metricool.html",
    // <!-- PENDIENTE D2 --> <!-- PENDIENTE D3 -->
    summary:
      "Conecta tus redes por la Vía A (Meta Graph API v21.0 con Token Permanente para publicar video en tu Página de Facebook e Instagram Reels + YouTube Shorts opcional sujeto a auditoría de Google) o por la Vía B usando el plan gratuito de Metricool (incluyendo TikTok en Público).",
    prompts: [
      {
        label: "PROMPT #07 // CONECTAR API DIRECTA (META GRAPH API + YOUTUBE OPCIONAL)",
        text: `Usando la Skill github-actions-publisher, crea en mi proyecto el script scripts/publish_social.js y conéctalo a mi workflow .github/workflows/robot_publicador.yml para que en cada turno:
1. Seleccione el siguiente video .mp4 de la carpeta videos/ y genere su copy viral con Gemini API (plan gratuito) o plantilla de respaldo.
2. Si existen los Secrets META_PAGE_TOKEN, FB_PAGE_ID e IG_USER_ID, publique automáticamente el video en mi Página de Facebook y como Instagram Reel vía Graph API v21.0.
3. (Opcional) Si existen YT_CLIENT_ID, YT_CLIENT_SECRET y YT_REFRESH_TOKEN, incluya el módulo opcional para subirlo a YouTube Shorts.`,
      },
      {
        label: "PROMPT #08 // GENERADOR DE LOTE PARA METRICOOL GRATIS",
        text: `Analiza todos los videos .mp4 que tengo en mi carpeta videos/ y genérame un archivo calendario_metricool.csv junto con un resumen de textos persuasivos y hashtags optimizados para TikTok, Instagram Reels y YouTube Shorts listos para programar mi semana en el plan gratuito de Metricool.`,
      },
    ],
  },
];

export default function AulaMinicursoPage() {
  const [activeMod, setActiveMod] = useState(0);
  const [copiedIdx, setCopiedIdx] = useState<string | null>(null);

  const current = COURSE_MODULES[activeMod];

  const handleCopy = (text: string, key: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedIdx(key);
        setTimeout(() => setCopiedIdx(null), 2800);
      });
    } else {
      setCopiedIdx(key);
      setTimeout(() => setCopiedIdx(null), 2800);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] font-sans">
      {/* <!-- PENDIENTE D4 --> HEADER DEL AULA */}
      <header className="sticky top-0 z-50 border-b-4 border-black bg-[#CCFF00] text-black px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="/minicurso-robot"
              className="bg-black text-[#CCFF00] font-mono font-bold text-xs px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_#FFF]"
            >
              ◀ VOLVER
            </a>
            <div>
              <div className="font-mono font-black text-xs sm:text-sm uppercase">
                🎓 AULA OFICIAL // ROBOT PUBLICADOR 24/7 (PLANES GRATUITOS VIGENTES A OCT-2026)
              </div>
              <div className="font-mono text-[11px] font-bold text-black/80">
                4 CLASES EN VIDEO + 4 MANUALES HORIZONTALES + STARTER KIT ZIP
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* <!-- PENDIENTE D1 --> */}
            <a
              href="/minicurso-robot/starter-kit-robot-tct.zip"
              download
              className="bg-black text-[#CCFF00] font-mono font-black text-xs sm:text-sm uppercase px-4 py-2 border-2 border-white shadow-[4px_4px_0px_#FF0055] hover:bg-white hover:text-black transition-all"
            >
              📦 DESCARGAR STARTER KIT .ZIP (PRO)
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {/* SELECTOR DE LOS 4 MÓDULOS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {COURSE_MODULES.map((m, idx) => {
            const isSelected = idx === activeMod;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMod(idx)}
                className={`text-left p-3.5 border-3 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#CCFF00] text-black border-white shadow-[5px_5px_0px_#FF0055]"
                    : "bg-[#14171F] text-white border-zinc-600 hover:border-[#CCFF00]"
                }`}
              >
                <div className="font-mono font-black text-xs uppercase">{m.code}</div>
                <div className="font-bold text-xs sm:text-sm mt-1 line-clamp-2">{m.title}</div>
              </button>
            );
          })}
        </div>

        {/* CONTENIDO DEL MÓDULO ACTIVO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda: Reproductor Vertical 9:16 (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-full max-w-[340px] bg-[#14171F] border-3 border-white shadow-[8px_8px_0px_#CCFF00] p-3">
              <div className="bg-black border-b-2 border-[#CCFF00] px-3 py-1.5 flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-[#CCFF00] font-bold">{current.code}</span>
                <span className="font-mono text-[11px] text-zinc-400">VIDEO CLASE HD</span>
              </div>
              <div className="aspect-[9/16] w-full bg-black border border-zinc-700 overflow-hidden">
                <video
                  key={current.videoUrl}
                  src={current.videoUrl}
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Columna Derecha: Manuales, Prompts 1-Clic y Starter Kit (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-[#12151C] border-3 border-white p-6 shadow-[7px_7px_0px_#00E5FF]">
              <div className="inline-block bg-[#CCFF00] text-black font-mono font-black text-xs px-3 py-1 mb-2 uppercase">
                {current.code} // RECURSOS Y PROMPTS
              </div>
              <h1 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                {current.title}
              </h1>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-5">
                {current.summary}
              </p>

              {/* Botones de Descarga del Manual Horizontal */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={current.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#CCFF00] text-black font-mono font-black text-xs sm:text-sm uppercase px-4 py-3 border-2 border-white shadow-[4px_4px_0px_#FFF] hover:bg-white transition-all"
                >
                  🖥️ ABRIR MANUAL INTERACTIVO WEB (6 LÁMINAS) ➔
                </a>
                <a
                  href={current.pdfUrl}
                  download
                  className="bg-[#181C26] text-[#00E5FF] font-mono font-bold text-xs sm:text-sm uppercase px-4 py-3 border-2 border-[#00E5FF] shadow-[4px_4px_0px_#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-all"
                >
                  📥 DESCARGAR PDF HORIZONTAL (FONDO NEGRO)
                </a>
              </div>
            </div>

            {/* Prompts Copiar y Pegar en 1 Clic */}
            <div className="space-y-4">
              {current.prompts.map((p, pIdx) => {
                const copyKey = `${current.id}-${pIdx}`;
                const isCopied = copiedIdx === copyKey;
                return (
                  <div
                    key={copyKey}
                    className="bg-[#0D0F14] border-3 border-[#CCFF00] shadow-[6px_6px_0px_#FFF]"
                  >
                    <div className="bg-[#181B24] border-b-2 border-[#CCFF00] px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#CCFF00]">
                        {p.label}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(p.text, copyKey)}
                        className={`font-mono font-black text-xs uppercase px-3.5 py-1.5 border-2 border-white cursor-pointer transition-all ${
                          isCopied
                            ? "bg-emerald-500 text-white"
                            : "bg-[#CCFF00] text-black hover:bg-white"
                        }`}
                      >
                        {isCopied
                          ? "✅ ¡COPIADO! PÉGALO EN EL CHAT DE TU AGENTE (Ctrl+V)"
                          : "📋 COPIAR PROMPT EN 1 CLIC"}
                      </button>
                    </div>
                    <pre className="p-4 font-mono text-xs sm:text-sm text-zinc-100 whitespace-pre-wrap leading-relaxed select-all">
                      {p.text}
                    </pre>
                  </div>
                );
              })}
            </div>

            {/* Caja de Descarga del Starter Kit .ZIP */}
            <div className="bg-[#161B24] border-3 border-[#FF0055] p-5 shadow-[6px_6px_0px_#CCFF00] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-mono font-black text-xs text-[#FF0055] uppercase">
                  ⚡ PAQUETE PRO BUILDER INCLUIDO
                </div>
                <div className="font-black text-lg uppercase text-white">
                  Descarga el Starter Kit Completo (.ZIP) — carpeta `starter-kit-robot-tct/`
                </div>
                <div className="text-xs text-zinc-300 mt-0.5">
                  Incluye `.gemini/skills/`, `.claude/skills/`, `voice_elevenlabs_hybrid.py`, `robot_publicador.yml`, `publish_social.js` y `calendario_metricool.csv`.
                </div>
              </div>
              <a
                href="/minicurso-robot/starter-kit-robot-tct.zip"
                download
                className="bg-[#CCFF00] text-black font-mono font-black text-xs sm:text-sm uppercase px-5 py-3 border-2 border-white shadow-[4px_4px_0px_#FFF] whitespace-nowrap hover:bg-white transition-all"
              >
                📦 BAJAR STARTER KIT .ZIP
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
