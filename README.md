

# Teste Front-End Jr — Econverse

Uma aplicação frontend desenvolvida em **React** e **TypeScript**, com interface conforme layout do Figma e consumo de dados via JSON. Utiliza pré-processador CSS Sass e implementa modal com informações de cada produto.

---

## 📂 Estrutura do Projeto

├── src/
│ ├── components/
│ │ └── ProductCard.tsx
│ │ └── ProductModal.tsx
│ ├── styles/
│ │ └── main.scss
│ ├── data/
│ │ └── products.json
│ ├── App.tsx
│ └── index.tsx
├── public/
│ └── index.html
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore


> **Nota:** ajuste os caminhos conforme a estrutura real do seu projeto.

---

## 🚀 Pré-requisitos

- Node.js **v16** ou superior (recomenda-se instalar via [nvm](https://github.com/nvm-sh/nvm))
- npm (vem junto com o Node.js) ou **yarn**
- Conexão à internet para baixar dependências e acessar endpoints

---

## ⚙️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/MateusMiranda20/teste-front-end.git
   cd teste-front-end

Instale as dependências:

npm install
# ou
yarn install

Rodar em modo de desenvolvimento com hot-reload:

npm start
# ou
yarn start

Variáveis de Ambiente
Consumindo API externa.

REACT_APP_API_URL='https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
