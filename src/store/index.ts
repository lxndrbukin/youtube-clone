import { configureStore } from "@reduxjs/toolkit";
import session from "./slices/session";

export const store = configureStore({
  reducer: {
    session,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
