
<h1>Galeria de imagens e videos</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=Netlify&message=deploy&color=blue&style=for-the-badge&logo=netlify"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
   <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>

> Status do Projeto: :warning:  em desenvolvimento.

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

## Descrição do projeto 

<p align="justify">
 A aplicação permite ao usuário visualizar e pesquisar imagens ou vídeos, a paginação é feita utilizá infinite scroll e consome dados da api Pixabay.
</p>

## Funcionalidades

:heavy_check_mark: Visualizar imagens ou vídeos

:heavy_check_mark: Pesquisar imagens ou vídeos

## Layout ou Deploy da Aplicação :dash:

> Deploy da aplicação utilizando netlify: https://image-video-gallery.netlify.app/

## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)

## Como rodar a aplicação :arrow_forward:
Obtenha a api key em [Pixabay](https://pixabay.com/api/docs/)

No terminal, clone o projeto: 
```
git clone https://github.com/monteiroVitor/image-video-gallery.git
```
Entre na pasta do projeto: 
```
cd image-video-gallery
```
Crie o arquivo .env na raiz da aplicação
```
touch .env
``` 
Adicione a constante contendo sua api key
```
REACT_APP_API_KEY=sua_api_key
``` 
Instale as dependências
```
yarn install
``` 
Execute a aplicação
```
yarn start
``` 

## Como rodar os testes

```
yarn test
```
## Linguagens, dependencias e libs utilizadas :books:

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [Redux](https://redux.js.org/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Styled Components](https://styled-components.com/)

## Licença 

The [MIT License]() (MIT)


