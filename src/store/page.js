import { createAction, createReducer } from "@reduxjs/toolkit"

const pageInitialState = 1

export const pageChange = createAction("CHANGE_PAGE")

const pageReducer = createReducer(pageInitialState, {
  [pageChange]: (state, action) => action.payload.page,
})

export default pageReducer
