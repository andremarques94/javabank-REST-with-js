import * as customerService from "./customer.service.js";

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
  if (!req.body) {
    res.status(400).send("Customer data is required");
    return;
  }

  const data = await customerService.addCustomer(req.body);

  if (!data) {
    res.status(500).send("Error adding customer");
    return;
  }

  res.status(201);
  res.send(data);
}

export async function updateCustomer(req, res) {
  if (!req.body) {
    res.status(400).send("Customer data is required");
    return;
  }

  const data = await customerService.updateCustomer(req.body);

  if (!data) {
    res.status(500).send("Error updating customer");
    return;
  }

  res.status(200);
  res.send(data);
}

export async function deleteCustomer(req, res) {
  if (!req.params.id) res.status(400).send("Customer ID is required");

  const deleted = customerService.deleteCustomer(req.params.id);

  if (!deleted) {
    res.status(500).send("Error deleting customer");
    return;
  }

  res.status(200);
  res.send(deleted);
}
