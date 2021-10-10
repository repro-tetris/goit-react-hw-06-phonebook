import { CONTACT_ADD, CONTACT_DEL } from "./contacts-item-types";

export const addContact = (contact) => ({
  type: CONTACT_ADD,
  payLoad: contact,
});

export const delContact = (id) => ({
  type: CONTACT_DEL,
  payLoad: id,
});
