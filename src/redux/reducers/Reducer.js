import ActionConstants from "../action-constants/ActionConstant";
import ActionConstant from "../action-constants/ActionConstant";

const mainReducre = (state = [], action) => {
  switch (action.type) {
    case ActionConstant.FETCH_VALUE: {
      const fetchedValues = action.payload;
      return fetchedValues;
    }

    case ActionConstants.EDIT_ROW: {
      const upDatedItem = {
        id: action.payload.id,
        avatar: action.payload.avatar,
        email: action.payload.email,
        first_name: action.payload.firstName,
        last_name: action.payload.lastName,
      };

      let currentList = [...state.data];
      let upDatedList = [];

      for (let i = 0; i < currentList.length; i++) {
        if (currentList[i].id === action.payload.id) {
          upDatedList.push(upDatedItem);
        } else {
          upDatedList.push(currentList[i]);
        }
      }
      return {
        data: upDatedList,
      };
    }
    case ActionConstants.DELETE_ROW: {
      const upDatedList = state.data.filter((item) => {
        if (item.id !== action.payload) 
          return item;
      });

      return {
        data: upDatedList,
      };
    }
    case ActionConstants.REFRESH_LIST: {
      return {
        data: action.payload,
      };
    }
    default:
      return state;
  }
};

export default mainReducre;
