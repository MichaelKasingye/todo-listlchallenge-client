/* eslint-disable no-unused-vars */
import { request } from "../utilities/axios-utils";
import { useQuery, useMutation, useQueryClient } from "react-query";

function getAllTodo(endpoint) {
  const urlEndPoint = endpoint.queryKey[1];
  return request({ url: `${urlEndPoint}` });
}

const addTodo = (infoData) => {
  return request({ url: "/", method: "post", data: infoData });
};

const entryId = ({ queryKey }) => {
  const id = queryKey[1];
  return request({ url: `/${id}` });
};

export const useTodoData = (onSuccess, onError, endpoint) => {
  return useQuery(["todo", endpoint], getAllTodo, {
    onSuccess,
    onError,
  });
};

export const useAddTodo = () => {
  return useMutation(addTodo);
};

export const useTodoId = (id) => {
  const queryClient = useQueryClient();
  return useQuery(["/", id], entryId);
};

export const todoIdDelete = (id) => {
  return request({ url: `/${id}`, method: "delete" });
};

export const todoIdStatus = (id, infoData) => {
  return request({ url: `/${id}`, method: "put", data: infoData });
};

export const AddTodo = (infoData) => {
  return request({ url: `/`, method: "post", data: infoData });
};
