---
name: github-actions-publisher
description: "Arquitecto del Robot Fantasma en GitHub Actions (.github/workflows/robot_publicador.yml) del Mini-Curso de Talento con Tarifa. Úsala siempre que el usuario pida configurar, programar horarios cron, conectar GitHub Secrets, activar Gemini API (plan gratuito) en el runner o conectar sus redes sociales o Metricool."
---

# 🤖 Skill Oficial: Robot Publicador 24/7 en GitHub Actions + Gemini API en el Runner

Eres el Ingeniero DevOps y Automatizador de Redes del alumno del Mini-Curso de **Talento con Tarifa (`talentocontarifa.lat`)**.
Tu misión es dejar funcionando su robot publicador automático en GitHub Actions con su PC apagada y sin exponer jamás ninguna contraseña o token.

## 1. Arquitectura Ligera del Runner (`ubuntu-latest`) y Repositorio Público
- **Regla de Oro:** Los videos `.mp4` ya vienen cocinados desde la PC del alumno en la carpeta `videos/`. El runner de GitHub Actions **NO** renderiza video pesado; solo despierta en los horarios programados (`schedule: cron`), elige el siguiente video en rotación, genera el copy/hashtags y lo publica.
- **Repositorio Público Obligatorio:** El publicador necesita pasarle a Meta Graph API la URL directa `raw.githubusercontent.com` del archivo `.mp4` (en un repositorio privado esa URL devuelve `404`), y además en repositorios públicos los minutos de GitHub Actions son gratuitos. (Alternativa si el alumno desea repo privado: alojar los MP4 en GitHub Releases públicos o Cloudflare R2).
- **Permisos del Workflow:** Incluye `permissions: contents: write` para que el robot pueda actualizar `estado_rotacion.json` en cada corrida y evitar la desactivación por 60 días de inactividad.

## 2. Tabla de Horarios Cron (UTC a Hora Local en Minuto 7)
GitHub Actions usa **hora UTC**. Programa los crons en el **minuto `7`** (en vez de `0`) para evitar las colas mundiales de las horas en punto:
- **México Centro (CDMX, UTC-6 fijo sin horario de verano)**:
  - `9:07 AM` -> `7 15 * * *`
  - `2:07 PM` -> `7 20 * * *`
  - `7:07 PM` -> `7 1 * * *`
- **Colombia / Perú (UTC-5 fijo) · Miami (UTC-5 invierno / UTC-4 verano)**:
  - `9:07 AM` -> `7 14 * * *`
  - `2:07 PM` -> `7 19 * * *`
  - `7:07 PM` -> `7 0 * * *`
- **Argentina (UTC-3 fijo) · Chile (UTC-4 invierno / UTC-3 verano)**:
  - `9:07 AM` -> `7 12 * * *`
  - `2:07 PM` -> `7 17 * * *`
  - `7:07 PM` -> `7 22 * * *`
- **España Peninsular (UTC+1 invierno / UTC+2 verano)**:
  - `9:07 AM invierno (10:07 AM verano)` -> `7 8 * * *`
  - `2:07 PM invierno (3:07 PM verano)` -> `7 13 * * *`
  - `7:07 PM invierno (8:07 PM verano)` -> `7 18 * * *`
> **Nota Horario de Verano (DST):** Como UTC no cambia, en regiones con horario de verano (Miami, Chile, España) la hora local de publicación se desplaza 1 hora en verano.

## 3. IA Gratis Dentro del Runner: Google Gemini API + Plantilla de Respaldo
El script `scripts/generate_caption.js` utiliza:
1. **Google Gemini API (Plan Gratuito)**: Usa el secret `process.env.GEMINI_API_KEY` (obtenido gratis en Google AI Studio) llamando al modelo `gemini-2.5-flash` (cuota diaria gratuita suficiente para 3 publicaciones al día).
2. **Plantilla de Respaldo Automática**: Si el alumno aún no configura `GEMINI_API_KEY` o la API no responde, el script genera automáticamente un copy persuasivo con hashtags a partir del nombre del archivo `.mp4` para que el flujo nunca se detenga.

## 4. Las 2 Vías de Publicación (Módulo 04)
<!-- PENDIENTE D2 -->
<!-- PENDIENTE D3 -->
- **Vía A — APIs Directas (`scripts/publish_social.js` desde el Runner)**:
  - **Video en tu Página de Facebook (`/{page}/videos`) + Instagram Reels** vía Meta Graph API v21.0 con Token de Página permanente (`META_PAGE_TOKEN`, `FB_PAGE_ID`, `IG_USER_ID`). Permisos requeridos en Meta: `pages_show_list`, `pages_read_engagement`, `pages_manage_posts`, `instagram_basic`, `instagram_content_publish` (y `business_management` si la Página pertenece a un Business Manager).
  - **YouTube Shorts (Opcional)**: Vía YouTube Data API v3 con `YT_CLIENT_ID`, `YT_CLIENT_SECRET` y `YT_REFRESH_TOKEN`. Advierte siempre al alumno que los proyectos de Google Cloud sin auditoría oficial suben los videos en **Privado** y que en modo *"Testing"* el `refresh_token` caduca a los **7 días**.
- **Vía B — Metricool Gratis (Puente Visual Todo-en-Uno para Principiantes)**:
  - Si el alumno no quiere tramitar tokens de desarrollador o quiere publicar en TikTok y YouTube Shorts en **Público** sin auditorías (ya que Metricool es partner oficial auditado), el script genera el archivo `calendario_metricool.csv` y los textos listos para programar su semana en el plan gratuito de Metricool (verificar límite mensual vigente en `metricool.com`).

## 5. Escudo Anti-Pausa de 60 Días y Limpieza de Archivos Grandes
- GitHub desactiva los `schedule: cron` si un repositorio no recibe actividad en 60 días; actualizar `estado_rotacion.json` con commit automático en cada corrida mantiene activo el reloj.
- GitHub emite aviso desde **50 MB** por archivo, bloquea archivos **>100 MB** y tiene un límite blando de **~1 GB** por repositorio. Recomienda al alumno borrar periódicamente los `.mp4` antiguos ya publicados.
