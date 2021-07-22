import React from 'react';
import PropTypes from 'prop-types';

function Book({
  book: {
    id,
    title,
    category,
  },
}) {
  return (
    <tr>
      <td>{ id }</td>
      <td>{ category }</td>
      <td>{ title }</td>
      <td>Author</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
