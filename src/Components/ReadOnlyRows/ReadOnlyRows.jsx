import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteRow } from "../../redux/action-creators/ActionCreators";
import "./ReadOnlyRows.css";
export default function ReadOnlyRow(props) {
  const dispatch = useDispatch();
  return (
    <>
      <tr className="table-row">
        <td>
          <img alt='user profile'src={props.rowValue.avatar} />
        </td>
        <td>
          <span>{props.rowValue.email}</span>
        </td>
        <td>{props.rowValue.first_name}</td>
        <td>{props.rowValue.last_name}</td>
        <td>
          <Button
            variant="secondary"
            onClick={() => props.sendEditID(props.rowValue.id)}
          >
            EDIT
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            variant="danger"
            onClick={() => {
              dispatch(deleteRow(props.rowValue.id));
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}
