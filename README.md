# Invitación de casamiento

Proyecto con Svelte 5, Vite y Tailwind CSS.

## Desarrollo

Usar Node.js 24 LTS y npm.

```sh
npm ci
npm run dev
```

## Calidad de código

- `npm run format`: formatea el proyecto con Prettier.
- `npm run format:check`: verifica el formato sin modificar archivos.
- `npm run lint`: verifica JavaScript y Svelte con ESLint; no acepta advertencias.
- `npm run lint:fix`: aplica las correcciones automáticas de ESLint.
- `npm run check`: ejecuta formato, lint y build de producción.
- `npm run build`: genera la versión de producción en `dist/`.
- `npm run preview`: sirve el último build localmente.

Prettier usa dos espacios, comillas dobles, punto y coma y finales de línea LF.
Los plugins de Svelte y Tailwind formatean los componentes y ordenan las clases
usando `tailwind.config.js`. `.editorconfig` mantiene la indentación entre editores.

ESLint utiliza las reglas recomendadas de JavaScript y Svelte, reconoce las runes
de Svelte 5 en `.svelte` y `.svelte.js` y desactiva reglas de formato que se
superponen con Prettier. Los archivos generados, las dependencias y los recursos
estáticos quedan excluidos de los chequeos.

Configuración basada en las guías de
[ESLint para Svelte](https://sveltejs.github.io/eslint-plugin-svelte/user-guide/) y
[Prettier para Svelte](https://github.com/sveltejs/prettier-plugin-svelte).
