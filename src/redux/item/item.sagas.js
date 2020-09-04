import { takeLatest, put, all, call } from "redux-saga/effects";

import ItemTypes from "./item.types";
import { itemFetchSuccess, itemFetchFailure } from "./item.actions";

export function* itemFetchStart({ payload }) {
  try {
    const data = "123";
    yield put(itemFetchSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(
      itemFetchFailure("An internal error occurred. We are looking into this.")
    );
  }
}

export function* onItemFetchStart() {
  yield takeLatest(ItemTypes.ITEM_FETCH_START, itemFetchStart);
}

export function* itemSagas() {
  yield all([call(onItemFetchStart)]);
}
