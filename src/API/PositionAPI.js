import { api } from "./api"

let getListPositionAPI = () => {
   return api("GET", "possitions/", null);
};

export {getListPositionAPI};
