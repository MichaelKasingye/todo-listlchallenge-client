/* eslint-disable no-unused-vars */

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

export async function getData(collectionName) {
  const data = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    // console.log({ ...doc.data(), id: doc.id });
    return data.push({ ...doc.data(), id: doc.id });
  });

  return data;
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
        if (!docRef) 
        return new Error('An error ocurred while updating an entry')
        await updateDoc(docRef, {...data});
        // console.log(docRef);
        return docRef
    } catch (error) {
        return error
    }
}
