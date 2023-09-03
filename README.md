# GitHub Blog - Aplicação de Blog com Dados do GitHub

<p align="center">
  <a href="#sobre">Sobre</a> -
  <a href="#tech">Tecnologias</a> -
  <a href="#pre">Pré Requisitos</a> -
  <a href="#func">Funcionalidades</a> -
  <a href="#autor">Autor</a>
</p>


<h1 id='sobre'>Sobre</h1>

Essa aplicação irá usar a API do Github para buscar issues de um repositório, dados de perfil e exibir como se fosse um blog.

Template gerado com o vite, código em Typescript e estilização com Tailwind CSS.

Visite o meu projeto clicando [AQUI](https://react-ts-github-blog.vercel.app/)

![gif](./src/assets/git/presentation.gif)

<h1 id='tech'>Tecnologias</h1>

- React JS
- Typescript
- Tailwind CSS
- Typography Plugin Tailwind CSS (Formatar HTML)
- Markdown It (Converter Markdown para HTML)
- Lucida React (Ícones)
- React Hook Form (Controle de formulários)
- ZOD Validation (Validação de Formulários)
- Axios (Requisições HTTP)
- React Query (Cache e estado de requisições HTTP)
- React Router Dom (Navegação)
- Date FNS (Formatação de Data)
- Eslint

<h1 id='pre'>Pré requisitos </h1>

### Antes de rodar você precisar ter instalado na sua máquina as seguintes ferramentas:

1. [Git](https://git-scm.com/)
2. [Node.js](https://nodejs.org/)
3. [pnpm](https://pnpm.io/)

```bash
#Clone esse repositório
$ git clone https://github.com/joaofreitas91/react-ts-github-blog.git

#Entre na pasta
$ cd react-ts-github-blog

#Crie um arquivo .env.local seguindo o exemplo do arquivo .env.example ou se preferir use as minhas informações:

VITE_GITHUB_USER=joaofreitas91
VITE_GITHUB_REPO=react-ts-github-blog

#Instale as dependências 
$ pnpm i

#Execute a aplicação em modo de desenvolvimento
$ pnpm dev
```

Se você não estiver com nenhum projeto rodando no momento, o servidor irá iniciar na porta 5173 - acesse [http://localhost:5173/](http://localhost:5173/)

<h1 id='func'>Funcionalidades</h1>
Ao iniciar a aplicação, as informações do usuário são carregadas e, abaixo delas, são exibidas todas as issues dos repositórios configurados. Você pode filtrar essa lista digitando uma palavra-chave no campo de pesquisa. Clicando em um item da lista, você será redirecionado para os detalhes de uma issue.

<h1 id='autor'>Autor</h1>

## Olá, 👋

Feito com 💜 por João Paulo 👋 [Visite meu Linkedin](https://www.linkedin.com/in/joaopfreitas91/)
