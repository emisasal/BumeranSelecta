import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as searchService from "../services/searchServices"

const searchsInitialState = {
    loading: false,
    data: [],
    singleSearch: {},
    error: ""
}

export const getSearchsList = createAsyncThunk("GET_SEARCH", searchService.getSearchsListService);

export const addSearch = createAsyncThunk("ADD_SEARCH", searchService.addSearchServices)

export const deleteSearch = createAsyncThunk("DELETE_SEARCH", searchService.deleteSearchServices)

export const getSingleSearch  = createAsyncThunk("GET_ID_SEARCH",searchService.singleSearchServices);

export const editRecruiter = createAsyncThunk("EDIT_SEARCH", searchService.editSearchServices);

export const endSearch = createAsyncThunk("END_SEARCH", searchService.endSearchSearchServices);

export const deleteRecruiterSearch = createAsyncThunk("END_SEARCH", searchService.deleteRecruiterSearchServices);

export const getAssignment = createAsyncThunk("GET_ ASSIGNMENT", searchService.assignmentSearchsServices)

const searchSlice = createSlice({
    name: "search",
    initialState: searchsInitialState, 
    extraReducers: {
        [deleteSearch.pending]: (state, action) => {
            state.loading = true
        },
        [deleteSearch.fulfilled]: (state, action) => {
            state.data = state.data.filter((Search) => Search.id !== action.payload)
            state.singleSearch = {}
            state.loading = false
        },
        [deleteSearch.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [addSearch.pending]: (state, action) => {
            state.loading = true
        },
        [addSearch.fulfilled]: (state, action) => {
            state.loading = false
        },
        [addSearch.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [getSingleSearch.pending]: (state, action) => {
            state.loading = true;
        },
        [getSingleSearch.fulfilled]: (state, action) => {
            state.singleSearch = action.payload;
            state.loading = false;
        },
        [getSingleSearch.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getSearchsList.pending]: (state, action) => {
            state.loading = true
        },
        [getSearchsList.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [getSearchsList.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [getSearchsList.pending]: (state, action) => {
            state.loading = true
        },
        [getAssignment.pending]: (state, action) => {
            state.loading = true
        },
        [getAssignment.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [getAssignment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [endSearch.pending]: (state, action) => {
            state.loading = true
        },
        [endSearch.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [endSearch.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [getAssignment.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
        [deleteRecruiterSearch.pending]: (state, action) => {
            state.loading = true
        },
        [deleteRecruiterSearch.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [deleteRecruiterSearch.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
        },
    }
})

export default searchSlice.reducer