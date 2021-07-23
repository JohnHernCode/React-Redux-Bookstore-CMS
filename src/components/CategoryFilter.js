import React from 'react';
import PropTypes from 'prop-types';
import categories from '../categories';

function CategoryFilter({ handleFilterChange, filter }) {
  return (
    <div>
      <select
        value={filter}
        onChange={({ target: { value } }) => handleFilterChange(value)}
      >
        <option value="All">All</option>
        { categories.map((c) => <option key={c} value={c}>{ c }</option>) }
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default (CategoryFilter);
