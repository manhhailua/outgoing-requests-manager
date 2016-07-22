import * as Types from '../constants/ActionTypes';

export function addDomain(domain) {
  return {type: Types.ADD_DOMAIN, domain};
}

export function deleteDomain(domain) {
  return {type: Types.DELETE_DOMAIN, domain};
}

export function clearDomains() {
  return {type: Types.CLEAR_DOMAINS};
}