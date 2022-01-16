import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchValue,
  refreshItems,
} from "../../redux/action-creators/ActionCreators";
import EditabbleRows from "../EditableRows/EditabbleRows";
import ReadOnlyRow from "../ReadOnlyRows/ReadOnlyRows";
import "./TableData.css";

const getItems = JSON.parse(
  localStorage.getItem("items") === "undefined"
    ? "[]"
    : localStorage.getItem("items")
);

export default function TableData() {
  const [editID, seteditID] = useState("");
  const dispatch = useDispatch();
  // const [dataItems, setDataItems] = useState(getItems);

  let data = useSelector((state) => state.tableValues.data);

  useEffect(() => {
    if (getItems.length === 0) dispatch(fetchValue());
    else dispatch(refreshItems(getItems));
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(data));
  }, [data]);

  const sendEditIdHandle = (id) => {
    seteditID(id);
  };
  return (
    <Container>
      <Table className="table">
        <thead className="table-head">
          <tr>
            <th>Picture</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => {
            if (row.id === editID) {
              return (
                <EditabbleRows
                  key={index}
                  rowValue={row}
                  savedChanges={() => {
                    seteditID("");
                  }}
                />
              );
            } else {
              return (
                <ReadOnlyRow
                  key={index}
                  rowValue={row}
                  sendEditID={sendEditIdHandle}
                />
              );
            }
          })}
        </tbody>
      </Table>
    </Container>
  );
}
