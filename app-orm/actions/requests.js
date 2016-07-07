import * as Types from '../constants/ActionTypes';

export function addRequest(request) {
  return {type: Types.ADD_REQUEST, request};
}

export function clearRequests() {
  return {type: Types.CLEAR_REQUESTS};
}