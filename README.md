# Portfólio — Thainara Gomes

Portfólio pessoal migrado para uma stack moderna: **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy no GitHub Pages

O workflow `.github/workflows/deploy.yml` faz o build e publica a pasta `dist` automaticamente a cada push na branch `main`.

No GitHub, abra **Settings > Pages** e deixe **Source** como **GitHub Actions**.

## Estrutura

- `src/components`: componentes reutilizáveis
- `src/data`: conteúdo de skills e projetos
- `public/images`: imagens estáticas
- `src/index.css`: Tailwind + estilos globais
