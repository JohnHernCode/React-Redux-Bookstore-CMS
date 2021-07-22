export const ACTION_TYPES = {
  CREATE_BOOK: 'CREATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
};

let counter = 10;

export const createBook = (book) => {
  counter += 1;
  return {
    type: ACTION_TYPES.CREATE_BOOK,
    payload: {
      ...book,
      id: counter,
    },
  };
};

export const removeBook = (book) => ({
  type: ACTION_TYPES.REMOVE_BOOK,
  payload: { id: book.id },
});
