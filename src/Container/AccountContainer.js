import React, { useEffect, useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import { Container } from "reactstrap";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import ModalUpdateAccount from "../Components/Account/UpdateAccount/ModalUpdateAccount";
import {
  addNewAccountAPI,
  deleteAccountAPI,
  getListAccountAPI,
  updateAccountAPI,
} from "../API/AccountAPI";
import { getListDepartmentAPI } from "../API/DepartmentAPI";
import { getListPositionAPI } from "../API/PositionAPI";

function AccountContainer() {
  // Declare State to manage list Account, department, position
  let [listAccount, setListAccount] = useState([]);
  let [listDepartment, setListDepartment] = useState([]);
  let [listPosition, setListPosition] = useState([]);
  // declare State to manage Open/Close state of Modal Create New Modal
  let [showForm, setShowForm] = useState(false);
  let [showUpdateForm, setShowUpdateForm] = useState(false);
  // declare a State to manage an account need update
  let [accountUpdate, setAccountUpdate] = useState({});

  // Callback function when click on "Create New Button" on Modal
  let onHandleCreateButton = () => {
    // set State
    setShowForm(true);
  };

  let onHandleEditButton = (account_Update) => {
    // setState showModal = true
    setShowUpdateForm(true);
    // setState account update = account_Update
    setAccountUpdate(accountUpdate = account_Update);
  };

  // Callback function when click on "Close Button" on Modal
  let onHandleCloseButton = () => {
    // set State
    setShowForm(false);
  };

  let onHandleCloseUpdateButton = () => {
    setShowUpdateForm(false);
  };

  // callBack function when click "Create" button in Input Form
  let onHandleCreateNewAccount = (account_new) => {
    //
    addNewAccountAPI(account_new).then((response) => {
      // re-load
      fetchListAccount();
    });
    // alert
    alert("Add New account successfully !");
    // close modal
    setShowForm(false);
  };

  // callBack function when click "Delete" button in Input Form
  let onHandleDeleteAccount = (id_Delete) => {
    // call  fetchListAccount() from api.js
    deleteAccountAPI(id_Delete).then((response) => {
      fetchListAccount();
    });
    // alert
    alert("Delete successfully !");
  };

  // callBack function when click "Update" button in Input Form
  let onHandleUpdateAccount = (account_Update) => {
    // call updateAccountAPI() from api.js
    updateAccountAPI(account_Update).then(()=>{
      fetchListAccount();
    });
    // alert
    alert("Update successfully !");
    // close modal
    setShowUpdateForm(false);

  };

  // call API get listDepartment data from BE
  let fetchListDepartment = () => {
    // call getListDepartmentAPI function
    getListDepartmentAPI().then((response) => {
      setListDepartment(response);
    });
  };

  // call API get listPosition data from BE
  let fetchListPosition = () => {
    getListPositionAPI().then((response) => {
      setListPosition(response);
    });
  };

  // call API get listAccount data from BE
  let fetchListAccount = () => {
    //  call function
    getListAccountAPI().then((response) => {
      setListAccount(response);
    });
  };

  // declare useEffect
  useEffect(() => {
    fetchListAccount();
    fetchListDepartment();
    fetchListPosition();
  }, []);

  return (
    <Container>
      <CreateButton onHandleCreateButton={onHandleCreateButton} />
      <ResultForm
        listAccount={listAccount}
        onHandleDeleteAccount={onHandleDeleteAccount}
        onHandleEditButton={onHandleEditButton}
      />
      <ModalCreateNewAccount
        showForm={showForm}
        listDepartment={listDepartment}
        listPosition={listPosition}
        onHandleCloseButton={onHandleCloseButton}
        onHandleCreateNewAccount={onHandleCreateNewAccount}
      />
      <ModalUpdateAccount
        showUpdateForm={showUpdateForm}
        listDepartment={listDepartment}
        listPosition={listPosition}
        onHandleCloseUpdateButton={onHandleCloseUpdateButton}
        accountUpdate={accountUpdate}
        onHandleUpdateAccount={onHandleUpdateAccount}
      />
    </Container>
  );
}

export default AccountContainer;
