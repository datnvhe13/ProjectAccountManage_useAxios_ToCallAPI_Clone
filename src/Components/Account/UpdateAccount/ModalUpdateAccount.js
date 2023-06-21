import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import InputUpdateForm from "./InputUpdateForm";

function ModalUpdateAccount(props) {
  // callBack props transfer from AccountContainer
  let {
    showUpdateForm,
    onHandleCloseUpdateButton,
    listDepartment,
    listPosition,
    accountUpdate,
    onHandleUpdateAccount
  } = props;


  // function close modal
  let handleCloseModal = () => {
    onHandleCloseUpdateButton();
  };

  return (
    <Container>
      <Modal isOpen={showUpdateForm}>
        <ModalHeader>Update Account</ModalHeader>
        <ModalBody>
          {/* Input Form */}
          <InputUpdateForm
            listDepartment={listDepartment}
            listPosition={listPosition}
            accountUpdate={accountUpdate}
            onHandleUpdateAccount={onHandleUpdateAccount}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              handleCloseModal();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalUpdateAccount;
