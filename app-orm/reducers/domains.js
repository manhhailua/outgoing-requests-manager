import * as ActionTypes from '../constants/ActionTypes';
import uuid from 'node-uuid';

const initialState = [
  {id: uuid.v1(), domain: 'vcmedia.vn'},
  {id: uuid.v1(), domain: 'admicro.vn'}
];

const actionRouter = {

  [ActionTypes.ADD_DOMAIN](state, object) {
    console.debug('New domain is being added: ' + object.domain);

    return [{
      id: uuid.v1(),
      domain: object.domain
    }, ...state];
  },

  [ActionTypes.DELETE_DOMAIN](state, object) {
    console.debug('Domain with id:' + object.id + ' is being deleted');

    return state.filter(domain => domain.id !== object.id);
  },

  [ActionTypes.CLEAR_DOMAINS](state) {
    console.debug('All domains is now deleted!');

    return [];
  }
};

export default function domains(state = initialState, action) {
  const reduceFn = actionRouter[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}