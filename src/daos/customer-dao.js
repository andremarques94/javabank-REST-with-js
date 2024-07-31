import Customer from "../models/customer.js";

export async function list() {
  return Customer.query().select();
}

export async function get(id) {
  return Customer.query().findById(id).withGraphFetched("accounts");
}

export function create() {
  return "Hello World! dao test";
}

export function update() {
  return "Hello World! dao test";
}

export function remove(id) {
  return "Hello World! dao test";
}
