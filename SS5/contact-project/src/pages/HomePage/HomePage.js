import React, { useEffect, useState } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import ContactContext from "../../contexts/ContactContext/ContactContext";

const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const [contactForm, setContactForm] = useState({});

  useEffect(() => {
    fetch("/contacts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        setContacts(data.data);
      });
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
