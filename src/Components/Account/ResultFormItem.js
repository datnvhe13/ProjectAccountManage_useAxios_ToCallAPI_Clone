import { Button } from "reactstrap";

function ResultFormItem(props) {
  // get props from Account container
  // , onHandleEditButton
  let { listAccount, onHandleDeleteAccount, onHandleEditButton } = props;
  // 
  let onHandleDelete = (id_Dele) => {
    onHandleDeleteAccount(id_Dele)
  }

  let onHandleUpdate = (account_update) => {
    // call Update Modal : setState = true
    onHandleEditButton(account_update);
  }
 
  let items = "";
  // Check :  If listAccount !="" will display data
  if (listAccount) {
    items = listAccount.map((account, index) => {
      return (
        <tr key={index}>
          <td>{account.id}</td>
          <td>{account.email}</td>
          <td>{account.username}</td>
          <td>{account.fullname}</td>
          <td>{account.department}</td>
          <td>{account.position}</td>
          <td>{account.createDate}</td>
          <td>
            <Button color="warning" onClick={()=>{onHandleUpdate(account)}}>Edit</Button>
          </td>
          <td>
            <Button color="warning" onClick={()=>{onHandleDelete(account.id)}}>Delete</Button>
          </td>
        </tr>
      );
    });
  }

  return items;
}

export default ResultFormItem;
