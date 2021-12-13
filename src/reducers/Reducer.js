const initialState = {
  failures: []
};

const addFailure = (state, payload) => {
  return {
    ...state,
      failures: [
      {
        id: payload.id,
        description: payload.description,
        category: payload.category,
      },
      ...state.failures
    ]
  };
};

const removeFailure = (state, payload) => {
  return {
    ...state,
    failures: state.failures.filter((failure) => failure.id !== payload.id),
  };
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FAILURE_ADDED":
      return addFailure(state, action.payload);
    case "FAILURE_REMOVED":
      return removeFailure(state, action.payload);
    default:
      return state;
  }
};

export default Reducer;
