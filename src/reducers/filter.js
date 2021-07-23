import { filter } from '../actions';

export const INITIAL_STATE = 'All';

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case filter.ACTION_TYPES.CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
