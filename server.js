// Servidor de sinalização PeerJS (só apresenta os jogadores; o jogo em si trafega P2P).
const { PeerServer } = require('peer');
const PORT = process.env.PORT || 9000;

const server = PeerServer({
  port: PORT,
  path: '/',
  key: 'peerjs',
  proxied: true,            // atrás do proxy do Render/Railway/Fly
  allow_discovery: false,
  alive_timeout: 60000,
  concurrent_limit: 5000,
  corsOptions: { origin: true }
});

server.on('connection', c => console.log('+', c.getId()));
server.on('disconnect', c => console.log('-', c.getId()));
console.log('PeerServer ativo na porta ' + PORT + ' (GET / responde JSON = health check)');
