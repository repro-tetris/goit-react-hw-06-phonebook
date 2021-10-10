import { v4 as uuidv4 } from "uuid";
import { CONTACT_ADD, CONTACT_DEL } from "./contacts-item-types";

export default function itemsReducer(state = [], { type, payLoad }) {
  switch (type) {
    case CONTACT_ADD:
      const { name, number } = payLoad;
      const contact = {
        id: uuidv4(),
        name,
        number,
      };
      return [...state, contact];

    case CONTACT_DEL:
      return state.filter(({ id }) => id !== payLoad);
    default:
      return state;
  }
}
