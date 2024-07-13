import { configureStore } from "@reduxjs/toolkit";
import authenticationStore from "./authentication.store";
const store = configureStore({
  reducer: { valid: authenticationStore },
});

export default store;
