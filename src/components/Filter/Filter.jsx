import { useDispatch } from "react-redux";
import { Label, Input } from "./index";
import { changeFilter } from "redux/contacts/contacts-actions";

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <Label htmlFor="filter">Find contact by name</Label>
      <Input
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        type="text"
        name="filter"
        id="filter"
        placeholder="Let's find the contact"
      />
    </>
  );
}
