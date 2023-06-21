import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import InputForm from "./InputForm";

function ModalCreateNewAccount(props) {
  // callBack props transfer from AccountContainer
  let { showForm, onHandleCloseButton, onHandleCreateNewAccount, listDepartment, listPosition } = props;
  // function close modal
  let handleCloseModal = () => {
    onHandleCloseButton();
  }

  return (
    <Container>
      <Modal isOpen={showForm}>
        <ModalHeader>Create New Account</ModalHeader>
        <ModalBody>
          {/* Input Form */}
          <InputForm onHandleCreateNewAccount={onHandleCreateNewAccount} listDepartment={listDepartment} listPosition={listPosition}/>
        </ModalBody>

        <ModalFooter>
          <Button color="danger" onClick={()=>{handleCloseModal()}}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewAccount;
