import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {Permit} from '../../models/Permit'
import {
  fetchPermitsFailure,
  fetchPermitsSuccess
} from "../actions/permitsActions";
import { permitTypes } from "../Actiontypes/permitsTypes";

const getPermits = () =>
  axios.get<Permit[]>("https://data.cityofchicago.org/resource/ydr8-5enu.json", {
    data: {
    limit : 10,
    app_token : "XgUNUllSZ6HQsz68ee9nXFFVA"
  }
});

function* fetchPermitsSaga() {
  try {
    //@ts-ignore
    const response = yield call(getPermits);
    yield put(
      fetchPermitsSuccess({
        permits: response.data
      })
    );
  } catch (e) {
    yield put(
      fetchPermitsFailure({
        error: e.message
      })
    );
  }
}

function* permitsSaga() {
  yield all([takeLatest(permitTypes.FETCH_PERMIT_REQUEST, fetchPermitsSaga)]);
}

export default permitsSaga;
