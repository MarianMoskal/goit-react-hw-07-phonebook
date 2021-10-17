import { Item, Name, Button, Spinner } from "./Contact.styled";
import PropTypes from "prop-types";
import { useDeleteContactByIdMutation } from "API/contacts-api";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Contact({ props: { name, number, id } }) {
  const [deleteContact, { isLoading }] = useDeleteContactByIdMutation();

  return (
    <>
      <Item>
        <Name>{name} :</Name>
        {number}
      </Item>

      <Button
        type="button"
        id={id}
        value="Delete"
        onClick={(e) => deleteContact(e.target.id)}
        disabled={isLoading}
      />

      <Spinner>
        <Loader
          visible={isLoading}
          type="Circles"
          color="#d0ff00"
          height={20}
          width={20}
        />
      </Spinner>
    </>
  );
}

Contact.propTypes = {
  props: PropTypes.exact({
    createdAt: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
