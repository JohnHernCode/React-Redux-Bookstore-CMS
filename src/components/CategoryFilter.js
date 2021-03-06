import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import categories from '../categories';

import flex from '../base.module.css';
import style from './CategoryFilter.module.css';

function CategoryFilter({ handleFilterChange, filter }) {
  return (
    <div className={classnames(style.outer, flex.flex, flex.justifyEnd)}>
      <select
        className={flex.select}
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
