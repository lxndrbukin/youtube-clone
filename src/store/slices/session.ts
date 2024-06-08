import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SessionProps, UserData } from "./types";
import { login } from "../thunks/login";

const accessToken = localStorage.getItem("access_token");

const initialState: SessionProps = {
  loggedIn: accessToken ? true : false,
  userData: undefined,
};

const session = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state: SessionProps): void => {
      state.loggedIn = false;
      state.userData = undefined;
    });
    builder.addCase(
      login.fulfilled,
      (state: SessionProps, action: PayloadAction<UserData>): void => {
        state.loggedIn = true;
        state.userData = action.payload;
      }
    );
  },
});

export default session.reducer;
