import {createSlice} from "@reduxjs/toolkit";
import UpdateData, { getData } from "../../../services/fetchData";

const initialState = {
    ClientInterest: '',
    loading: false,
    hasErrors: false,
};

export const ClientInterestSlice = createSlice({
    name: "ClientInterest",
    initialState,
    reducers: {
      fetchClientInterest: (state) => {
        state.loading = true;
      },
      fetchClientInterestSuccess: (state, { payload }) => {
        state.ClientInterest = payload;
        state.loading = false;
        state.hasErrors = false;
      },
      fetchClientInterestFailure: (state) => {
        state.loading = false;
        state.hasErrors = true;
      },
      filterClientInterest: (state, { payload }) => {
        state.ClientInterest = payload;
      },
    },
  });

  export const { fetchClientInterest, fetchClientInterestSuccess, fetchClientInterestFailure } =
  ClientInterestSlice.actions;

// a selector
export const ClientInterestSelector = (state) => state?.ClientInterest;
// the reducer
export default ClientInterestSlice.reducer;

// Asynchronous thunk action
export const fetchClientInterestAsync = () => {
    return async (dispatch) => {
      dispatch(fetchClientInterest());
      try {
        getData("interested_clients").then((ClientInterest) =>  dispatch(fetchClientInterestSuccess(ClientInterest)));
      } catch (error) {
        dispatch(fetchClientInterestFailure(error));
      }
    };
  };
  
  export const updateClientInterestAsync = (id, data) => {
    return async (dispatch) => {
        UpdateData(id, "interested_clients", data)
        .then(() => {
            // getSpecificData("interested_clients", id).then((ClientInterest) => dispatch(fetchClientInterestSuccess(ClientInterest)));
            getData("interested_clients").then((ClientInterest) =>  dispatch(fetchClientInterestSuccess(ClientInterest)));
        })
        .catch((error) => {
          dispatch(fetchClientInterestFailure(error));
        });
    };
  };