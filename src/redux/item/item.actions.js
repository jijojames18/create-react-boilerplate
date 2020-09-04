import ItemTypes from "./item.types";

const ITEM_FETCH_LIMIT = 5;

export const itemFetchStart = (payload) => ({
  type: ItemTypes.ITEM_FETCH_START,
  payload: { ...payload, limit: ITEM_FETCH_LIMIT },
});

export const itemFetchSuccess = (payload) => ({
  type: ItemTypes.ITEM_FETCH_SUCCESS,
  payload,
});

export const itemFetchFailure = (payload) => ({
  type: ItemTypes.ITEM_FETCH_FAILURE,
  payload,
});
