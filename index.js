let restify = require('restify');

// Criando o servidor
const server = restify.createServer({ name: 'Prática 1' });

server.use(restify.plugins.bodyParser());

server.get('/hello', (req, res, next) => {
  // Setando os cabeçalhos
  res.setHeader('content-type', 'application/json');
  res.charSet('UTF-8')

  // Mudando o status da resposta
  res.status(200);

  // Enviando resposta
  res.send('Hello World');

  // Segundo para o proxima função
  return next();
});

server.listen(process.env.PORT || 5000, () => {
  console.log('%s is running', server.name);
});