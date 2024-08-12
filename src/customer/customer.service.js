import { transaction } from "objection";
import { findAll, findById, saveOrUpdate, remove } from "./customer.dao.js";
import Customer from "./customer.js";

export async function listCustomers() {
  return findAll();
}

export async function getCustomerById(id) {
  return findById(id);
}

export async function getBalance(id) {
  const customer = await findById(id);

  if (!customer) {
    throw new Error("Customer not found");
  }

  return customer.accounts.reduce((acc, account) => acc + account.balance, 0);
}

export async function addCustomer(customer) {
  return transaction(Customer.knex(), async (trx) => {
    try {
      return saveOrUpdate(customer).transacting(trx);
    } catch (error) {
      trx.rollback();
      throw error;
    }
  });
}

export async function updateCustomer(customer) {
  return transaction(Customer.knex(), async (trx) => {
    try {
      const customerToUpdate = await findById(customer.id);

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

      return saveOrUpdate(data).transacting(trx);
    } catch (error) {
      trx.rollback();
      throw error;
    }
  });
}

async function addAccount(id, account) {
  const customer = await findById(id);

  if (!customer) {
    throw new Error("Customer not found");
  }

  return transaction(Customer.knex(), async (trx) => {
    try {
      return customer.$relatedQuery("accounts", trx).insert(account);
    } catch (error) {
      trx.rollback();
      throw error;
    }
  });
}

async function closeAccount(id, accountId) {
  const customer = await findById(id);

  if (!customer) {
    throw new Error("Customer not found");
  }

  return transaction(Customer.knex(), async (trx) => {
    try {
      return customer.$relatedQuery("accounts", trx).deleteById(accountId);
    } catch (error) {
      trx.rollback();
      throw error;
    }
  });
}

async function getAccountIds(customer) {
  const customerVerification = await findById(customer.id);
  return customerVerification.accounts.map((account) => account.id);
}

export async function deleteCustomer(id) {
  return remove(id);
}
