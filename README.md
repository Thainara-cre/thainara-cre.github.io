# Portfólio — Thainara Gomes

Portfólio pessoal desenvolvido com **React, TypeScript, Vite, Tailwind CSS e Framer Motion**.

## Requisitos

- Node.js 22.12 ou superior
- npm

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Qualidade e build

```bash
npm run typecheck
npm run build
npm run check
```

## Estrutura

```text
src/
├── components/   # componentes de interface reutilizáveis
├── data/         # conteúdo e configuração centralizada
├── hooks/        # hooks reutilizáveis
├── lib/          # utilitários e configurações compartilhadas
├── sections/     # seções da página
├── App.tsx       # composição do layout
└── main.tsx      # bootstrap da aplicação
```

## Deploy

O deploy é realizado automaticamente pelo GitHub Actions após alterações na branch `main`.

Fluxo: `main` → build do Vite → `dist` → GitHub Pages.
