import Account from "./account.js";

export async function listAccounts() {
  return await Account.query().select(
    "id",
    "account_type",
    "balance",
    "customer_id",
  );
}

export async function getAccount(id) {
  return await Account.query().findById(id);
}

export async function createAccount(account) {
  return await Account.query().insert(account);
}

export async function updateAccount(id, updatedAccount) {
  return await Account.query().findById(id).patch(updatedAccount);
}

export async function deleteAccount(id) {
  return await Account.query().deleteById(id);
}
