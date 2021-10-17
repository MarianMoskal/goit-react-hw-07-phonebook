import Form from "../Form";
import Filter from "../Filter";
import ContactList from "../ContactList";
import { Container, Title, SecondaryTitle, Spinner } from "./index";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useGetContactsQuery } from "API/contacts-api";

export default function App() {
  const { data: contacts, error, isFetching: loading } = useGetContactsQuery();

  console.log(error);

  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Form />
      </Container>

      {error ? <SecondaryTitle>{error.data}</SecondaryTitle> : null}

      {contacts?.length > 0 ? (
        <Container>
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter />
          <ContactList />
        </Container>
      ) : null}

      {!contacts && !loading && !error && (
        <SecondaryTitle>No contacts yet</SecondaryTitle>
      )}

      {loading ? (
        <Spinner>
          <Loader
            visible={loading}
            type="Circles"
            color="#d0ff00"
            height={50}
            width={50}
          />
        </Spinner>
      ) : null}
    </>
  );
}
