import axios from "axios";

const requestURL = axios.create({
  // baseURL: "http://localhost:4000/api/v1/todos/",
  baseURL: "https://sprintug-challenge.herokuapp.com/api/v1/todos/",

});

export const request = ({ ...options }) => {

  const onSuccess = (response) => response;
  const onError = (error) => {
    // console.log("ERROR:..." + error);
    return error;
  };
  return requestURL(options).then(onSuccess).catch(onError);
};
