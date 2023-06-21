export function generateID() {
  // declare initial ID
  let initial_Id = 0;
  // condition : listAccount existed : yes | no
  if (localStorage && localStorage.getItem("listAccount")) {
    // get listAccount from localStorage
    let listAccount = JSON.parse(localStorage.getItem("listAccount"));
    // loop
    listAccount.forEach((account) => {
      if (account.id > initial_Id) {
        initial_Id = account.id;
      }
    });
  }
  let id = initial_Id + 1;
  //
  return id;
}
