import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editFields } from "../../redux/action-creators/ActionCreators";

export default function EditabbleRows(editFieldsProps) {
  const [editFormFields, setEditFormFields] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });
  const dispatch = useDispatch();

  const onChangeHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setEditFormFields({
      ...editFormFields,
      [name]: value,
    });
  };

  const onSaveChangesHandler = () => {
    dispatch(
      editFields({ ...editFormFields, id: editFieldsProps.rowValue.id })
    );
    editFieldsProps.savedChanges();
  };

  useEffect(() => {
    setEditFormFields({
      avatar: editFieldsProps.rowValue.avatar,
      email: editFieldsProps.rowValue.email,
      firstName: editFieldsProps.rowValue.first_name,
      lastName: editFieldsProps.rowValue.last_name,
    });
  }, []);

  return (
    <tr>
      <td>
        <img src={editFieldsProps.rowValue.avatar} />
      </td>
      <td>
        <input
          placeholder="email"
          value={editFormFields.email}
          name="email"
          onChange={onChangeHandle}
        />
      </td>
      <td>
        {" "}
        <input
          placeholder="first name"
          value={editFormFields.firstName}
          name="firstName"
          onChange={onChangeHandle}
        />
      </td>
      <td>
        <input
          placeholder="last name"
          value={editFormFields.lastName}
          name="lastName"
          onChange={onChangeHandle}
        />
      </td>
      <td>
        <Button
          variant="success"
          className="button-save"
          size="md"
          onClick={onSaveChangesHandler}
        >
          Save
        </Button>
      </td>
    </tr>
  );
}
