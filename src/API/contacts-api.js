import axios from "axios";

// axios.defaults.baseURL = "http://localhost:4000/contacts";
axios.defaults.baseURL = "https://616b285816e7120017fa1251.mockapi.io/contacts";

export async function fetchContacts() {
  const { data } = await axios.get();

  return data;
}

export async function postContact(contact) {
  const options = {
    method: "POST",
    data: contact,
  };

  const { data } = await axios(options);
  const res = await data;

  return res;
}

export async function deleteContact(id) {
  // const stringifyId = JSON.stringify(id)
  // const options = {
  //     method: "DELETE",
  //     data: `/${id}`,
  // }

  const res = await axios(`/${id}`, { method: "DELETE" });
  // const res = await data;

  return res;
}
