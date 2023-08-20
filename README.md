
# Aquatechy






## Instalação e rodando a API

1) Instalar as dependências
```bash
npm install
```
2) Criar .env
```env
NODE_ENV=dev
PORT=3333

DATABASE_URL="mongodb://mongo:example@localhost:27017/mongo?authSource=admin"
```
3) Criar e rodar o container do Mongo
- A aplicação ainda **NÃO** tem totalmente o Docker configurado, **somente o banco de dados**, então, rodando o comando abaixo, irá subir um container do Mongo com a porta 27017 exposta para se conectar ao banco

```bash
docker-compose up
```

4) Sincronizar o schema do Prisma com o Banco
- O banco de dados não vem estruturado de acordo com nosso schema definido no arquivo schema.prisma, portanto, é necessário rodar o comando abaixo para criar os documentos (tabelas)

```bash
npx prisma db push
```

5) Iniciar o servidor
```bash
npm run start:dev
```
## Rotas

### User
#### Listar user

```http
  GET /users/:id
```
| Parâmetro |  Descrição                       |
| :-------- |  :-------------------------------- |
| `id`      |  **Obrigatório**. id do User |



#### Criar user

```http
  POST /users
```
- Exemplo do JSON que precisa ser enviado no body:
```
{
	"name": "Mauricio",
	"email": "email@teste.com",
	"password": "123456"
}
```

### Client
#### Listar client

```http
  GET /clients/:id
```
| Parâmetro |  Descrição                       |
| :-------- |  :-------------------------------- |
| `id`      |  **Obrigatório**. id do Client |



#### Criar cliente

```http
  POST /clients
```
- Exemplo do JSON que precisa ser enviado no body:
```
{
  "userOwnerId": "64d818ace642ee1942976b80",
 "name":"client teste",
 "billingAddress":"Rua teste",
 "billingZip":"cep teste",
 "state":"estado teste",
 "city":"cidade teste",
 "phone1":"434313123",
 "email1":"email@teste.com"
 }
```
### Pools
#### Listar Pool

```http
  GET /pools/:id
```
| Parâmetro |  Descrição                       |
| :-------- |  :-------------------------------- |
| `id`      |  **Obrigatório**. id da Pool |



#### Criar pool

```http
  POST /pools
```
- Exemplo do JSON que precisa ser enviado no body:
```
{
"name": "pool teste",
"address": "rua pool",
"zip": "1203o",
"city": "ksadk",
"state": "asd",
"animalDanger": true,
"lockerCode": "123123",
"poolType": "CHLORINE",
"enterSide": "north",
"photos": ["asd", "dsa"],
"userOwnerId": "64d818ace642ee1942976b80",
"clientOwnerId": "64d818cbe642ee1942976b81"
 }
```






