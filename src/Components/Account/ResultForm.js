import React from "react";
import { Container, Table } from "reactstrap";
import ResultFormItem from "./ResultFormItem";

function ResultForm(props) {
  let { listAccount, onHandleDeleteAccount, onHandleEditButton } = props;
  // callBack
  // onHandleEditButton();

  return (
    <Container>
      <br />
      <h3>Danh sách Account</h3>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Fullname</th>
            <th>Department</th>
            <th>Position</th>
            <th>Create Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormItem
            listAccount={listAccount}
            onHandleDeleteAccount={onHandleDeleteAccount}
            onHandleEditButton={onHandleEditButton}
          />
        </tbody>
      </Table>
    </Container>
  );
}

export default ResultForm;
