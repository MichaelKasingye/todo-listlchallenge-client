import { createSlice } from "@reduxjs/toolkit";
import UpdateStatusData from "../../../services/fetchData";
import  {
  deleteData,
  getData,
  postData,
} from "../../../services/fetchData";

const initialState = {
  Todo: "",
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
      getData().then((Todo) => dispatch(fetchTodoSuccess(Todo)));
    } catch (error) {
      dispatch(fetchTodoFailure(error));
    }
  };
};

export const postTodoAsync = async (data) => {
  try {
    await postData(data);
  } catch (error) {
    fetchTodoFailure(error);
  }
};

export const deleteTodoAsync = async (id) => {
  try {
    await deleteData(id);
  } catch (error) {
    fetchTodoFailure(error);
  }
};

export const updateStatusTodoAsync = async (id, data) => {
  try {
    await UpdateStatusData(id, data);
  } catch (error) {
    fetchTodoFailure(error);
  }
};
