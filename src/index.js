import express from "express";
import http from "http";
import customerRouter from "./routes/customer.js";
import cors from "cors";
import db from "./db/db.js";

const app = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);

app.use("/api", customerRouter);

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
