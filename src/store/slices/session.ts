import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
};

const session = createSlice({
  name: "session",
  initialState,
  reducers: {},
});

export default session.reducer;
