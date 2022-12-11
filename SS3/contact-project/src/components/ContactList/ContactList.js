import React, { useContext, useState } from "react";
import contactContext from "../../contexts/ContactContext/ContactContext";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ onDeleteContact }) => {
  const ctxContact = useContext(contactContext);
  const [search, setSearch] = useState("");

  const filterContacts = ctxContact.contacts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="contact-list">
      <input
        type="text"
        className="mb-2"
        placeholder="Filter Contacts..."
        onChange={(event) => setSearch(event.target.value)}
      />
      {filterContacts.map((item) => (
        <ContactItem
          key={item.id}
          contact={item}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
