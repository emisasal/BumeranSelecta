import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as reportsService from "../services/reportsServices";

const reportsInitialState = {
  loading: false,
  data: [],
  error: "",
  passChange: {},
};

export const getRecruitersPerArea = createAsyncThunk(
  "GET_RECRUITERS_PER_AREA",
  reportsService.getRecruitersPerArea
);

export const topRecruiters = createAsyncThunk(
  "TOP_RECRUITERS",
  reportsService.topRecruiters
);

export const getSearchBar = createAsyncThunk(
  "SEARCH_FOR_AREA/STATE",
  reportsService.getSearchBarService
);

export const getSearchPolar = createAsyncThunk(
  "SEARCH_GLOBAL",
  reportsService.getCountGlobalService
);

export const getRecruiterPolar = createAsyncThunk(
  "RECRUITER_ASSIG_GRAPHIC",
  reportsService.getCountAssigService
);

export const getRecruiterBar = createAsyncThunk(
  "RECRUITER_COUNTRY",
  reportsService.getCountCountryService
);

const reportsSlice = createSlice({
  name: "reports",
  initialState: reportsInitialState,
  extraReducers: {
    [getRecruitersPerArea.pending]: (state, action) => {
      state.loading = true;
    },
    [getRecruitersPerArea.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getRecruitersPerArea.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [topRecruiters.pending]: (state, action) => {
      state.loading = true;
    },
    [topRecruiters.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [topRecruiters.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;

    },
    [getSearchBar.pending]: (state, action) => {
      state.loading = true;
    },
    [getSearchBar.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getSearchBar.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getSearchPolar.pending]: (state, action) => {
      state.loading = true;
    },
    [getSearchPolar.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getSearchPolar.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getRecruiterPolar.pending]: (state, action) => {
      state.loading = true;
    },
    [getRecruiterPolar.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getRecruiterPolar.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getRecruiterBar.pending]: (state, action) => {
      state.loading = true;
    },
    [getRecruiterBar.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getRecruiterBar.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default reportsSlice.reducer