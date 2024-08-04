import { list, get, create, remove, update } from "../daos/customer-dao.js";

export async function listCustomers() {
  return list();
}

export async function getCustomerById(id) {
  return get(id);
}

export async function addCustomer(customer) {
  return create(customer);
}

export async function updateCustomer(id, customer) {
  return update(id, customer);
}

export async function deleteCustomer(id) {
  return remove(id);
}
