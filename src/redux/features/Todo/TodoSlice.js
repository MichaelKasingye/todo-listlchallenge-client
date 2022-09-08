import {createSlice} from "@reduxjs/toolkit";
import UpdateData, { getData } from "../../../services/fetchData";

const initialState = {
    Todo: '',
    loading: false,
    hasErrors: false,
};

export const TodoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
      fetchTodo: (state) => {
        state.loading = true;
      },
      fetchTodoSuccess: (state, { payload }) => {
        state.Todo = payload;
        state.loading = false;
        state.hasErrors = false;
      },
      fetchTodoFailure: (state) => {
        state.loading = false;
        state.hasErrors = true;
      },
      filterTodo: (state, { payload }) => {
        state.Todo = payload;
      },
    },
  });

  export const { fetchTodo, fetchTodoSuccess, fetchTodoFailure } =
  TodoSlice.actions;

// a selector
export const TodoSelector = (state) => state?.Todo;
// the reducer
export default TodoSlice.reducer;

// Asynchronous thunk action
export const fetchTodoAsync = () => {
    return async (dispatch) => {
      dispatch(fetchTodo());
      try {
        getData().then((Todo) =>  dispatch(fetchTodoSuccess(Todo)));
      } catch (error) {
        dispatch(fetchTodoFailure(error));
      }
    };
  };
  
  export const updateTodoAsync = (id, data) => {
    return async (dispatch) => {
        UpdateData(id, "interested_Todos", data)
        .then(() => {
            // getSpecificData("interested_Todos", id).then((Todo) => dispatch(fetchTodoSuccess(Todo)));
            getData("interested_Todos").then((Todo) =>  dispatch(fetchTodoSuccess(Todo)));
        })
        .catch((error) => {
          dispatch(fetchTodoFailure(error));
        });
    };
  };