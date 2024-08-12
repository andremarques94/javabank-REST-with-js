import "./config/db.config.js";
import express, { json } from "express";
import customerRouter from "./customer/customer.router.js";
import accountRouter from "./account/account.router.js";
import cors from "cors";

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.use(cors());
app.use(json());

app.use("/api", customerRouter);
app.use("/api", accountRouter);

app.use("/", (_, res) => {
  res.redirect("api/customer");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
