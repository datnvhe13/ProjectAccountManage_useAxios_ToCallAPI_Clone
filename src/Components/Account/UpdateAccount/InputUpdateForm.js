import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

function InputUpdateForm(props) {
  // callBack props transfer from AccountContainer
  let { listDepartment, listPosition, accountUpdate, onHandleUpdateAccount } =
    props;
  // department
  let departmentItem = listDepartment.map((department, index) => {
    return <option value={department.id}>{department.name}</option>;
  });

  // find department_Index
  let departmentIndex = listDepartment.findIndex(
    (depart) => depart.name === accountUpdate.department
  );
  // find department_ID
  let department_ID = listDepartment[departmentIndex].id;

  // position
  let positionItem = listPosition.map((position, index) => {
    return <option value={position.id}>{position.name}</option>;
  });
  //find position index
  let positionIndex = listPosition.findIndex(
    (position) => position.name === accountUpdate.position
  );
  //find position Id
  let positionId = listPosition[positionIndex].id;

  // declare States to save data in Input TextField
  let [email, setEmail] = useState(accountUpdate.email);
  let [userName, setUserName] = useState(accountUpdate.username);
  let [fullName, setFullName] = useState(accountUpdate.fullname);
  let [Department, setDepartment] = useState(department_ID);
  let [Position, setPosition] = useState(positionId);

  //
  let handleUpdateButton = () => {
    let account_Update = {
      id: accountUpdate.id,
      fullname: fullName,
      departmentId: Department,
      positionId: Position,
    };

    onHandleUpdateAccount(account_Update);
  };

  let handleResetButton = () => {
    setEmail("");
    setUserName("");
    setFullName("");
  };

  return (
    <Container>
      <Form>
        {/* Email */}
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="Email"
            name="email"
            placeholder="Input Email"
            type="email"
            readOnly
            onClick={()=>alert("Read only ! Can't edit !")}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormGroup>
        {/* Username */}
        <FormGroup>
          <Label for="exampleUsername">Username</Label>
          <Input
            id="Username"
            name="Username"
            placeholder="Input Username"
            type="text"
            readOnly
            onClick={()=>alert("Read only ! Can't edit !")}
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </FormGroup>

        {/* FullName */}
        <FormGroup>
          <Label for="examplePassword">FullName</Label>
          <Input
            id="FullName"
            name="FullName"
            placeholder="Input FullName"
            type="text"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
        </FormGroup>

        {/* Department */}
        <FormGroup>
          <Label for="exampleSelect">Select a Department</Label>
          <Input
            id="DepartmentSelect"
            name="Department"
            type="select"
            value={Department}
            onChange={(event) => {
              setDepartment(event.target.value);
            }}
          >
            {departmentItem}
          </Input>
        </FormGroup>

        {/* Position */}
        <FormGroup>
          <Label for="exampleSelect">Select a Position</Label>
          <Input
            id="PositionSelect"
            name="Position"
            type="select"
            value={Position}
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          >
            {positionItem}
            {/* <option value={"Test"}>Test</option> */}
          </Input>
        </FormGroup>

        {/* Button */}
        <Button
          color="primary"
          onClick={() => {
            handleUpdateButton();
          }}
        >
          Update
        </Button>
        <Button
          color="danger"
          onClick={() => {
            handleResetButton();
          }}
        >
          Reset
        </Button>
      </Form>
    </Container>
  );
}

export default InputUpdateForm;
