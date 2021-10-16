import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactsReducers from "./contacts/contacts-reducers";

const store = configureStore({
  reducer: contactsReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export { store };
