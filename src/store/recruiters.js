import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as recruiterService from "../services/recruiterServices";

const recruitersInitialState = {
  loading: false,
  data: {},
  singleRecruiter: {},
  error: "",
};

export const getAllRecruiters = createAsyncThunk(
  "GET_ALL_RECRUITERS",
  recruiterService.allRecruitersServices
);

export const addNewRecruiter = createAsyncThunk(
  "ADD_RECRUITER",
  recruiterService.addRecruiterServices
);

export const getSingleRecruiter = createAsyncThunk(
  "GET_RECRUITER",
  recruiterService.singleRecruiterServices
);

export const editRecruiter = createAsyncThunk(
  "EDIT_RECRUITER",
  recruiterService.editRecruiterServices
);

export const deleteRecruiter = createAsyncThunk(
  "DELETE_RECRUITER",
  recruiterService.deleteRecruiterServices
);

const recruiterSlice = createSlice({
  name: "recruiters",
  initialState: recruitersInitialState,
  extraReducers: {
    [getAllRecruiters.pending]: (state, action) => {
      // state.loading = true;
    },
    [getAllRecruiters.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getAllRecruiters.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getSingleRecruiter.pending]: (state, action) => {
      state.singleRecruiter = {}
      state.loading = true;
    },
    [getSingleRecruiter.fulfilled]: (state, action) => {
      state.singleRecruiter = action.payload;
      state.loading = false;
    },
    [getSingleRecruiter.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.singleRecruiter = {}
    },
    [editRecruiter.pending]: (state, action) => {
      state.loading = true;
    },
    [editRecruiter.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [editRecruiter.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [deleteRecruiter.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteRecruiter.fulfilled]: (state, action) => {
      state.data = state.data.filter(
        (recruiter) => recruiter.id !== action.payload
      );
      state.singleRecruiter = {};
      state.loading = false;
    },
    [deleteRecruiter.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [addNewRecruiter.pending]: (state, action) => {
      state.loading = true;
    },
    [addNewRecruiter.fulfilled]: (state, action) => {
      state.data = [...state.data, action.payload];
      state.singleRecruiter = action.payload;
      state.loading = false;
    },
    [addNewRecruiter.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default recruiterSlice.reducer;
