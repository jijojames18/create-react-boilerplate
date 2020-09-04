import ItemTypes from "./item.types";

const INITIAL_STATE = {
  items: [],
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemTypes.ITEM_FETCH_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
      };
    case ItemTypes.ITEM_FETCH_FAILURE:
      return {
        ...state,
      };
    case ItemTypes.ITEM_FETCH_START:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default itemReducer;
