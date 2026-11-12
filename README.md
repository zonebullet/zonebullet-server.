# Servidor do Zone Bullet (PeerJS)

1. Suba esta pasta `server/` num repositório (GitHub).
2. Render.com → New → Web Service → escolha o repo → Build: `npm install` · Start: `npm start`.
   (Railway e Fly.io funcionam igual.)
3. Copie a URL gerada, ex.: `zonebullet-abc.onrender.com`.
4. No `zonebullet-v43.html`, em `NETCFG.server`, coloque `host:'zonebullet-abc.onrender.com'`.
   Para testar sem editar o arquivo: abra o jogo com `?srv=zonebullet-abc.onrender.com`.
5. Todos os jogadores precisam usar o MESMO servidor.

Plano grátis do Render dorme após ~15 min sem uso: crie um monitor no UptimeRobot
chamando `https://SEU-APP.onrender.com/` a cada 5 min para ficar sempre ativo.
