import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { books } from '../actions';

import style from './BooksForm.module.css';
import flex from '../base.module.css';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

function BooksForm({ createBook }) {
  const [formData, setFormData] = React.useState({ title: '', category: '' });

  const handleChange = (e) => {
    setFormData((formData) => (
      { ...formData, [e.target.name]: e.target.value }
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(formData);
    setFormData({ title: '', category: '' });
  };

  return (
    <section className={classnames(flex.w100, flex.section)}>
      <form onSubmit={handleSubmit} className={classnames(flex.w100, style.form)}>
        <h2>Add new book</h2>
        <div className={classnames(style.formInner, flex.flex)}>
          <div className={style.inputGroup}>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              className={flex.input}
              onChange={handleChange}
              value={formData.title}
              required
            />
          </div>
          <div className={style.inputGroup}>
            <select
              id="category"
              name="category"
              className={flex.select}
              onChange={handleChange}
              value={formData.category}
              required
            >
              <option value="" disabled>Category</option>
              { categories.map((c) => <option key={c} value={c}>{c}</option>) }
            </select>
          </div>
          <button className={flex.button} type="submit">Save</button>
        </div>
      </form>
    </section>
  );
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ createBook: books.createBook }, dispatch)
);

export default connect(null, mapDispatchToProps)(BooksForm);
