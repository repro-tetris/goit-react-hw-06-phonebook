import { CHANGE_FILTER } from "./contacts-filter-types";

export default function filterReducer(state = "", { type, payLoad }) {
  switch (type) {
    case CHANGE_FILTER:
      return payLoad;

    default:
      return state;
  }
}
