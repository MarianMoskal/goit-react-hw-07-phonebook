import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { filter } from "./contacts/contacts-reducers";
import { contactsApi } from "API/contacts-api";
import logger from "redux-logger";

const contacts = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter,
});

export const store = configureStore({
  reducer: contacts,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(contactsApi.middleware)
      .concat(logger),
});

//OLD

// import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import contactsReducers from "./contacts/contacts-reducers";

// const store = configureStore({
//   reducer: contactsReducers,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(logger),
// });

// export { store };
