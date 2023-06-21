import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

function InputForm(props) {
  // callBack props transfer from AccountContainer
  let { onHandleCreateNewAccount, listDepartment, listPosition } = props;
  // declare States to save data in Input TextField
  let [email, setEmail] = useState("");
  let [userName, setUserName] = useState("");
  let [fullName, setFullName] = useState("");
  let [Department, setDepartment] = useState(10);
  let [Position, setPosition] = useState(1);

  //
  let handleCreateButton = () => {
    let accountNew = {
      email: email,
      username: userName,
      fullname: fullName,
      departmentId: Department,
      positionId: Position,
    };
    onHandleCreateNewAccount(accountNew);

  };

  let handleResetButton = () => {
    setEmail("");
    setUserName("");
    setFullName("");
  };

  // department option
  let departmentItem = listDepartment.map((department, index) => {
    return <option value={department.id}>{department.name}</option>;
  });

  // position option
  let positionItem = listPosition.map((position, index)=> {
    return <option value={position.id}>{position.name}</option>
  })



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
            {/* departmentItem; */}
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
          </Input>
        </FormGroup>

        {/* Button */}
        <Button color="primary" onClick={()=>{handleCreateButton()}}>
          Create
        </Button>
        <Button color="danger" onClick={handleResetButton}>
          Reset
        </Button>
      </Form>
    </Container>
  );
}

export default InputForm;
