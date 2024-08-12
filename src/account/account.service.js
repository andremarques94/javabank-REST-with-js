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
