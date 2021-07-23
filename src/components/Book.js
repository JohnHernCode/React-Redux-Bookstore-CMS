import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { book, handleRemoveBook } = props;
  return (
    <tr>
      <td>{ book.id }</td>
      <td>{ book.title }</td>
      <td>{ book.category }</td>
      <td>
        <button
          onClick={() => handleRemoveBook([book.id], [book.title], [book.category])}
          type="button"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
