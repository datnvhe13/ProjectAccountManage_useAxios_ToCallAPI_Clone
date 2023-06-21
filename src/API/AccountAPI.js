import { api } from "./api";

// get listAccount API
let getListAccountAPI = () => {
  return api("GET", "accounts/", null);
};

// create new Account API
let addNewAccountAPI = (account_New) => {
  return api("POST", "accounts/", account_New);
};

// delete an account API
const deleteAccountAPI = (account_Id) => {
  let url = "accounts/" + account_Id;
  return api("DELETE", url, null);
};

// update an account
const updateAccountAPI = (account) => {
  let url = "accounts/" + account.id;
  return api("PUT", url, account);
};

export {
  getListAccountAPI,
  addNewAccountAPI,
  deleteAccountAPI,
  updateAccountAPI,
};
