const createReducer = handlers => (state, action) => {
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }

  return handlers[action.type](state, action);
};

export default createReducer({
  TOGGLE_REMARK_SCREEN: (state, { payload }) =>
    Object.assign({}, state, {
      remarkScreen: {
        isActive: !state.remarkScreen.isActive
      }
    }),
});