import "./config/db.config.js";
import express, { json } from "express";
import customerRouter from "./customer/customer.router.js";
import accountRouter from "./account/account.router.js";
import cors from "cors";

const PORT = process.env.SERVER_PORT || 3000;
const app = express();

app.use(cors()); //Middleware necessary for cross-origin requests
app.use(json()); //Middleware necessary for reading request body

app.use("/api", customerRouter);
app.use("/api", accountRouter);

// Redirect to /api/customer
// If the user accesses the root of the application, it will be redirected to /api/customer
app.use("/", (_, res) => {
  res.redirect("api/customer");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
