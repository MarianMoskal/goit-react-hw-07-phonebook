import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts, postContact, deleteContact } from "API/contacts-api";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const res = await postContact(contact);
      // console.log(res);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      await deleteContact(id);
      // console.log(res);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const getContacts = () => async dispatch => {
//     dispatch(actions.fetchContactsRequest());

//     try {
//         const contacts = await fetchContacts();
//         dispatch(actions.fetchContactsSuccess(contacts))
//     } catch (error) {
//         dispatch(actions.fetchContactsError(error))
//     }
// }
