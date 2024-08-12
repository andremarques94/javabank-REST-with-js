import Customer from "./customer.js";

export async function list() {
  return Customer.query().select(
    "id",
    "firstName",
    "lastName",
    "email",
    "phone",
  );
}

export async function get(id) {
  return Customer.query()
    .findById(id)
    .select("id", "firstName", "lastName", "email", "phone")
    .withGraphFetched("accounts(defaultSelects)");
}

export function create(customer) {
  return Customer.query().insert(customer);
}

export function update({ id, ...customer }) {
  return Customer.query().patchAndFetchById(id, customer);
}

export function remove(id) {
  return Customer.query().deleteById(id);
}
