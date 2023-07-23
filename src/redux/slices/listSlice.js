import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  errors: false,
  list: []
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    getList: (state) => {
      state.loading = true;
    },
    getListSuccess: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
      state.errors = false;
    },
    getListError: (state) => {
      state.loading = false;
      state.errors = true;
    }
  }
});

export const {
    getList,
    getListSuccess,
    getListError
} = listSlice.actions;

export default listSlice.reducer;