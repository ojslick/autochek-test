import {permitTypes} from '../Actiontypes/permitsTypes';
import {PermitsActions, PermitsState} from '../types/types';

const initialState: PermitsState = {
  pending: false,
  permits: [],
  error: null,
}

export default (state = initialState, action: PermitsActions) => {
  switch (action.type) {
    case permitTypes.FETCH_PERMIT_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case permitTypes.FETCH_PERMIT_SUCCESS:
      return {
        ...state,
        pending: false,
        permits: action.payload.permits,
        error: null
      }
    case permitTypes.FETCH_PERMIT_FAILURE:
      return {
        ...state,
        pending: false,
        permits: [],
        error: action.payload.error
      }
    default: 
      return {
        ...state,
      }
  }
}