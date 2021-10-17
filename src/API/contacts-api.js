import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://616b285816e7120017fa1251.mockapi.io",
  }),
  tagTypes: ["Contacts"],
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => "/contacts",
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Contacts", id })), "Contacts"]
          : ["Contacts"],
    }),

    addContact: build.mutation({
      query: (body) => ({
        url: "/contacts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contacts"],
    }),

    deleteContactById: build.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactByIdMutation,
} = contactsApi;

//OLD

// import axios from "axios";

// // axios.defaults.baseURL = "http://localhost:4000/contacts";
// axios.defaults.baseURL = "https://616b285816e7120017fa1251.mockapi.io/contacts";

// export async function fetchContacts() {
//   const { data } = await axios.get();

//   return data;
// }

// export async function postContact(contact) {
//   const options = {
//     method: "POST",
//     data: contact,
//   };

//   const { data } = await axios(options);
//   const res = await data;

//   return res;
// }

// export async function deleteContact(id) {

//   const res = await axios(`/${id}`, { method: "DELETE" });

//   return res;
// }
