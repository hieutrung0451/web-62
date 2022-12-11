import React, { useContext } from "react";
import { PERSONAL, PROFESSIONAL } from "../../configs/constants";
import contactContext from "../../contexts/ContactContext/ContactContext";

const initialValues = {
  id: Math.floor(Math.random() * 100),
  name: "",
  email: "",
  phone: "",
  type: PERSONAL,
};

const ContactForm = () => {
  const ctxContact = useContext(contactContext);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    ctxContact.setContactForm({
      ...ctxContact.contactForm,

      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    ctxContact.onAddContact(ctxContact.contactForm);
    ctxContact.setContactForm(initialValues);
  };

  const { name, email, phone, type } = ctxContact.contactForm;
  const isDisabledSubmitButton = !name && !email && !phone;

  return (
    <div>
      <h3 className="text-center">Add Contact</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <input
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            id="phone"
            name="phone"
            placeholder="phone"
            value={phone}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-3 ">
          <div>
            <p>Contact types</p>
            <div className="d-flex">
              <div className="form-check me-3">
                <input
                  className="form-check-input "
                  type="radio"
                  name="type"
                  id="personalType"
                  checked={type === PERSONAL}
                  onChange={onChangeHandler}
                  value={PERSONAL}
                />
                <label className="form-check-label" htmlFor="personalType">
                  Personal
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="professionalType"
                  checked={type === PROFESSIONAL}
                  onChange={onChangeHandler}
                  value={PROFESSIONAL}
                />
                <label className="form-check-label" htmlFor="professionalType">
                  Professional
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isDisabledSubmitButton}
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
