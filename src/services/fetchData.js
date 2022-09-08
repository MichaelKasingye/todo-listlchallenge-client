/* eslint-disable no-unused-vars */
import axios from "axios";
import app from "../config/firebase";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  //   setDoc,
} from "firebase/firestore";

const db = getFirestore();
const BaseUrl = "http://localhost:4000/api/v1/todos";
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

export async function getSpecificData(collectionName, id) {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  const data = { ...docSnap.data(), id: docSnap.id };
  return data;
}

export async function postData(collectionName, dataObject) {
  const docRef = await addDoc(collection(db, collectionName), dataObject);
}

export default async function UpdateData(id, collectionName, data) {
  try {
    const docRef = await doc(db, collectionName, `${id}`);
    if (!docRef) return new Error("An error ocurred while updating an entry");
    await updateDoc(docRef, { ...data });
    // console.log(docRef);
    return docRef;
  } catch (error) {
    return error;
  }
}
