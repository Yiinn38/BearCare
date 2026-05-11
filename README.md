# BearCare – Estructura del proyecto

### 📁 Raíz del proyecto

- `nuxt.config.ts` – Configuración principal de Nuxt (plugins, módulos, metadatos).
- `package.json` – Dependencias y scripts (pnpm).
- `tsconfig.json` – Configuración de TypeScript generada por Nuxt.
- `.gitignore` – Archivos y carpetas excluidos del control de versiones.

### 📁 app/ – Código fuente de la aplicación

- **`app.vue`** – Componente raíz que envuelve la app con `<NuxtLayout>`.
- **`assets/css/main.css`** – Estilos globales (Tailwind CSS v4 importado aquí).
- **`pages/`** – Páginas con enrutamiento automático.
- **`layouts/`** – Plantillas reutilizables que envuelven páginas.
  - `default.vue` – Layout por defecto (header, footer, main).
  - `auth.vue` – Layout para autenticación (ejemplo).
- **`components/`** – Componentes Vue reutilizables (botones, cards, etc.).
- **`composables/`** – Composición de lógica reactiva (`useHead`, `useCustom`).
- **`middleware/`** – Guardias de navegación que se ejecutan antes de cargar una ruta.
- **`plugins/`** – Plugins de Vue que se ejecutan antes de montar la app.
- **`server/`** – API routes y middleware del servidor (Nitro).

### 📁 public/ – Archivos públicos

- `favicon.ico` – Ícono de la pestaña del navegador.
- `robots.txt` – Instrucciones para motores de búsqueda.

### 📁 .nuxt/ – Archivos generados (no modificar)

Contiene el código compilado durante el desarrollo y la construcción.

### 📁 node_modules/ – Dependencias instaladas

## Setup

Make sure to install dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```
