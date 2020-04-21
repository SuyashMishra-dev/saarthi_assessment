export const SUBMIT_FORM = "SUBMIT_FORM";
export const LOADING_FORM_SHOW = "LOADING_FORM_SHOW";
export const LOADING_FORM_HIDE = "LOADING_FORM_HIDE";
export const DELETE_TABLE_ROW = "DELETE_TABLE_ROW";

export const submitForm = (payload) => ({
  type: SUBMIT_FORM,
  payload,
});

export const loadingFormShow = () => ({
  type: LOADING_FORM_SHOW,
});

export const loadingFormHide = () => ({
  type: LOADING_FORM_HIDE,
});

export const deleteTableRow = (payload) => ({
  type: DELETE_TABLE_ROW,
  payload,
});
