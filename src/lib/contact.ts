// Fuente única de verdad para los datos de contacto del sitio.
// Cambia aquí y se actualiza en todas las páginas.

export const SITE_URL = "https://talentocontarifa.lat";

export const CONTACT_EMAIL = "contacto@talentocontarifa.lat";
export const EMAIL_SUBJECT = "Brinco al vacío desde talentocontarifa.lat";
export const EMAIL_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;

export const WHATSAPP_NUMBER = "525644982624";
export const WHATSAPP_DISPLAY = "+52 56 4498 2624";
export const PHONE_URL = `tel:+${WHATSAPP_NUMBER}`;

export const DEFAULT_WA_MSG =
  "Hola. Llegué por curiosidad. Quiero ver qué tan profundo llega el agujero del conejo.";

export const whatsappUrl = (msg: string = DEFAULT_WA_MSG) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WHATSAPP_URL = whatsappUrl();
