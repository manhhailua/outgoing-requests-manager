import * as Types from '../constants/ActionTypes';

export function addDomain(domain) {
  return {type: Types.ADD_DOMAIN, domain: domain};
}

export function deleteDomain(id) {
  return {type: Types.DELETE_DOMAIN, id: id};
}

export function clearDomains() {
  return {type: Types.CLEAR_DOMAINS};
}