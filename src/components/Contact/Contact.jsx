import { Item, Name, Button } from "./Contact.styled";
import { useDispatch } from "react-redux";
import { removeContact } from "redux/contacts/contacts-operations";
import PropTypes from "prop-types";

export default function Contact({ props: { name, number, id } }) {
  const dispatch = useDispatch();

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
        onClick={(e) => dispatch(removeContact(e.target.id))}
      />
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
