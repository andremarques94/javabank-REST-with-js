import { list, get } from "../daos/customer-dao.js";

export async function listCustomers() {
  return list();
}

export async function getCustomerById(id) {
  return get(id);
}
