import express from "express";
import jsonServer from "json-server";
import auth from "json-server-auth";

const server = express();
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

const router = jsonServer.router("./data/db.json");
server.use("/api", router);
server.db = router.db;

const middlewares = jsonServer.defaults();
const rules = auth.rewriter({
  products: 444,
  featured_products: 444,
  orders: 660,
  users: 600,
});

server.use(rules);
server.use(auth);
server.use(middlewares);
server.use(router);

server.listen(8000);

// import express from "express";
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

// const jsonServer = require("json-server");
// const auth = require("json-server-auth");

// const server = express();

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   next();
// });

// const router = jsonServer.router("./data/db.json");

// const middlewares = jsonServer.defaults();
// const rules = auth.rewriter({
//   products: 444,
//   featured_products: 444,
//   orders: 660,
//   users: 600,
// });

// server.db = router.db;

// server.use("/api", rules);
// server.use("/api", auth);
// server.use("/api", middlewares);
// server.use("/api", router);

// server.listen(8000, () => {
//   console.log("Server is running on http://localhost:8000");
// });
