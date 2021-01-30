import React, { useState } from 'react';

import ContactFormComp from '../components/modals/ContactFormComp';

function ContactFormCon() {
  const [formState, setFormState] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;
    return type === 'checkbox' ? setFormState({
      ...formState,
      [name]: checked,
    })
      : setFormState({
        ...formState,
        [name]: value,
      });
  };
  return (
    <div>
      <ContactFormComp
        data={formState}
        handlechange={handleChange}
        show={show}
        handleclose={handleClose}
        handleshow={handleShow}
      />
    </div>
  );
}

export default ContactFormCon;
