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
    <div>
      <h4>{ id }</h4>
      <h4>{ category }</h4>
      <h2>{ title }</h2>
      <h5>Author</h5>
    </div>
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
