import { list, get, create, remove, update } from "../daos/customer-dao.js";
import { transaction } from "objection";
import Customer from "../models/customer.js";

export async function listCustomers() {
  return list();
}

export async function getCustomerById(id) {
  return get(id);
}

export async function addCustomer(customer) {
  return transaction(Customer.knex(), async (trx) => {
    try {
      return create(customer).transacting(trx);
    } catch (error) {
      trx.rollback();
      throw error;
    }
  });
}

export async function updateCustomer(customer) {
  return transaction(Customer.knex(), async (trx) => {
    try {
      const customerToUpdate = await get(customer.id);

      if (!customerToUpdate) {
        throw new Error("Customer not found");
      }

      const data = {
        ...customerToUpdate,
        ...Object.keys(customer).reduce((acc, key) => {
          if (customer[key] && customer[key] !== "") {
            acc[key] = customer[key];
          }

          return acc;
        }, {}),
      };

      return update(data).transacting(trx);
    } catch (error) {
      trx.rollback();
      throw error;
    }
  });
}

export async function deleteCustomer(id) {
  return remove(id);
}
