import { createAsyncThunk } from "@reduxjs/toolkit";
import Router  from "next/router";
import { toast } from "react-toastify";
import { en } from "../../locales/en";
import { adminService } from "../../services/admin.service";
// import { EUserRole } from "../../enums/userRole.enum";
// import { recieveToken } from "../../firebase";
import { authService } from "../../services/auth.service";
import { HttpService } from "../../services/base.service";
import { userService } from "../../services/user.service";

export const getAllUsers: any = createAsyncThunk(
  "admin/users",
  async (body: any, thunkAPI: any) => {
    console.log("calling", body);

    try {
      const response = await adminService.getUsers(body)
      console.log(response.data.data ,"response.data.data")
      debugger
      return response.data.data;
    } catch (error: any) {
      // toast.error(error.response?.data?.message);
      const err = error.response?.data?.message;
      return thunkAPI.rejectWithValue(err);
    }
  }
);