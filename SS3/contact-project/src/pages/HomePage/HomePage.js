import React, { useEffect, useState } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ContactContext from "../../contexts/ContactContext/ContactContext";

const CONTACTS_DATA = [
  {
    id: 1,
    name: "Jill Johnson",
    email: "jill@gmail.com",
    phone: "111-111-1111",
    type: "personal",
  },
  {
    id: 2,
    name: "Sara Watson",
    email: "sara@gmail.com",
    phone: "222-222-2222",
    type: "personal",
  },
  {
    id: 3,
    name: "Harry White",
    email: "harry@gmail.com",
    phone: "333-333-3333",
    type: "professional",
  },
];

const HomePage = () => {
  const [contacts, setContacts] = useState(CONTACTS_DATA);
  const [contactForm, setContactForm] = useState({});

  useEffect(() => {
    setContacts(CONTACTS_DATA);
  }, []);

  const onAddContact = (contact) => {
    const contactsIndex = contacts.findIndex((item) => item.id === contact.id);

    if (contactsIndex >= 0) {
      const newContact = [...contacts];
      newContact.splice(contactsIndex, 1, contact);
      setContacts(newContact);
    } else {
      setContacts((prev) => [
        ...prev,
        { ...contact, id: Math.floor(Math.random() * 100) },
      ]);
    }
  };

  const onDeleteContact = (id) => {
    const listContactsTemp = [...contacts];
    const contact = listContactsTemp.filter((element) => !(element.id === id));
    setContacts(contact);
  };

  return (
    <div className="homepage container d-flex justify-content-between my-3">
      <ContactContext.Provider
        value={{
          contacts,
          contactForm,
          setContactForm,
          onAddContact,
          onDeleteContact,
        }}
      >
        <ContactForm />
        <ContactList />
      </ContactContext.Provider>
    </div>
  );
};

export default HomePage;
