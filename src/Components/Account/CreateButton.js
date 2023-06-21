import React from "react";
import { Button, Container } from "reactstrap";

function CreateButton(props) {
  // callBack props transfer from AccountContainer
  let {onHandleCreateButton} = props;

  // function handle when click on "Create New Button"
  let handleCreateNewAccount = () => {
    onHandleCreateButton();
  };

  return (
    <Container>
      <Button color="primary" onClick={handleCreateNewAccount}>
        Create New Account
      </Button>
      
    </Container>
  );
}

export default CreateButton;
