import {
  listCustomers,
  getCustomerById,
} from "../services/customer-service.js";

export async function getCustomers(req, res) {
  const data = await listCustomers();

  if (!data) {
    res.status(404).send("No customers found");
    return;
  }

  res.status(200);
  res.json(data);
}

export async function getCustomer(req, res) {
  const data = await getCustomerById(req.params.id);

  if (!data) {
    res.status(404).send("Customer not found");
    return;
  }

  res.status(200);
  res.json(data);
}
