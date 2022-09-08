/* eslint-disable no-unused-vars */
import axios from "axios";
import app from "../config/firebase";

const BaseUrl = "http://localhost:4000/api/v1/todos/";
// const BaseUrl = "https://sprintug-challenge.herokuapp.com/api/v1/todos";

export async function getData() {
  try {
    const fetchInfo = await axios.get(BaseUrl);
    const resData = await fetchInfo.data;
    // console.log(resData);
    return resData;
  } catch (error) {
    return error;
  }
}

export async function deleteData(id) {
  try {
    const deleteInfo = await axios.delete(BaseUrl + id);
    const resData = await deleteInfo.data;
    return resData;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function postData(dataObject) {
  try {
    const postInfo = await axios.post(BaseUrl, dataObject);
    const resData = await postInfo.data;
    return resData;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default async function UpdateStatusData(id, data) {
  try {
    const postInfo = await axios.put(BaseUrl + id, data);
    const resData = await postInfo.data;
    return resData;
  } catch (error) {
    console.log(error);
    return error;
  }
}
