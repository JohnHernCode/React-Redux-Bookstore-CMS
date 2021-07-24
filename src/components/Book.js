import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './Book.module.css';
import util from '../utils.module.css';

function Book(props) {
  const { book, handleRemoveBook } = props;
  return (
    <div className={style.book}>
      <div>
        <h4>{ book.category }</h4>
        <h2>{ book.title }</h2>
        <h5>Author</h5>
        <div className={style.links}>
          <span>Comments</span>
          <span>Remove</span>
          <span>Edit</span>
        </div>
      </div>
      <div className={classnames(util.flex, util.alignCenter)}>
        <div className={classnames(style.progress, util.flex)}>
          <div className={style.progressCircle} />
          <div className={classnames(util.flex, util.column)}>
            <div className={style.percentage}>100%</div>
            <div className={style.status}>Completed</div>
          </div>
        </div>
        <div
          className={classnames(util.flex, util.column, util.justifyBetween, util.h100)}
        >
          <div>
            <div className={style.chapterLabel}>Current Chapter</div>
            <div className={style.chapter}>
              Chapter&nbsp;
              { book.id }
            </div>
          </div>
          <button
            onClick={() => handleRemoveBook([book.id], [book.title], [book.category])}
            type="button"
            className={util.button}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
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
