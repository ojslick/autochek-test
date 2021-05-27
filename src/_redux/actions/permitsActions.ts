import {permitTypes} from '../Actiontypes/permitsTypes';
import {
  FetchPermitsFailure,
  FetchPermitsFailurePayload,
  FetchPermitsRequest,
  FetchPermitsSuccess,
  FetchPermitsSuccessPayload
} from '../types/types';

export const fetchPermitsRequest = (): FetchPermitsRequest => ({
  type: permitTypes.FETCH_PERMIT_REQUEST
})

export const fetchPermitsSuccess = (
  payload: FetchPermitsSuccessPayload
): FetchPermitsSuccess =>  ({
  type: permitTypes.FETCH_PERMIT_SUCCESS,
  payload
})

export const fetchPermitsFailure = (
  payload: FetchPermitsFailurePayload
): FetchPermitsFailure => ({
  type: permitTypes.FETCH_PERMIT_FAILURE,
  payload
})