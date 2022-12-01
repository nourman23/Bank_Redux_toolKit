import { configureStore } from "@reduxjs/toolkit";
import AccountsReducer from "./reducer";

export const store = configureStore({
  reducer: {
    accounts: AccountsReducer,
  },
});
