import classnames from 'classnames';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from '../containers/Header';

import flex from '../base.module.css';

function App() {
  return (
    <div>
      <Header />
      <div className={classnames(flex.flex, flex.column, flex.alignCenter)}>
        <div className={flex.container}>
          <BooksList />
          <BooksForm />
        </div>
      </div>
    </div>
  );
}

export default App;
