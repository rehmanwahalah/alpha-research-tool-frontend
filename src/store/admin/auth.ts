import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUsers
} from "./async.func";

const initialState = {
  users: null,
  usersLoading: false,
};

const slice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.fulfilled.toString()]: (state, { type, payload }) => {
      // console.log("=====>", payload.walletAddress);
      debugger
      state.users = payload.user;
      state.usersLoading = false
    },
    [getAllUsers.pending.toString()]: (state, { type, payload }) => {
      state.usersLoading = true;
    },
    [getAllUsers.rejected.toString()]: (state, { type, payload }) => {
      state.users = null;
      state.usersLoading = false
    },
  },
});

export const { reducer: adminReducer, actions: adminActions } = slice;
