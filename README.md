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
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" heigth="100" width="100"/>
          
          

## ❗Resolução do problema

Para eu chegar na resolução dos problemas, utilizei principalmente do recurso [ternário](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_operator) para fazer condicionais importantes como a troca de tela entre editar e adicionar uma pessoa, usando como condição o objeto **person** que retorna __True__ caso exista registro de uma pessoa no db.json, ou __False__. Também criei o componente **Search.js** que realiza a busca de pessoas por filtros (se digitar o nome, sobrenome, email ou o nº de telefone, retorna o card da pessoa). Além do Search.js, foi criado o **handleAddEdit.js** que contém a lógica de confirmação de adição e edição das características de uma pessoa, usando mais uma vez o recurso ternário para identificar se uma pessoa já existe ou não. Se existe, exibe um alerta mostrando os dados que foram editados/adicionados e pede para confirmar a atualização. Se confirmado, chama a operação Create ou Update que está presente no **personCrud.js**.

## 🎖️ Demonstração
<div align="center">
  <video src="https://github.com/user-attachments/assets/3604be61-9ee7-40eb-bcb0-55c4c24db1f8" controls width="600"/>
</div>
     
## 📂 Estrutura de pastas do projeto
```
MEUCRUDAPP/
├── assets/
│   ├── android-icon-background.png
│   ├── android-icon-foreground.png
│   ├── android-icon-monochrome.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   ├── handleAddEdit.js
│   │   ├── Loading.js
│   │   └── Search.js
│   ├── screens/
│   │   ├── AddEditScreen.js
│   │   └── HomeScreen.js
│   ├── servers/
│   │   └── personCrud.js
│   └── styles/
│       ├── addEditScreen.styles.js
│       ├── button.styles.js
│       ├── search.styles.js
│       └── styles.js
├── .env.example
├── .gitignore
├── App.js
├── app.json
├── db.json.example
├── index.js
├── package-lock.json
├── package.json
└── README.md
```
## ❔ Como executar o projeto
Siga os passos abaixo para configurar e executar o projeto localmente em seu dispositivo móvel.
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
3. Instale as dependências necessárias:
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
4. Use esse comando no terminal, na raíz do projeto, para ter um exemplo de **.env**
   ```bash
   cp .env.example .env
   ```
5. Use esse comando no terminal, na raíz do projeto, para ter um exemplo de **db.json**
   ```bash
   cp db.json.example db.json
   ```

## 🥏 Executando o Projeto:
Em três terminais distintos, você deve executar as seguintes operações:
### Executando Expo:
no primeiro terminal, inicialize o projeto com expo (na raíz do projeto)
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
no seu segundo terminal, simule o BackEnd utilizando o json-server
- Na raíz do seu projeto, execute:
  ```bash
  npx json-server db.json --port 3000  
  ```
  O ```--port``` tem a utilidade de dizer ao json-server em qual porta ele deve inicializar
### Criando Tunnel entre a API e nossa Aplicação
no terceiro e último terminal, voce deve escolher uma forma de conectar a API que está no ```localhost``` e sua aplicação mobile. Para isso, existem algumas possibilidades: 

#### NGROK
O Ngrok consegue expor o json-server à internet, permitindo que o celular acesse a API mesmo em redes diferentes.

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
5. Substitua o endereço da API do .env no projeto por essa URL gerada 

> ⚠️ **Atenção:** A URL gerada pelo Ngrok muda a cada vez que você o reinicia. Lembre-se de atualizá-la no projeto sempre que isso ocorrer.

#### CLOUDFLARED
O cloudflared é uma ferramenta de linha de comando oficial e de código aberto da empresa [CloudFlare](https://www.cloudflare.com/pt-br/)

Para inicializar o tunnel com o cloudflared, insira em seu terminal:
```cmd
npx cloudflared tunnel --url http://localhost:PORTA-DO-LOCALHOST :: Insira a porta do localhost que o json-server forneceu, como 3000 por exemplo
```
> ⚠️ **Atenção:** A URL gerada pela Cloudflared, assim como a do NGROK, muda a cada vez que você o reinicia. Lembre-se de atualizá-la no projeto sempre que isso ocorrer.
