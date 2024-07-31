import express from "express";
import http from "http";
import customerRouter from "./routes/customer.js";
import db from "./db/db.js";

const app = express();
const server = http.createServer(app);

app.use("/api", customerRouter);

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
