import * as customerService from "../services/customer-service.js";

export async function getCustomers(req, res) {
  const data = await customerService.listCustomers();

  if (!data) {
    res.status(404).send("No customers found");
    return;
  }

  res.status(200);
  res.json(data);
}

export async function getCustomer(req, res) {
  const data = await customerService.getCustomerById(req.params.id);

  if (!data) {
    res.status(404).send("Customer not found");
    return;
  }

  res.status(200);
  res.json(data);
}

export async function addCustomer(req, res) {
  const customer = req.body;
  const data = await customerService.addCustomer(customer);
  res.status(201);
  res.send(data);
}

export async function updateCustomer(req, res) {
  const customer = req.body;
  const data = await customerService.updateCustomer(customer);
  res.status(200);
  res.send(data);
}

export async function deleteCustomer(req, res) {
  const deleted = customerService.deleteCustomer(req.params.id);
  res.status(200);
  res.send(deleted);
}
