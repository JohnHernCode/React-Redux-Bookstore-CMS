import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { books } from '../actions';

import Book from '../components/Book';

function BooksList({
  books,
  removeBook,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {
          books.length > 0
            ? books.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={() => removeBook(book)}
              />
            ))
            : <h3 style={{ textAlign: 'center' }}>No books were found!</h3>
        }
      </tbody>
    </table>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const getBooks = ({ books }) => books;

const mapStateToProps = (state) => ({
  books: getBooks(state),
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    removeBook: books.removeBook,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
