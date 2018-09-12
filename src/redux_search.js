import { initialState } from "./initialState";

//action
export const selectCategory = categoryType => {
  return {
    type: "SELECT_CATEGORY",
    categoryType
  };
};

//reducers

export const search = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return {
        categoryType: action.categoryType
      };
    default:
      return state;
  }
};
