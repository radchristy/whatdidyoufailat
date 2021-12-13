// Multiple actions in this file
// This is not a named export
import * as types from "./types";

export const addFailure = (id, description, category) => {
  return {
    type: types.FAILURE_ADDED,
    payload: {
      id: id,
      description: description,
      category: category
    },
  };
};

export const removeFailure = (id) => {
  return {
    type: types.FAILURE_REMOVED,
    payload: {
      id: id
    },
  };
};

