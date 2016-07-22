import * as ActionTypes from '../constants/ActionTypes';

const initialState = [
  {id: 0, domain: 'admicro.vn'},
  {id: 1, domain: 'vcmedia.vn'}
];

const actionRouter = {
  [ActionTypes.ADD_DOMAIN](state, domain) {
    console.debug('one more domain was added!');
  },
  [ActionTypes.DELETE_DOMAIN](state, domain) {
    console.log(state);
    console.debug(domain.text + ' was deleted!');
  },
  [ActionTypes.DELETE_DOMAIN](state) {
    console.debug('All domains were deleted!');
  }
};

export default function domains(state = initialState, action) {
  const reduceFn = actionRouter[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}