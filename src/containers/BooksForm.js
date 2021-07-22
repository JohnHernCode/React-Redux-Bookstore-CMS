import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Add new book</h2>
        <div>
          <div>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={formData.title}
              required
            />
          </div>
          <div>
            <select
              id="category"
              name="category"
              onChange={handleChange}
              value={formData.category}
              required
            >
              <option value="" disabled>Category</option>
              { categories.map((c) => <option key={c} value={c}>{c}</option>) }
            </select>
          </div>
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  );
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(BooksForm);
