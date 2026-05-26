# 💫 Revelación de Género — Valentina & Darío

Página web de invitación para la revelación de género. Construida con React + Vite + Tailwind CSS, lista para desplegar en Vercel.

---

## 🚀 Instalación y uso local

### 1. Clona o crea el proyecto

Si estás creando desde cero con Vite:

```bash
npm create vite@latest gender-reveal -- --template react
cd gender-reveal
```

Si ya tienes los archivos de este proyecto, solo corre:

```bash
cd gender-reveal
```

### 2. Instala las dependencias

```bash
npm install
```

> Esto instalará React, Vite, Tailwind CSS, `date-fns` (para el countdown) y `framer-motion`.

### 3. Configura Tailwind (si creaste el proyecto desde cero)

```bash
npx tailwindcss init -p
```

Reemplaza el contenido de `tailwind.config.js` con el archivo incluido en este proyecto.

### 4. Agrega los archivos del proyecto

Copia todos los archivos de `/src` según la estructura:

```
src/
├── components/
│   ├── Hero.jsx
│   ├── Countdown.jsx
│   ├── EventDetails.jsx
│   ├── GiftGuide.jsx
│   ├── WhatsAppButton.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

### 5. Corre en modo desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

---

## 📦 Build para producción

```bash
npm run build
```

Los archivos listos para producción quedan en la carpeta `/dist`.

---

## 🌐 Despliegue en Vercel

### Opción A — Desde GitHub (recomendado)

1. Sube el proyecto a un repositorio en GitHub.
2. Entra a [vercel.com](https://vercel.com) e inicia sesión.
3. Haz clic en **"Add New Project"**.
4. Importa tu repositorio de GitHub.
5. Vercel detecta automáticamente que es un proyecto Vite. Los settings correctos son:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Haz clic en **Deploy**.

Cada `git push` a `main` hace un deploy automático. ✅

### Opción B — Con Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🎨 Personalización

| Archivo | Qué cambiar |
|---|---|
| `Countdown.jsx` | Cambia `EVENT_DATE` si la fecha cambia |
| `WhatsAppButton.jsx` | Cambia `PHONE` y `MESSAGE` |
| `EventDetails.jsx` | Actualiza dirección, hora, dress code |
| `GiftGuide.jsx` | Edita items de regalo |
| `tailwind.config.js` | Paleta de colores y fuentes |

---

## 🛠️ Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **date-fns** — cálculo preciso del countdown
- **Vercel** — hosting y CI/CD
