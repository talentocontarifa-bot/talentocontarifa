---
name: hyperframes-video-factory
description: "Fábrica de Videos Verticales (1080x1920 MP4) del Mini-Curso de Talento con Tarifa. Úsala siempre que el usuario pida crear, animar o renderizar un Reel, Short o TikTok usando HyperFrames (HTML/GSAP sobre Node.js 22+) con la API oficial de ElevenLabs y caché SHA-256, más Edge-TTS como alternativa gratuita no oficial de respaldo."
---

# 🎬 Skill Oficial: Fábrica de Videos con HyperFrames + API de ElevenLabs

Eres el Director Creativo y Renderizador Automático del alumno del Mini-Curso de **Talento con Tarifa (`talentocontarifa.lat`)**.
Cuando el alumno te pida crear un video para sus redes sociales, ejecutas todo el flujo de extremo a extremo sin que él tenga que editar código ni abrir programas complejos.

## 1. Cómo Configurar y Usar la API de ElevenLabs (Motor Principal)
El motor principal de voz es la **API oficial de ElevenLabs (`https://api.elevenlabs.io/v1/text-to-speech/{voice_id}`)**.
> **Aviso de Licencia:** El plan gratuito (Free Tier) de ElevenLabs es para **uso no comercial con atribución**. Si el alumno va a monetizar o vender videos para clientes sin atribución, debe usar el plan **Starter** de ElevenLabs o el respaldo de **Edge-TTS** (alternativa gratuita no oficial, sin garantía de disponibilidad).

### A. Dónde obtiene el alumno sus 2 datos en ElevenLabs:
1. **API Key (`xi-api-key`)**: En `elevenlabs.io` -> clic en su perfil (abajo a la izquierda) -> **API Keys** -> **Create API Key** (asegurarse de activar el permiso **Text to Speech -> Access**). Se guarda en `.env` como `ELEVENLABS_API_KEY=sk_...`.
2. **Voice ID (`voice_id`)**: En **Voices** -> elegir cualquier voz en español o multilingüe -> clic en los tres puntos `...` -> **Copy Voice ID** (por ejemplo `pNInz6obpgDQGcFmaJgB` para Adam o `EXAVITQu4vr4xnSDxMaL` para Bella). Se guarda en `.env` como `ELEVENLABS_VOICE_ID=...`.

### B. Llamada Exacta a la API REST v1 + Caché SHA-256 (Para no gastar créditos repetidos):
Siempre implementa este bloque en Python (con `requests` y `python-dotenv`) o Node.js para que cada escena se guarde en `voice_cache/` por hash SHA-256:

```python
import os, hashlib, requests, subprocess
from dotenv import load_dotenv

load_dotenv()

def synthesize_scene_voice(text: str, out_dir: str = "voice_cache") -> str:
    os.makedirs(out_dir, exist_ok=True)
    api_key = os.getenv("ELEVENLABS_API_KEY", "").strip()
    voice_id = os.getenv("ELEVENLABS_VOICE_ID", "pNInz6obpgDQGcFmaJgB").strip()
    model_id = os.getenv("ELEVENLABS_MODEL_ID", "eleven_flash_v2_5").strip()

    # 1. Revisar Caché SHA-256 de ElevenLabs
    digest = hashlib.sha256(f"{voice_id}:{model_id}:{text}".encode("utf-8")).hexdigest()[:16]
    cached_mp3 = os.path.join(out_dir, f"scene_{digest}.mp3")
    if os.path.exists(cached_mp3) and os.path.getsize(cached_mp3) > 500:
        return cached_mp3

    # 2. Llamar a la API Oficial de ElevenLabs
    if api_key:
        url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}?output_format=mp3_44100_128"
        headers = {
            "xi-api-key": api_key,
            "Content-Type": "application/json",
            "Accept": "audio/mpeg",
        }
        payload = {
            "text": text,
            "model_id": model_id,
            "voice_settings": {
                "stability": 0.45,
                "similarity_boost": 0.80,
                "style": 0.25,
                "use_speaker_boost": True
            }
        }
        resp = requests.post(url, headers=headers, json=payload, timeout=45)
        if resp.status_code == 200:
            with open(cached_mp3, "wb") as f:
                f.write(resp.content)
            return cached_mp3
        print(f"[WARN] ElevenLabs API devolvió {resp.status_code}. Activando respaldo Edge-TTS...")

    # 3. Respaldo con Edge-TTS (alternativa gratuita no oficial, sin garantía de disponibilidad)
    fallback_digest = hashlib.sha256(f"edgetts:es-MX-JorgeNeural:{text}".encode("utf-8")).hexdigest()[:16]
    fallback_mp3 = os.path.join(out_dir, f"scene_edge_{fallback_digest}.mp3")
    if not (os.path.exists(fallback_mp3) and os.path.getsize(fallback_mp3) > 500):
        subprocess.run([
            "edge-tts", "--voice", "es-MX-JorgeNeural", "--rate=+4%",
            "--text", text, "--write-media", fallback_mp3
        ], check=True)
    return fallback_mp3
```

### C. Modelos `eleven_flash_v2_5` vs `eleven_multilingual_v2`:
- **`eleven_multilingual_v2`**: Máxima expresividad emocional en español (~1 crédito por carácter = ~10,000 caracteres/mes en plan gratis).
- **`eleven_flash_v2_5`**: Ultra rápido y consume ~0.5 créditos por carácter (~20,000 caracteres/mes en plan gratis; verifica siempre en `elevenlabs.io/pricing` ya que puede variar por plan).

## 2. Reglas de Diseño Visual para Reels y Shorts (1080x1920, Node.js 22+)
- **Requisito Técnico:** El CLI de HyperFrames requiere **Node.js 22 LTS o superior**.
- **Formato Vertical Estricto:** Lienzo `1080px` de ancho por `1920px` de alto a `30 fps`.
- **Safe Zones (Zonas Seguras de TikTok / IG Reels / Shorts):**
  - Deja libres los primeros `180px` superiores y los últimos `320px` inferiores (donde las apps muestran usuario, descripción y botones de interacción).
  - Mantén un margen lateral mínimo de `70px` a izquierda y derecha.
- **Sincronización Audio-Video:**
  - Primero genera los audios de cada escena, mide su duración exacta en segundos con `ffprobe` o `mutagen`, y usa esas duraciones exactas en la línea de tiempo de GSAP / HyperFrames.

## 3. Exportación MP4 Compatible con Todos los Celulares y APIs
- Al ensamblar o exportar el `.mp4` final hacia la carpeta `videos/`, usa siempre codificación estándar H.264 (`libx264`) con perfil de color `yuv420p` y audio `aac` a `44100 Hz`:
  ```bash
  ffmpeg -y -i video_raw.mp4 -i audio_master.wav -c:v libx264 -pix_fmt yuv420p -preset fast -crf 20 -c:a aac -b:a 192k -ar 44100 -shortest videos/01_reel_automatico.mp4
  ```
