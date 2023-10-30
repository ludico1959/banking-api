<p align="center">
  <a href="" target="blank"><img src="[https://yt3.ggpht.com/ytc/AKedOLS6jhin7CrQpWfsbRRwFVS1rvOJqPUwHYGCSypL=s900-c-k-c0x00ffffff-no-rj](https://raw.githubusercontent.com/ludico1959/banking-api/develop/diagrams.png)" height="200" alt="Diagramas conceitual e logico" /></a>
</p>

# BANKING API

Uma API que simula um simples sistema bancário, com contas e transações de crédito e débito.

## 💻 Passo a passo para testar API em máquina local

Para rodar o projeto localmente, siga os passos abaixo. 

### 1️⃣ Iniciando...

Para começar, clone o repositório da API na sua máquina local.
```
  git clone git@github.com:ludico1959/banking-api.git
```

### 2️⃣ Requisitos

Antes de instalar as depeências do projeto, é importante ter na máquina tanto o Node.js quanto o Docker (juntamente com o Docker Compose)

* **Node.Js**: download [aqui](https://nodejs.org/en/download).
* **Docker e Docker Compose**: download [aqui](https://docs.docker.com/get-docker/).*

*Especificamente, a versão utilizada do Node.js foi a v20.5.0. 


### 3️⃣ Ajustando as variáveis de ambiente

Crie na raiz do projeto uma pasta **.env** e copie o conteúdo da **.env.example** para ela. É neste arquivo que serão definidos os valores das variáveis do sistema de gerenciamento do banco de dados PostgreSQL. Não há necessidade de instalá-lo na máquina, pois tal banco de dados será executado dentro de um container do Docker.


### 4️⃣ Instalando as dependências NPM

Abra o terminal de comando na raiz do projeto e execute o comando:

```
npm install
```

Ele irá baixar e instalar as dependências listadas no arquivo **package.json** na pasta **node_modules**.

##### Dependências: 
    - @prisma/client: 5.5.2
    - bcrypt: 5.1.1
    - express: 4.18.2
    - express-async-errors: 3.1.1
    - prisma": 5.5.2
    - reflect-metadata: 0.1.13
    - tsyringe": 4.8.0

##### Dependências de desenvolvimento: 
    - @rocketseat/eslint-config": 2.1.0
    - @types/bcrypt: 5.0.1
    - @types/express: 4.17.20
    - eslint": 8.52.0
    - ts-node-dev: 2.0.0
    - typescript: 5.2.2


### 5️⃣ "Subindo" o banco de dados em uma container do Docker 

Well, now on the same cmd.exe screen (or another command-line interpreter), just start the server for the project to run locally typing:

```
docker-compose up -d
```

### 6️⃣ Gerando as tabelas do banco de dados através das migratons

Execute o comando:

```
npx prisma migrate dev
```
Ele irá criar as tabelas dentro do banco de dados no container do Docker.

### 7️⃣ Rodoando a API

Para inicar a API em ambiente de desenvolvimento, execute o comando:
```
npm run start:dev
```
A API deve estar rodando corretamente.

### 8️⃣ Realizando requisições

Na raiz do projeto, dentro da pasta **docs** haverá um arquivo JSON.
Tal arquivo contém as rodas geradas pelo [Postman](https://www.postman.com/downloads/). Carregando ele no programa Postman, é possível fazer todas requisições para a API.
Caso for testar, por favor, atente-se a alguns **query params** presentes nas rotas de transações de crédito e de débito.

**Nota:** Assim que possível, pretendo implementar uma documentação utilizando o Swagger para facilitar a realização destas requisições.
