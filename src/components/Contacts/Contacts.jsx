import { useSelector } from "react-redux";
import { Item } from "./Contacts.styled";
import Contact from "../Contact";
import makeFilteredContacts from "helpers/makeFilteredContacts";
import { contactsSelectors } from "redux/contacts";
import { useGetContactsQuery } from "API/contacts-api";

export default function Contacts() {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(contactsSelectors.getFilterFromState);
  const emptyFilter = filter.trim() === "";

  return (
    <>
      {emptyFilter
        ? contacts.map((contact) => (
            <Item key={contact.id}>
              <Contact props={contact} />
            </Item>
          ))
        : makeFilteredContacts(contacts, filter.toLowerCase()).map(
            (contact) => (
              <Item key={contact.id}>
                <Contact props={contact} />
              </Item>
            )
          )}
    </>
  );
}
