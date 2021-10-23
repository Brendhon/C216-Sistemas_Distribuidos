const restify = require('restify');

// Criando o servidor
const server = restify.createServer({ name: 'Prática 2' });

const port = process.env.PORT || 5000;

// Utilizando plugins e criando middlewares
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());
server.use((req, res, next) => {
  res.setHeader('content-type', 'application/json');
  res.charSet('UTF-8')
  return next();
});

server.get('/query', (req, res, next) => {
  // Pegando os atributos enviados por parametros
  const name = req.query.name;
  const surname = req.query.surname;

  res.status(200); // Mudando o status da resposta
  res.send(`Hello ${name} ${surname}`); // Enviando resposta

  // Segundo para o proxima função
  return next();
});

server.get('/path/:name', (req, res, next) => {
  // Pegando os atributos enviados por parametros
  const name = req.params.name;

  res.status(200); // Mudando o status da resposta
  res.send(`Hello ${name}`); // Enviando resposta

  return next(); // Segundo para o proxima função
});

server.post('/body', (req, res, next) => {
  // Pegando os atributos enviados
  const name = req.body.name;
  const surname = req.body.surname;

  res.status(200); // Mudando o status da resposta
  res.send(`Hello ${name} ${surname}`); // Enviando resposta

  return next(); // Segundo para o proxima função
});

server.listen(port, () => {
  console.log(`${server.name} is running in http://localhost:${port}/`);
});