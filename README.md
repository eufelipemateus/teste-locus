# teste-locus

  **Este projeto foi criado para um processo seletivo**

##

Este  projeto foi construido com  docker-composer para executar basta subir a aplicação com **docker-composer up**

## Como Instalar?

```bash
git clone  https://github.com/eufelipemateus/teste-locus.git
cd teste-locus
cp .env.example .env
docker-compose up
```

### Em um novo Terminal migre o banco de dados

```bash
docker exec -it  teste-locus_locus.backend bash
python manage.py migrate
```

## O Projeto

- Frontend - **Angular**
- Backend - **Django**

## Rotas Backend

- POST /items - Cadastrar um novo item
- GET /items - Listar todos items
- PUT /items/{id} - Atualizar um item
- GET /items/{id} - Retornar um item
- DELETE /items/{id} - Excluir um item
- POST /sales - Cadastrar uma venda
- GET /sales - Listar todos vendas
- PUT /sales/{id} - Atualizar um venda
- GET /sales/{id} - Retornar um venda
- DELETE /sales/{id} - Excluir um venda

## Rotas Frontend

- GET /items
- GET /sales

## Bugs

- No Front ao exclurir não esta excluindo o item correto.
- não esta retornando a quantidade de itens da venda

### Author

[Felipe Mateus](https://felipemateus.com) - [@eufelipemateus](https://github.com/eufelipemateus)
