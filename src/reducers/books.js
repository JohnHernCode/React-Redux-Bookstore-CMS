import { books } from '../actions/index';
import categories from '../categories';

export const INITIAL_STATE = [
  { id: 1, title: 'The Cellist', category: categories[0] },
  { id: 2, title: 'The Paper Palace', category: categories[2] },
  { id: 3, title: 'Malibu Rising', category: categories[1] },
  { id: 4, title: 'It\'s Better This Way', category: categories[4] },
];

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case books.ACTION_TYPES.CREATE_BOOK:
      return [...state, action.payload];
    case books.ACTION_TYPES.REMOVE_BOOK:
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
