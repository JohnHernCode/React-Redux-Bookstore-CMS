import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { books } from '../actions';

import Book from '../components/Book';

function BooksList({
  books,
}) {
  return (
    <section>
      {
          books.length > 0
            ? books.map((book) => (
              <Book
                key={book.id}
                book={book}
              />
            ))
            : <h3 style={{ textAlign: 'center' }}>No books were found!</h3>
        }
    </section>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};

const getBooks = ({ books }) => books;

const mapStateToProps = (state) => ({
  books: getBooks(state),
});

export default connect(mapStateToProps, null)(BooksList);
