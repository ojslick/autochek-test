import { Permit } from "../../models/Permit";
import { permitTypes } from "../Actiontypes/permitsTypes";

export interface PermitsState {
  pending: boolean;
  permits: Permit[];
  error: string | null;
}

export interface FetchPermitsSuccessPayload {
  permits: Permit[];
}

export interface FetchPermitsFailurePayload {
  error: string;
}

export interface FetchPermitsRequest {
  type: typeof permitTypes.FETCH_PERMIT_REQUEST;
}

export type FetchPermitsSuccess = {
  type: typeof permitTypes.FETCH_PERMIT_SUCCESS;
  payload: FetchPermitsSuccessPayload;
};

export type FetchPermitsFailure = {
  type: typeof permitTypes.FETCH_PERMIT_FAILURE;
  payload: FetchPermitsFailurePayload;
};

export type PermitsActions =
  | FetchPermitsRequest
  | FetchPermitsSuccess
  | FetchPermitsFailure;
