import { ContactItem } from "../../Contact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { delContact } from "../../../redux/contacts/items/contacts-item-actions";

const ContactList = ({ contacts, onDelete }) => {
  console.log("contacts:", contacts);
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          console.log(contact);

          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={() => onDelete(contact.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

const getFiltered = (filter, items) => {
  return filter
    ? items.filter((contact) => contact.name.toLowerCase().includes(filter))
    : items;
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;
  const filteredItems = getFiltered(filter, items);

  return {
    contacts: filteredItems,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(delContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
