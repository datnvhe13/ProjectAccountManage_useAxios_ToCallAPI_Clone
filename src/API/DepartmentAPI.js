import { api } from "./api"

let getListDepartmentAPI = () => {
    return api("GET", "departments/", null);
};

export {getListDepartmentAPI};
