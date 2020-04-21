import {
  LOADING_FORM_SHOW,
  SUBMIT_FORM,
  LOADING_FORM_HIDE,
  DELETE_TABLE_ROW,
} from "./action";

const initialState = {
  data: [],
  formLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_FORM_SHOW:
      return {
        ...state,
        formLoading: true,
      };
    case LOADING_FORM_HIDE:
      return {
        ...state,
        formLoading: false,
      };
    case SUBMIT_FORM:
      console.log(action.payload);
      console.log(state.data);
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case DELETE_TABLE_ROW:
      let filterArr = state.data.filter((item) => item.id !== action.payload);
      console.log(action.payload, filterArr);
      return {
        ...state,
        data: filterArr,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
