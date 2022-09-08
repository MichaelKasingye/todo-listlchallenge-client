/* eslint-disable no-unused-vars */
import { request } from "../utilities/axios-utils";
import { useQuery, useMutation, useQueryClient } from "react-query";

function getAllTodo(endpoint) {
  const urlEndPoint = endpoint.queryKey[1];
  return request({ url: `${urlEndPoint}` });
}

const addTodoContacts = (infoData) => {
  return request({ url: "/contacts", method: "post", data: infoData });
};
const addTodoCourse = (infoData) => {
  return request({ url: "/courses", method: "post", data: infoData });
};
const addTodoTrainingSchool = (infoData) => {
  return request({ url: "/trainingSchools", method: "post", data: infoData });
};
const editTodoTrainingSchool = (infoData) => {
  return request({ url: "/trainingSchools", method: "post", data: infoData });
};
const entryId = ({ queryKey }) => {
  const id = queryKey[1];
  return request({ url: `/trainingSchools/${id}` });
};

export const useTodoData = (onSuccess, onError, endpoint) => {
  return useQuery(["todo", endpoint], getAllTodo, {
    onSuccess,
    onError,
  });
};

export const useAddEntryContacts = () => {
  return useMutation(addTodoContacts);
};
export const useAddEntryCourse = () => {
  return useMutation(addTodoCourse);
};
export const useAddTrainingSchool = () => {
  return useMutation(addTodoTrainingSchool);
};

export const useEntryId = (id) => {
  const queryClient = useQueryClient();
  return useQuery(["trainingSchools", id], entryId);
};

export const entryIdDelete = (id) => {
  return request({ url: `/trainingSchools/${id}`, method: "delete" });
};
