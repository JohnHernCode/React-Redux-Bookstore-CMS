import './App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div>
      <div>
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
