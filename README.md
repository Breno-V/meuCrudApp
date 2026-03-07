# 💡 Projeto mobile que consome uma API REST e executa CRUD básico 

## 📌 Objetivo 
- **Praticar** meus **conhecimentos** em **API's REST** e do framework **React Native**
- **Estruturar** uma aplicação mobile com **React Native** consumindo uma **API REST** simulada com **json-server**
- **Implementar** as operações de **CRUD** (Create, Read, Update e Delete) com os dados fornecidos pela API

## 🛠️ Tecnologias      
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" heigth="100" width="100"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" heigth="100" width="100"/> 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" heigth="100" width="100"/> 
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" heigth="100" width="100"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrok/ngrok-original.svg" heigth="100" width="100"/>

## ❔ Como executar o projeto

## ✅ Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [Expo Go](https://expo.dev/client) no celular
- [Git](https://git-scm.com/)
### Preparando o Ambiente:
1. Clone o Repositório:
   ```bash
   git clone https://github.com/Breno-V/meuCrudApp
   ```
2. Entre na pasta raíz do projeto
   ```bash
   cd meuCrudApp
   ```
4. Instale as dependências necessárias:
   - Usando NPM:
     ```bash
     npm install
     ```
   - Usando Yarn:
     ```bash
     yarn install
     ```
   - Usando pnpm
     ```bash
     pnpm install
     ```

### Executando Expo:
Inicialize o projeto com expo (na raíz do projeto)
   - Se usará a mesma internet entre o PC e Celular:
   ```bash
   npx expo start
   ```
   - Se não usar, utilize:
   ```bash
   npx expo start --tunnel
   ```
  o ```--tunnel``` serve para criar um tunnel entre o PC e o celular, permitindo rodar a aplicação sem que eles estejam na mesma internet
### Executando json-server
Simule seu BackEnd utilizando o json-server
- Na raíz do seu projeto, execute:
  ```bash
  npx json-server --watch db.json --port 3000  
  ```
  O ```--watch``` serve para que você não precise sempre reiniciar o terminal toda vez que atualizar algo de **db.json**
  O ```--port``` tem a utilidade de dizer ao json-server em qual porta ele deve inicializar
### Usando o Ngrok
O Ngrok é necessário para expor o json-server à internet, permitindo que o celular acesse a API mesmo em redes diferentes.

1. Crie uma conta gratuita em [ngrok.com](https://ngrok.com) e instale o Ngrok
2. Autentique seu token (fornecido no painel do Ngrok):
```bash
   ngrok config add-authtoken SEU_TOKEN_AQUI
```
3. Exponha a porta do json-server:
```bash
   ngrok http 3000
```
4. O Ngrok irá gerar uma URL pública, como:
```bash
   https://LINK_URL.ngrok-free.app
```
5. Substitua o endereço da API no projeto por essa URL gerada, seja em um .env ou em um módulo separado, por exemplo:
```js
   const API_URL = "https://LINK_URL.ngrok-free.app";
```
> ⚠️ **Atenção:** A URL gerada pelo Ngrok muda a cada vez que você o reinicia. Lembre-se de atualizá-la no projeto sempre que isso ocorrer.
  
