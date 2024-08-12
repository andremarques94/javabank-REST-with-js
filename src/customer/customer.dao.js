import Customer from "./customer.js";

export async function findAll() {
  return Customer.query().select(
    "id",
    "firstName",
    "lastName",
    "email",
    "phone",
  );
}

export async function findById(id) {
  return Customer.query()
    .findById(id)
    .select("id", "firstName", "lastName", "email", "phone")
    .withGraphFetched("accounts(defaultSelects)");
}

export function saveOrUpdate(customer) {
  return customer.id
    ? Customer.query().patchAndFetchById(customer.id, customer)
    : Customer.query().insert(customer);
}

export function remove(id) {
  return Customer.query().deleteById(id);
}
