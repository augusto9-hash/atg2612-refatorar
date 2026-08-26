# Coopstar Express — Landing Page Moderna

> Hotsite one-page de alta performance para a **Coopstar Express**, empresa especializada em serviços de **Moto Frete, Delivery Corporativo e Logística Expressa** em São Paulo e Grande SP.

[![Deploy Status](https://img.shields.io/badge/status-online-brightgreen)](#)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vite.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## 📋 Sobre o Projeto

Refatoração completa de um hotsite legado (XHTML 1.0 + jQuery 1.4 + layouts fixos) para uma **Single Page Application (SPA)** moderna, componentizada, responsiva e otimizada para conversão.

**Empresa:** Coopstar Express  
**Segmento:** Transporte Expresso / Moto Frete / Logística  
**Localização:** Av. Jurucê, 898 — Moema, São Paulo/SP  
**Atendimento:** 24 horas, segunda a segunda  
**Contato:** (11) 5052-3563 / (11) 5051-4442

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Papel |
|---|---|---|
| [React](https://react.dev/) | 19 | Framework de UI |
| [TypeScript](https://www.typescriptlang.org/) | 6 | Tipagem estática |
| [Vite](https://vite.dev/) | 8 | Build tool e dev server |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Estilização utility-first |
| [Framer Motion](https://www.framer.com/motion/) | 13 | Animações e transições |
| [Lucide React](https://lucide.dev/) | — | Iconografia vetorial |
| [Web3Forms](https://web3forms.com/) | — | Backend do formulário de contato |

---

## 📁 Estrutura de Pastas

```text
04 Refatorar/
├── old/                         # Código original legado preservado
├── public/                      # Assets estáticos (logotipo, imagens)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Menu sticky glassmorphic + atalhos 24h
│   │   │   └── Footer.tsx       # Rodapé com contatos e créditos
│   │   └── sections/
│   │       ├── Hero.tsx         # Headline de conversão + badges de confiança
│   │       ├── About.tsx        # Quem somos — 9+ anos no mercado
│   │       ├── Services.tsx     # Cards: Moto Frete, Delivery e Intermunicipal
│   │       ├── Process.tsx      # Processo de atendimento em 4 passos
│   │       ├── PricingModal.tsx # Modal interativo: tabela de preços e regiões
│   │       ├── FAQ.tsx          # Perguntas frequentes com accordion animado
│   │       └── Contact.tsx      # Formulário Web3Forms + Mapa + Contatos 24h
│   ├── types/
│   │   └── index.ts             # Interfaces TypeScript do projeto
│   ├── App.tsx                  # Componente raiz One-Page
│   ├── index.css                # Estilos globais Tailwind v4
│   └── main.tsx                 # Entry point
├── .env.example                 # Modelo de variáveis de ambiente
├── .gitignore
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Como Rodar Localmente

### 1. Pré-requisitos
- [Node.js](https://nodejs.org/) **v20+**
- [npm](https://www.npmjs.com/) **v10+**

### 2. Clone o repositório
```bash
git clone https://github.com/augusto9-hash/atg2612-refatorar.git
cd atg2612-refatorar
```

### 3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```
Edite o arquivo `.env` e insira sua chave do Web3Forms:
```env
VITE_WEB3FORMS_KEY=sua_chave_aqui
```

### 4. Instale as dependências
```bash
npm install
```

### 5. Inicie o servidor de desenvolvimento
```bash
npm run dev
```
Acesse: **http://localhost:5173/**

---

## 🏗️ Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o bundle de produção em `/dist` |
| `npm run preview` | Pré-visualiza o build de produção localmente |
| `npm run lint` | Executa o linter Oxlint |

---

## 🔒 Segurança e Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente do Vite para proteger chaves de API.

**Nunca faça commit do arquivo `.env`!** Ele já está listado no `.gitignore`.

| Variável | Descrição |
|---|---|
| `VITE_WEB3FORMS_KEY` | Chave de acesso da API Web3Forms para o formulário de contato |

---

## 🏆 Funcionalidades

- ✅ **Design Premium** — Dark mode, glassmorphism, gradientes e micro-animações
- ✅ **Totalmente Responsivo** — Mobile-first, adaptado para todos os tamanhos de tela
- ✅ **Navegação Sticky Glassmorphic** — Com links âncora e atalhos de chamada 24h
- ✅ **Hero de Alta Conversão** — CTA direto para WhatsApp e telefone
- ✅ **Modal de Tabela de Preços** — Consulta interativa por região (Capital / Grande SP / Contrato)
- ✅ **FAQ com Accordion** — Respostas animadas com Framer Motion
- ✅ **Formulário de Contato Real** — Integrado com Web3Forms (sem backend próprio)
- ✅ **Mapa Interativo** — Google Maps embutido com localização em Moema/SP
- ✅ **Botão Flutuante WhatsApp** — Acesso rápido à solicitação via WhatsApp
- ✅ **SEO Básico** — Meta tags, OpenGraph e estrutura semântica HTML5
- ✅ **A11y** — Atributos ARIA, navegação por teclado e contraste adequado

---

## 📞 Contato da Empresa

| Canal | Informação |
|---|---|
| 📞 Telefone 1 | (11) 5052-3563 |
| 📞 Telefone 2 | (11) 5051-4442 |
| 📧 E-mail | coopstar_express@hotmail.com |
| 📍 Endereço | Av. Jurucê, 898 — Moema, São Paulo/SP |

---

## 📝 Licença

Este projeto é de uso privado. Todos os direitos reservados à **Coopstar Express**.  
Desenvolvimento: [Estúdio Criarte](http://www.estudiocriarte.com.br/promohotsite)
