import { Router } from "express";
import {
  getCustomers,
  getCustomer,
} from "../controllers/customer-controller.js";

const router = Router();
router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomer);
export default router;
