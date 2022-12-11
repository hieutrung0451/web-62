import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
import "./ContactItem.css";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, email, phone, type } = contact;

  const upperCaseType = type.charAt(0).toUpperCase() + type.slice(1);

  // Display text
  const typeDisplay = (
    <span
      className={
        "badge " + (type === "professional" ? "badge-success" : "badge-primary")
      }
    >
      {upperCaseType}
    </span>
  );

  const emailDisplay = email && (
    <li>
      <i className="fas fa-envelope-open"></i> {email}
    </li>
  );

  const phoneDisplay = phone && (
    <li>
      <i className="fas fa-phone"></i> {phone}
    </li>
  );

  // Delete contact
  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  // Current contact
  const onCurrent = () => {
    setCurrent(contact);
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name} {typeDisplay}
      </h3>
      <ul className="list">
        {emailDisplay}
        {phoneDisplay}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={onCurrent}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
