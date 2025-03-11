# Projeto Full-Stack com React, Express e MongoDB

## Descrição
Este é um projeto full-stack onde o **front-end** é desenvolvido com **React** e gerenciado com **Zustand**, enquanto o **back-end** utiliza **Express** com **MongoDB** para armazenamento de dados.

## Estrutura do Projeto
O projeto está organizado da seguinte forma:
```
/projeto-raiz
│── /front        # Front-end (React + Zustand)
│── /back         # Back-end (Express + MongoDB)
│── package.json  # Dependências gerais (se aplicável)
│── README.md     # Documentação do projeto
```

## Tecnologias Utilizadas
### Front-end
- React
- Zustand (para gerenciamento de estado)
- React Router (para navegação)
- Vite (opcional, para build rápida)

### Back-end
- Node.js
- Express
- MongoDB (via Mongoose)
- Dotenv (para configuração de variáveis de ambiente)
- CORS (para permitir comunicação entre front-end e back-end)

## Como Rodar o Projeto
### Configurar e Rodar o Back-end
1. **Instale as dependências**:
   ```sh
   cd back
   npm install
   ```
2. **Configure as variáveis de ambiente**:
   - Crie um arquivo `.env` dentro da pasta `back` e defina as credenciais do banco de dados:
     ```env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/seu_banco
     ```
3. **Inicie o servidor**:
   ```sh
   npm start
   ```
   O back-end rodará na porta **5000** por padrão.

### Configurar e Rodar o Front-end
1. **Instale as dependências**:
   ```sh
   cd ../front
   npm install
   ```
2. **Inicie o front-end**:
   ```sh
   npm run dev
   ```
   O front-end rodará na porta **5174** (ou outra definida pelo Vite)


## Gerenciamento de Estado com Zustand
Exemplo de criação de um store com Zustand:
```js
import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useStore;
```
