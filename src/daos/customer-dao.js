import Customer from "../models/customer.js";

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
  return Customer.transaction(async (trx) => {
    const customerToUpdate = await Customer.query(trx).findById(id);

    if (!customerToUpdate) {
      throw new Error("Customer not found");
    }

    const data = {
      ...customerToUpdate,
      ...Object.keys(customer)
        .filter((key) => !(customer[key] === ""))
        .reduce((acc, key) => {
          acc[key] = customer[key];
          return acc;
        }, {}),
    };

    return Customer.query(trx).updateAndFetchById(id, data);
  });
}

export function remove(id) {
  return Customer.query().deleteById(id);
}
