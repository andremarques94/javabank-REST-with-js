import {
  listAccounts,
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount,
} from "./account.dao.js";

export async function getAccountsList() {
  return listAccounts();
}

export async function getAccountById(id) {
  return getAccount(id);
}

export async function deposit(id, customerId, amount) {
  const account = await getAccount(id);

  if (!account) {
    throw new Error("Account not found");
  }

  if (account.customer_id !== customerId) {
    throw new Error("Account does not belong to customer");
  }

  account.credit(amount);
  return updateAccount(account.id, account);
}

export async function withdraw(id, customerId, amount) {
  const account = await getAccount(id);

  if (!account) {
    throw new Error("Account not found");
  }

  if (account.customer_id !== customerId) {
    throw new Error("Account does not belong to customer");
  }

  account.debit(amount);
  return updateAccount(account.id, account);
}
