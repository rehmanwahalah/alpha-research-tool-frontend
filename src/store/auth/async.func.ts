import { createAsyncThunk } from "@reduxjs/toolkit";
import Router  from "next/router";
import { toast } from "react-toastify";
import { en } from "../../locales/en";
// import { EUserRole } from "../../enums/userRole.enum";
// import { recieveToken } from "../../firebase";
import { authService } from "../../services/auth.service";
import { HttpService } from "../../services/base.service";
import { userService } from "../../services/user.service";

export const loginUser: any = createAsyncThunk(
  "auth/login",
  async (body: any, thunkAPI: any) => {
    // console.log("calling", body);

    try {
      const response = await authService.login(body.body);
      HttpService.setToken(response.data.data.access_token);
      // const currentToken = await recieveToken();
      // console.log("here is the token", currentToken);
      body.router.push("/project");
      // await authService.updateUser({ fcmToken: currentToken });
      return response.data.data;
    } catch (error: any) {
      // toast.error(error.response?.data?.message);
      const err = error.response?.data?.message;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const verifyUserByToken: any = createAsyncThunk(
  "auth/verifyToken",
  async (body: any, thunkAPI: any) => {
    // console.log("calling", body);

    try {
      const user = await userService.verifyUser()
      HttpService.setToken(user.data.data.access_token);
      console.log(user, 'USER RESP')
      toast.success(en.loggedIn)
      Router.push("/project");
      return user.data.data;
    } catch (error: any) {
      // toast.error(error.response?.data?.message);
      const err = error.response?.data?.message;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const logout: any = createAsyncThunk(
  "auth/logout",
  async (body: any, thunkAPI) => {
    try {
      Router.push("/");
      return true;
    } catch (error: any) {
      // toast.error(error.response.data.message);
      const err = error.response.data.message;
      return thunkAPI.rejectWithValue(err);
    }
  }
);