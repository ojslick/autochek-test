import { all, fork } from "redux-saga/effects";
import permitsSaga from "./permitsSaga";

export function* rootSaga() {
  yield all([fork(permitsSaga)]);
}
