import { Router } from "express";
import { getAccounts, getAccount } from "./account.controller.js";

const router = Router();

router.get("/account", getAccounts);
router.get("/account/:id", getAccount);

export default router;
