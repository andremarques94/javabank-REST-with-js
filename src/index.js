import express, { json } from "express";
import customerRouter from "./routes/customer.js";
import cors from "cors";
import "./db/db.js";

const app = express();

app.use(cors());
app.use(json());

app.use("/api", customerRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
