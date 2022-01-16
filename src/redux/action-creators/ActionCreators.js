import ActionConstants from "../action-constants/ActionConstant";

const API_HOST = "https://reqres.in/api/users?page=1";
export const fetchValue = () => {
  return async function (dispatch) {
    const response = await fetch(API_HOST);
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: ActionConstants.FETCH_VALUE, payload: data });
    }
  };
};

export const editFields = (fieldData) => {
  return {
    type: ActionConstants.EDIT_ROW,
    payload: fieldData,
  };
};

export const deleteRow = (id) => {
  return {
    type: ActionConstants.DELETE_ROW,
    payload: id,
  };
};

export const refreshItems = (items) => {
  return {
    type: ActionConstants.REFRESH_LIST,
    payload: items,
  };
};
