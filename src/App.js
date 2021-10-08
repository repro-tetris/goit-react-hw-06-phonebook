import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import { ContactList } from "./components/Contact";
import { saveContacts, loadContacts } from "./components/utils/storage";

export default function App() {
  const [contacts, setContacts] = useState(() => loadContacts());
  const [filter, setFilter] = useState("");

  useEffect(() => saveContacts(contacts), [contacts]);

  const createContact = (e) => {
    const { name, number } = e;
    return {
      id: uuidv4(),
      name: name,
      number: number,
    };
  };

  const handleFilter = (e) => setFilter(e);

  const handlerOnSubmit = (e) => {
    if (contacts.find((contact) => contact.name === e.name)) {
      alert(`${e.name} is already in contacts`);
    } else {
      const newContact = createContact(e);
      const newContactList = [...contacts, newContact];
      setContacts(newContactList);
    }
  };

  const handleDelete = (e) => {
    setContacts(contacts.filter((contact) => contact.id !== e));
  };

  const getFiltered = () => {
    return filter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter)
        )
      : contacts;
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handlerOnSubmit} />

      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} />
      <ContactList contacts={getFiltered()} onDelete={handleDelete} />
    </div>
  );
}
