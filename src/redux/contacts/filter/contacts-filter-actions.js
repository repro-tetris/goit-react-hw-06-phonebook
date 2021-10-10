import { CHANGE_FILTER } from "./contacts-filter-types";

export const changeFilter = (str) => ({
  type: CHANGE_FILTER,
  payLoad: str,
});
