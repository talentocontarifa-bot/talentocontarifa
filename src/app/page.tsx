import {
  CONTACT_EMAIL,
  EMAIL_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  whatsappUrl,
} from "@/lib/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F4F0] text-[#0A0A0A] selection:bg-[#0A0A0A] selection:text-[#CCFF00] overflow-x-hidden">
      {/* =====================================================================
          1. TOP NAVBAR (#CCFF00 + Logos Oficiales)
         ===================================================================== */}
      <header className="sticky top-0 z-50 w-full bg-[#CCFF00] border-b-2 border-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          {/* Logo Oficial */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-black border-2 border-black flex items-center justify-center p-1.5 shadow-[2px_2px_0px_#000000]">
              <img
                src="/icon.svg"
                alt="Icono Talento con Tarifa"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative w-40 sm:w-52 h-7 sm:h-8">
              <img
                src="/horizontal.svg"
                alt="Talento con Tarifa"
                className="w-full h-full object-contain object-left"
              />
            </div>
          </a>

          {/* Navegación Limpia */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-8 font-mono text-xs font-bold uppercase tracking-wider text-black"
          >
            <a href="#servicios" className="hover:underline underline-offset-4">
              SERVICIOS
            </a>
            <a href="#nosotros" className="hover:underline underline-offset-4">
              NOSOTROS
            </a>
            <a href="#contacto" className="hover:underline underline-offset-4">
              CONTACTO
            </a>
            <a
              href="/minicurso-robot"
              className="text-[#FF0055] font-black hover:underline underline-offset-4"
            >
              MINI-CURSO 1€
            </a>
            <a href="/form" className="hover:underline underline-offset-4">
              FORMULARIO
            </a>
          </nav>

          {/* CTA Derecha */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-mono text-xs font-bold uppercase tracking-wider px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_#000000] hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
            >
              <span>HÁBLAME</span>
              <span className="text-[#CCFF00]">→</span>
            </a>
            <span
              aria-hidden="true"
              className="hidden sm:inline font-mono text-xl text-black/70 select-none"
            >
              +
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ===================================================================
            2. HERO SECTION (#CCFF00 — Directo y sin paja)
           =================================================================== */}
        <section className="bg-[#CCFF00] border-b-2 border-black py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            {/* Kicker Técnico */}
            <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest text-black/80 mb-6">
              <span>AGENCIA DE IA Y AUTOMATIZACIÓN</span>
              <span className="h-[1.5px] w-16 bg-black/50 inline-block"></span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Columna Izquierda (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl sm:text-7xl font-black uppercase tracking-[-0.04em] leading-[0.92] text-black">
                  SI LLEGASTE
                  <br />
                  AQUÍ
                  <br />
                  <span className="inline-block bg-white text-black px-4 py-1.5 border-[3px] border-black shadow-[6px_6px_0px_#000000] mt-2">
                    TIENES
                    <br />
                    CURIOSIDAD.
                  </span>
                </h1>

                <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-black pt-1">
                  E L &nbsp; M U N D O &nbsp; E S &nbsp; V A S T O .
                </p>

                <p className="text-base sm:text-xl font-medium text-black max-w-md leading-relaxed">
                  Brinca al vacío, Dorothy. Háblame y veamos qué tan profundo
                  llega el agujero del conejo.{" "}
                  <strong className="font-black">
                    Deja de hacer trabajo de robot con manos de humano.
                  </strong>
                </p>

                <div className="pt-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-7 py-4 font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg font-black uppercase tracking-wider border-2 border-black shadow-[5px_5px_0px_#000000] hover:bg-white hover:text-black transition-colors inline-flex items-center gap-3"
                  >
                    <span>HÁBLAME, PLATICAMOS</span>
                    <span className="text-[#CCFF00]">→</span>
                  </a>
                </div>
              </div>

              {/* Columna Derecha (5 Cols): Marco Polaroid Limpio con /cerebro.webp */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-[390px] bg-white border-[3px] border-black shadow-[10px_10px_0px_#000000] p-5">
                  <div className="bg-[#F8F8F6] border-2 border-black p-6 flex items-center justify-center min-h-[300px]">
                    <img
                      src="/cerebro.webp"
                      alt="Cerebro Agencial Talento con Tarifa"
                      className="w-full max-w-[250px] h-auto object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.18)]"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-2 font-mono text-[11px] font-bold uppercase">
                    <span className="bg-black text-[#CCFF00] px-3 py-1.5">
                      IDEAS AUTOMATIZADAS · RESULTADOS REALES ↗
                    </span>
                    <span className="bg-black text-white px-2.5 py-1.5 shrink-0">
                      01 / 03
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Línea Técnica Inferior */}
            <div className="mt-14 pt-4 border-t border-black/40 flex items-center justify-between gap-4 font-mono text-[11px] font-bold uppercase tracking-wider text-black">
              <span>■ IA &nbsp;+&nbsp; AUTOMATIZACIÓN &nbsp;+&nbsp; TALENTO HUMANO</span>
              <span className="hidden sm:block flex-1 border-b border-black/40 mx-4"></span>
              <span>┫</span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. SECTION: LO QUE HACEMOS (3 Tarjetas al grano)
           =================================================================== */}
        <section
          id="servicios"
          className="py-20 md:py-24 bg-[#F4F4F0] border-b-2 border-black scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="inline-block bg-[#CCFF00] text-black font-mono text-xs font-bold uppercase px-2.5 py-1 border border-black mb-3">
                  LO QUE HACEMOS
                </span>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-black uppercase tracking-[-0.03em] leading-[0.95] text-black max-w-xl">
                  TRES COSAS QUE TUS
                  <br />
                  HUMANOS
                  <br />
                  NO DEBERÍAN ESTAR
                  <br />
                  HACIENDO.
                </h2>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-black/80">
                <span className="text-lg">+</span>
                <div>
                  <div>MÁS EFICIENCIA</div>
                  <div>MENOS DRAMA</div>
                  <div>MÁS RESULTADOS</div>
                </div>
              </div>
            </div>

            {/* 3 Tarjetas Limpias */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
              {/* 01 */}
              <article className="bg-white border-[2.5px] border-black shadow-[7px_7px_0px_#000000] p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-8 bg-black text-white font-mono text-xs font-bold flex items-center justify-center">
                      01
                    </span>
                    <span className="text-lg">⚡</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-black uppercase leading-tight text-black mb-3">
                    COTIZACIONES
                    <br />
                    EN 15 SEGUNDOS
                  </h3>
                  <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                    Tus prospectos no tienen paciencia (y nosotros tampoco).
                    Automatizamos la captura, cotización en PDF y respuesta en
                    WhatsApp para que no se te escape ni una venta.
                  </p>
                </div>
                <div className="pt-4 mt-8 border-t border-black/30 font-mono text-[11px] font-bold uppercase flex items-center justify-between text-black">
                  <span>RÁPIDO &nbsp;/&nbsp; PRECISO &nbsp;/&nbsp; 24/7</span>
                  <span>→</span>
                </div>
              </article>

              {/* 02 */}
              <article className="bg-[#CCFF00] border-[2.5px] border-black shadow-[7px_7px_0px_#000000] p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-8 bg-black text-[#CCFF00] font-mono text-xs font-bold flex items-center justify-center">
                      02
                    </span>
                    <span className="text-lg">⊕</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-black uppercase leading-tight text-black mb-3">
                    SEGUIMIENTO
                    <br />
                    IMPLACABLE
                  </h3>
                  <p className="text-sm sm:text-base text-black/90 font-medium leading-relaxed">
                    Las oportunidades no se cierran solas. Creamos flujos que
                    insisten con contexto, recuerdan cada detalle y convierten a
                    los que te dejaron en visto.
                  </p>
                </div>
                <div className="pt-4 mt-8 border-t border-black/40 font-mono text-[11px] font-bold uppercase flex items-center justify-between text-black">
                  <span>
                    AUTOMATIZA &nbsp;/&nbsp; ACOMPAÑA &nbsp;/&nbsp; CONVIERTE
                  </span>
                  <span>→</span>
                </div>
              </article>

              {/* 03 */}
              <article className="bg-white border-[2.5px] border-black shadow-[7px_7px_0px_#000000] p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-8 h-8 bg-black text-white font-mono text-xs font-bold flex items-center justify-center">
                      03
                    </span>
                    <span className="text-lg">▽</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-black uppercase leading-tight text-black mb-3">
                    FILTRO DE CURIOSOS
                  </h3>
                  <p className="text-sm sm:text-base text-black/80 leading-relaxed">
                    No todos son clientes. Diseñamos agentes y filtros
                    inteligentes que identifican quién tiene presupuesto real y
                    le dan tu tiempo a quien sí importa.
                  </p>
                </div>
                <div className="pt-4 mt-8 border-t border-black/30 font-mono text-[11px] font-bold uppercase flex items-center justify-between text-black">
                  <span>
                    CALIDAD &nbsp;/&nbsp; INTELIGENCIA &nbsp;/&nbsp; ENFOQUE
                  </span>
                  <span>→</span>
                </div>
              </article>
            </div>

            {/* Franja Amarilla Directa */}
            <div className="mt-10 bg-[#CCFF00] border-[2.5px] border-black shadow-[6px_6px_0px_#000000] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg font-black uppercase text-black text-center sm:text-left">
                AUTOMATIZAMOS LO REPETITIVO. PARA QUE TÚ TE ENFOQUES EN LO
                IMPORTANTE.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-black text-white font-mono text-xs font-bold uppercase tracking-wider px-5 py-3 border-2 border-black hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
              >
                <span>HÁBLAME, PLATICAMOS</span>
                <span className="text-[#CCFF00]">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. SECTION: POR QUÉ NOSOTROS (#0A0A0A — Corto y contundente)
           =================================================================== */}
        <section
          id="nosotros"
          className="py-20 md:py-24 bg-[#0A0A0A] text-white border-b-2 border-black scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Izquierda (7 Cols) */}
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-block bg-[#CCFF00] text-black font-mono text-xs font-bold uppercase px-2.5 py-1">
                  POR QUÉ NOSOTROS
                </span>

                <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl font-black uppercase tracking-[-0.03em] leading-[0.95]">
                  NO VENDEMOS LO QUE
                  <br />
                  <span className="text-[#CCFF00]">NO USAMOS</span>
                  <br />
                  <span className="text-[#CCFF00]">NOSOTROS.</span>
                </h2>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg">
                  En Talento con Tarifa no solo hablamos de IA y automatización:
                  la vivimos. Desarrollamos, probamos y usamos cada herramienta
                  en casa hasta que funciona.{" "}
                  <strong className="text-white">
                    Porque si no lo usamos nosotros, no te lo recomendamos.
                  </strong>
                </p>
              </div>

              {/* Derecha (5 Cols): Tarjeta Rosa Dogfooding */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-[380px] bg-[#FF0055] text-white border-2 border-white shadow-[7px_7px_0px_#CCFF00] p-6 flex items-center gap-5">
                  <img
                    src="/cerebro.webp"
                    alt="Cerebro Agencial"
                    className="w-24 h-24 object-contain shrink-0 drop-shadow-[0_8px_12px_rgba(0,0,0,0.4)]"
                  />
                  <div className="space-y-3">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-black uppercase leading-none">
                      DOGFOODING
                      <br />
                      OBSESIVO
                    </h3>
                    <p className="text-xs sm:text-sm text-white/95 italic leading-snug">
                      Primero lo probamos nosotros. Luego lo llevamos a tu
                      negocio.
                    </p>
                    <a
                      href={whatsappUrl(
                        "Hola. Quiero probar su bot en vivo (Dogfooding Obsesivo)."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#CCFF00] text-black font-mono text-xs font-bold uppercase px-4 py-2 border border-black hover:bg-white transition-colors"
                    >
                      <span>PRUÉBALO EN VIVO</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Métricas Limpias */}
            <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:divide-x sm:divide-white/15">
              <div className="flex items-center gap-4">
                <span className="text-[#CCFF00] text-2xl">●</span>
                <div>
                  <div className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-black text-white leading-none">
                    0 <span className="text-base font-mono">HUMANOS</span>
                  </div>
                  <div className="text-xs text-white/60 mt-1">
                    (en la parte aburrida)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:pl-8">
                <span className="text-[#CCFF00] text-2xl">⚡</span>
                <div>
                  <div className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-black text-[#CCFF00] leading-none">
                    100% <span className="text-base font-mono text-white">BOTS</span>
                  </div>
                  <div className="text-xs text-white/60 mt-1">
                    (en la parte repetitiva)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:pl-8">
                <span className="text-[#CCFF00] text-2xl">⏱</span>
                <div>
                  <div className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-black text-white leading-none">
                    &lt; 15 SEG
                  </div>
                  <div className="text-xs text-white/60 mt-1">
                    (en la respuesta inicial)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            5. SECTION: ¿LISTO? BRINCA AL VACÍO (#CCFF00 — Limpio)
           =================================================================== */}
        <section className="py-16 md:py-20 bg-[#CCFF00] border-b-2 border-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-block bg-black text-white font-mono text-xs font-bold uppercase px-2.5 py-1">
                  ¿LISTO?
                </span>

                <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-6xl font-black uppercase tracking-[-0.03em] leading-[0.94] text-black">
                  BRINCA AL VACÍO.
                  <br />
                  <span className="inline-block bg-white text-black px-3.5 py-1 border-[3px] border-black shadow-[5px_5px_0px_#000000] mt-2">
                    HÁBLAME,
                    <br />
                    PLATICAMOS.
                  </span>
                </h2>

                <p className="text-sm sm:text-base font-medium text-black/90 max-w-md leading-relaxed">
                  • ¿Tienes una idea, un proyecto o solo curiosidad? No importa.
                  Escríbeme y veamos qué podemos crear juntos (antes de que se
                  te pase la idea).
                </p>

                <div className="flex flex-wrap items-center gap-5 pt-1">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-7 py-4 font-[family-name:var(--font-space-grotesk)] text-base font-black uppercase tracking-wider border-2 border-black shadow-[5px_5px_0px_#000000] hover:bg-white hover:text-black transition-colors inline-flex items-center gap-3"
                  >
                    <span>HÁBLAME, PLATICAMOS</span>
                    <span className="text-[#CCFF00]">→</span>
                  </a>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-black">
                    IDEAS &nbsp;/&nbsp; AUTOMATIZACIÓN &nbsp;/&nbsp; RESULTADOS
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <img
                  src="/cerebro.webp"
                  alt="Cerebro Agencial Talento con Tarifa"
                  className="w-full max-w-[260px] h-auto object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.22)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. SECTION: CONTACTO — DOS PUERTAS. MISMO AGUJERO. (#F4F4F0)
           =================================================================== */}
        <section
          id="contacto"
          className="py-20 bg-[#F4F4F0] border-b-2 border-black scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="inline-block bg-[#CCFF00] text-black font-mono text-xs font-bold uppercase px-2.5 py-1 border border-black mb-2">
                  CONTACTO
                </span>
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-5xl font-black uppercase tracking-[-0.03em] leading-none text-black">
                  DOS PUERTAS.
                  <br />
                  <span className="bg-[#CCFF00] px-2 inline-block mt-1">
                    MISMO AGUJERO.
                  </span>
                </h2>
              </div>
              <span className="font-mono text-xs font-bold uppercase text-black/70">
                + ELIGE TU FORMA FAVORITA DE ABRIRLO
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* WhatsApp */}
              <div className="bg-[#0A0A0A] text-white border-[2.5px] border-black shadow-[6px_6px_0px_#CCFF00] p-7 flex flex-col justify-between gap-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-black uppercase">
                      WHATSAPP
                    </h3>
                    <span className="font-mono text-xs text-[#CCFF00] font-bold">
                      {WHATSAPP_DISPLAY}
                    </span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    La forma más rápida de platicar. Ideal para dudas, ideas o
                    empezar hoy.
                  </p>
                </div>
                <div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#CCFF00] text-black font-mono text-xs font-bold uppercase px-5 py-3 border border-black hover:bg-white transition-colors"
                  >
                    <span>ESCRÍBEME POR WHATSAPP</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white text-black border-[2.5px] border-black shadow-[6px_6px_0px_#000000] p-7 flex flex-col justify-between gap-5">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-black uppercase">
                      EMAIL
                    </h3>
                    <span className="font-mono text-xs text-black/70 font-bold break-all">
                      {CONTACT_EMAIL}
                    </span>
                  </div>
                  <p className="text-sm text-black/80 leading-relaxed">
                    Si prefieres escribir con calma, aquí estoy. Te respondo en
                    menos de 24h.
                  </p>
                </div>
                <div>
                  <a
                    href={EMAIL_URL}
                    className="inline-flex items-center gap-3 bg-white text-black font-mono text-xs font-bold uppercase px-5 py-3 border-2 border-black hover:bg-black hover:text-[#CCFF00] transition-colors"
                  >
                    <span>ENVÍAME UN EMAIL</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          7. FOOTER (#CCFF00 — Minimalista como la inspiración)
         ===================================================================== */}
      <footer className="bg-[#CCFF00] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 pb-6 border-b border-black/30">
            <a href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-black border border-black flex items-center justify-center p-1">
                <img
                  src="/icon.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative w-40 h-6">
                <img
                  src="/horizontal.svg"
                  alt="Talento con Tarifa"
                  className="w-full h-full object-contain object-left"
                />
              </div>
            </a>

            <nav
              aria-label="Enlaces del pie de página"
              className="flex flex-wrap items-center gap-6 font-mono text-xs font-bold uppercase text-black"
            >
              <a href="#servicios" className="hover:underline">
                SERVICIOS
              </a>
              <a href="#nosotros" className="hover:underline">
                NOSOTROS
              </a>
              <a href="/minicurso-robot" className="hover:underline">
                MINI-CURSO 1€
              </a>
              <a href="/form" className="hover:underline">
                FORMULARIO
              </a>
              <a href="/identidad" className="hover:underline">
                IDENTIDAD
              </a>
            </nav>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-mono text-xs font-bold uppercase px-5 py-2.5 border border-black hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
            >
              <span>HÁBLAME</span>
              <span className="text-[#CCFF00]">→</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[11px] font-bold uppercase text-black">
            <span>■ IA &nbsp;+&nbsp; AUTOMATIZACIÓN &nbsp;+&nbsp; TALENTO HUMANO</span>
            <span>
              CREADO POR HUMANOS (QUE USAN IA) <span className="text-[#FF0055]">♥</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
