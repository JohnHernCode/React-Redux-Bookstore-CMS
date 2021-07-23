export const ACTION_TYPES = {
  CHANGE_FILTER: 'CHANGE_FILTER',
};

export const changeFilter = (newFilter) => ({
  type: ACTION_TYPES.CHANGE_FILTER,
  payload: newFilter,
});
