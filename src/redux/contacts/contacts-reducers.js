// import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./contacts-actions";
// import { getContacts, addContact, removeContact } from "./contacts-operations";

export const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

// const INITIAL_STATE = {
//   contacts: {
//     contacts: [],
//     filter: "",
//   },
// };

// const contacts = createReducer(INITIAL_STATE.contacts.contacts, {
//   [getContacts.fulfilled]: (_, { payload }) => payload,

//   [addContact.fulfilled]: (state, { payload }) => [...state, payload],

//   [removeContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const isLoading = createReducer(false, {
//   [getContacts.pending]: () => true,
//   [getContacts.fulfilled]: () => false,
//   [getContacts.rejected]: () => false,

//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,

//   [removeContact.pending]: () => true,
//   [removeContact.fulfilled]: () => false,
//   [removeContact.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [getContacts.rejected]: (_, { payload }) => payload,
//   [getContacts.pending]: () => null,

//   [addContact.rejected]: (_, { payload }) => payload,
//   [addContact.pending]: () => null,

//   [removeContact.rejected]: (_, { payload }) => payload,
//   [removeContact.pending]: () => null,
// });

// export default combineReducers({
//   contacts: combineReducers({
//     contacts,
//     isLoading,
//     error,
//     filter,
//   }),
// });
