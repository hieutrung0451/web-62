import React, { useContext } from "react";
import contactContext from "../../contexts/ContactContext/ContactContext";

const ContactItem = ({ contact }) => {
  const ctxContact = useContext(contactContext);

  const handleRemoveContact = () => {
    ctxContact.onDeleteContact(contact.id);
  };

  return (
    <div className="card mb-2" style={{ width: "400px" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{contact.name}</h5>
          <div className="card-email">{contact.type}</div>
        </div>
        <div className="card-email">{contact.email}</div>
        <div className="card-phone">{contact.phone}</div>
        <div className="btn-control mt-2">
          <button
            className="btn btn-dark me-1"
            onClick={() => ctxContact.setContactForm(contact)}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={handleRemoveContact}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
