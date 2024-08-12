import { Router } from "express";
import {
  getCustomers,
  getCustomer,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "./customer.controller.js";

const router = Router();

router.get("/customer", getCustomers);
router.get("/customer/:id", getCustomer);
router.post("/customer", addCustomer);
router.put("/customer/:id", updateCustomer);
router.delete("/customer/:id", deleteCustomer);

export default router;
