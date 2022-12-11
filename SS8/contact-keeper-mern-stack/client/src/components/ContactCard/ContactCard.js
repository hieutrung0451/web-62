import React, { useContext } from "react";
import { PROFESSIONAL } from "../../configs/constants";
import contactContext from "../../contexts/ContactContext/ContactContext";
import ContactService from "../../services/contactServices";

const ContactCard = (props) => {
  const { contact } = props;
  const { setContactsData } = useContext(contactContext);

  const { id, name, email, phone, type } = contact;
  const typeClassName =
    type === PROFESSIONAL ? "badge bg-danger" : "badge bg-success";
  return (
    <div>
      <div className="card mb-3" style={{ width: "80%" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
          <p className="card-text">{phone}</p>
          <p className={typeClassName}>{type}</p>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary me-2"
              onClick={async () => {
                const res = await ContactService.update(id);
                setContactsData(res.data.data);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={async () => {
                const res = await ContactService.delete(id);
                setContactsData(res.data.data);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
