import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as usersService from "../services/userServices"

const userInitialState = {
  loading: false,
  data: {},
  error: "",
  passChange: {},
}

export const sendRegisterRequest = createAsyncThunk(
  "REGISTER",
  usersService.userRegisterService
)

export const sendLoginRequest = createAsyncThunk(
  "LOGIN",
  usersService.userLoginService
)

export const sendLogoutRequest = createAsyncThunk(
  "LOGOUT",
  usersService.userLogoutService
)

export const getUserRequest = createAsyncThunk(
  "GET_USER",
  usersService.getUserService
)

export const deleteUserRequest = createAsyncThunk(
  "DELETE_USER",
  usersService.deleteUserService
)

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  extraReducers: {
    [sendRegisterRequest.pending]: (state, action) => {
      state.loading = true
    },
    [sendRegisterRequest.fulfilled]: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = ""
    },
    [sendRegisterRequest.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [sendLoginRequest.pending]: (state, action) => {
      state.loading = true
    },
    [sendLoginRequest.fulfilled]: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = ""
    },
    [sendLoginRequest.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [sendLogoutRequest.pending]: (state, action) => {
      state.loading = true
    },
    [sendLogoutRequest.fulfilled]: (state, action) => {
      state.data = {}
      state.loading = false
      state.error = ""
    },
    [sendLogoutRequest.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [getUserRequest.pending]: (state, action) => {
      state.loading = true
    },
    [getUserRequest.fulfilled]: (state, action) => {
      state.passChange = action.payload
      state.loading = false
      state.error = ""
    },
    [getUserRequest.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
    [deleteUserRequest.pending]: (state, action) => {
      state.loading = true
    },
    [deleteUserRequest.fulfilled]: (state, action) => {
      state.data = {}
      state.loading = false
      state.error = ""
      state.passChange = {}
    },
    [deleteUserRequest.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})

export default userSlice.reducer
