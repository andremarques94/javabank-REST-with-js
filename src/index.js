import express, { json } from "express";
import customerRouter from "./routes/customer.js";
import cors from "cors";
import "./db/db.js";

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.use(cors());
app.use(json());

app.use("/api", customerRouter);
app.use("/", (_, res) => {
  res.redirect("api/customer");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
