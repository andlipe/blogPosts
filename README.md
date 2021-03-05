# BlogX

## Sobre o Projeto
Projeto com objetivo de criar um feed noticias, mockando as noticias utilizando as APIs de [Posts](https://jsonplaceholder.typicode.com/posts) e de [Users](https://jsonplaceholder.typicode.com/users).

## Criado com

[NextJS](https://nextjs.org)  
[Jest](https://jestjs.io)  
[TypeScript](https://www.typescriptlang.org)
### Pré requisitos
Node.Js 14.x

## Instalação

1. Clone esse repositório
```sh
git clone https://github.com/andlipe/blogPosts.git
```
2. Faça a instalação dos pacotes NPM
```sh
yarn
```
1. Renomeie o arquivo .env.example para .env e substitua e coloque a URL onde será rodado o projeto
```sh
URL="http://localhost:3000"
``` 
4. Inicie o projeto
```sh
yarn dev
```
4. Para rodar os testes unitários
```sh
yarn test
```
5. Gera a build para produção
```sh
yarn build
```
# Api

## Listar todos os posts
### Request
`GET /posts`

### Response
```json
{
    [
        {
            "userId":10,
            "id":100,
            "title":"at nam consequatur ea labore ea harum",
            "body":"cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut",
            "user":{
                "id":10,
                "name":"Clementina DuBuque"
            }
        },
    ]
}
```
## Versão em produção  
Uma versão em produção pode ser acessada [nesse link](https://blogx.vercel.app).