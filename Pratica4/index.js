const restify = require("restify");
const connection = require("../database/connection");

const server = restify.createServer({ name: "Prática 4" });

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.use((req, res, next) => {
  res.setHeader("content-type", "application/json");
  res.charSet("UTF-8");
  return next();
});

async function inserir(req, res) {
  const aluno = {
    nome: req.body.nome,
    curso: req.body.curso,
    nascimento: req.body.nascimento,
  };

  // Inserindo os dodos
  await connection("aluno")
    .insert(aluno)
    .then((_) => {
      res.json({ message: "Criado com sucesso" });
    })
    .catch((_) => {
      res.status(400); // Mudando o status da resposta
      res.json({ message: "Falha ao criar" });
      console.log(_);
    });
}

async function listar(req, res) {
  await connection.select()
    .table("aluno")
    .then((resp) => {
      res.status(200); // Mudando o status da resposta
      res.json(resp); // Retornando o ID como resposta
    })
    .catch((_) => {
      res.json({ message: "Falha ao listar" });
      console.log(_);
    });
}

async function atualizar(req, res, next) {
  let aluno = {
    nome: req.body.nome,
    curso: req.body.curso,
    nascimento: req.body.nascimento,
  };

  await connection("aluno")
    .where("id", req.body.id)
    .update(aluno)
    .then((_) => res.json({ message: "Atualizado com sucesso" }))
    .catch((_) => {
      res.status(400); // Mudando o status da resposta
      res.json({ message: "Falha ao atualizar" });
    });
}

async function excluir(req, res, next) {
  await connection("aluno")
    .where("id", req.body.id) // Comparando o ID escolhido com o do banco
    .delete() // Deletando o curso no banco
    .then((_) => res.json({ message: "Removido com sucesso" }))
    .catch((_) => {
      res.status(400); // Mudando o status da resposta
      res.json({ message: "Falha ao atualizar" });
    });
}


const prefix = "/aluno";

server.post(prefix + "/inserir", inserir);
server.get(prefix + "/listar", listar);
server.post(prefix + "/atualizar", atualizar);
server.del(prefix + "/excluir", excluir);

const port = process.env.PORT || 5000;

server.listen(port, function () {
  console.log("%s rodando", server.name);
});
