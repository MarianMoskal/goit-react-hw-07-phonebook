import Form from "../Form";
import Filter from "../Filter";
import ContactList from "../ContactList";
import { contactsSelectors, contactsOperations } from "redux/contacts";
import { Container, Title, SecondaryTitle, Spinner } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {
  const contacts = useSelector(contactsSelectors.getContactsFromState);
  const loading = useSelector(contactsSelectors.getLoadingFromState);
  const error = useSelector(contactsSelectors.getErrorFromState);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.getContacts()), [dispatch]);

  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Form />
      </Container>

      {error ? <SecondaryTitle>{error}</SecondaryTitle> : null}

      {contacts.length > 0 ? (
        <Container>
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter />
          <ContactList />
        </Container>
      ) : (
        <SecondaryTitle>No contacts yet</SecondaryTitle>
      )}

      {loading ? (
        <Spinner>
          <Loader
            type="Circles"
            color="#d0ff00"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        </Spinner>
      ) : null}
    </>
  );
}
