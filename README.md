# C216 - Sistemas Distribuidos

Exercícios realizados para colocar em prática os conhecimentos adquiridos na disciplina de **C216** (Sistemas Distribuidos) durante a graduação em Engenharia de Computação pelo **[Inatel](https://inatel.br/home/)**.

### Atividades
 - **[Prática 1](https://github.com/Brendhon/C216-Sistemas_Distribuidos/tree/main/Pratica1)**: Iniciar um servidor básico utilizando o framework [Restify](http://restify.com/);
 - **[Prática 2](https://github.com/Brendhon/C216-Sistemas_Distribuidos/tree/main/Pratica2)**: Diferentes formas de passar parametros para requisições (Path, Query e Body);
 - **[Prática 3](https://github.com/Brendhon/C216-Sistemas_Distribuidos/tree/main/Pratica3)**: Mock de uma aplicação CRUD;
 - **[Prática 4](https://github.com/Brendhon/C216-Sistemas_Distribuidos/tree/main/Pratica4)**: Implementando comunicação com um banco e realizando operações.

### Tecnologias utilizadas
- **[Restify](http://restify.com/)**;
- **[Nodemon](https://www.npmjs.com/package/nodemon)**;
- **[Docker](https://www.docker.com/)**;
- **[PostgresSQL](https://www.postgresql.org/)**;
- **[Knex](https://knexjs.org/)**;

### Observações
Para as atividades que necessitam de comunicação com um banco foi criado um shell script que ao ser executado ja instância no docker uma imagem do banco Postgres e cria as tabelas sem a necessidade de qualquer configuração.

Para executar o script:
 ```bash
  npm run create:db # Cria uma instancia no docker do banco
 ```

É necessario também executar as migrations para que as colunas das tabelas sejam criadas:
 ```bash
  npm run migrate:exec # Executa as migrations
 ```
 
Foram criados outros scripts e comandos com relação ao banco, deem uma olhada no arquivo **[package.json](https://github.com/Brendhon/C216-Sistemas_Distribuidos/blob/main/package.json)** para saber mais.
