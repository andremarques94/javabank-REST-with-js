import { getAccountsList, getAccountById } from "./account.service.js";

export async function getAccounts(req, res) {
  try {
    const accounts = await getAccountsList();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getAccount(req, res) {
  try {
    const account = await getAccountById(req.params.id);
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
