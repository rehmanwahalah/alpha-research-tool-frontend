import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logout,
  verifyUserByToken,
} from "./async.func";

const initialState = {
  user: null,
  accessToken: null,
  userLoading: false,
};

const slice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled.toString()]: (state, { type, payload }) => {
      // console.log("=====>", payload.walletAddress);

      state.user = payload.user;
      state.accessToken = payload.access_token;
      state.userLoading = false
    },
    [loginUser.pending.toString()]: (state, { type, payload }) => {
      state.userLoading = true;
    },
    [loginUser.rejected.toString()]: (state, { type, payload }) => {
      state.user = null;
      state.accessToken = null;
      state.userLoading = false
    },
    [verifyUserByToken.fulfilled.toString()]: (state, { type, payload }) => {
      // console.log("=====> PAYLOAD", payload);

      state.user = payload.user;
      state.accessToken = payload.access_token;
      state.userLoading = false
    },
    [verifyUserByToken.pending.toString()]: (state, { type, payload }) => {
      state.userLoading = true;
    },
    [verifyUserByToken.rejected.toString()]: (state, { type, payload }) => {
      state.user = null;
      state.accessToken = null;
      state.userLoading = false
    },
    [logout.fulfilled.toString()]: (state, { type, payload }) => {
      console.log("called disconnect");
      state.user = null;
      state.accessToken = null;
      // state.metaMaskId = null;
    },
    [logout.rejected.toString()]: (state, { type, payload }) => {
      console.log("called disconnect");
      state.user = null;
      state.accessToken = null;
      // state.metaMaskId = null;
    },
  },
});

export const { reducer: authReducer, actions: authActions } = slice;
