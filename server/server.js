const data = require("./db_transactions.json");
const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port);