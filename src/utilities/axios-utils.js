import axios from "axios";
// import { JWT } from "./jwt";

const requestURL = axios.create({
  baseURL: "http://localhost:4000/api/v1/todos/",
//   baseURL: "https://sprintug-challenge.herokuapp.com/api/v1/todos/",

});

export const request = ({ ...options }) => {
//   requestURL.defaults.headers.common.Authorization = localStorage.getItem("JWT");;

  const onSuccess = (response) => response;
  const onError = (error) => {
    // console.log("ERROR:..." + error);
    return error;
  };
  return requestURL(options).then(onSuccess).catch(onError);
};
