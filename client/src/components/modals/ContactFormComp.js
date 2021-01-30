import React from 'react';

import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactFormComp({
  data,
  handlechange,
  show,
  handleclose,
  handleshow,

}) {
  return (
    <div>
      <Button variant="primary" onClick={handleshow}>
        Contact Us Now!
      </Button>

      <Modal show={show} onHide={handleclose} animation={false}>
        <Modal.Header closeButton>
          <h2 style={{ color: 'black' }}>Contact form</h2>
          <br />
        </Modal.Header>
        <Modal.Body>
          <Form
            id="form"
            method="POST"
            data-email="from_email@example.com"
            action="https://script.google.com/macros/s/AKfycbwDet4aTarf3N06yjpTQ4LckVRBKu4fL4ENdiJXR98JhWMSLNBugyTIYA/exec"
          >
            <Form.Group size="lg" controlId="fullName">
              <Form.Label><strong>Full Name</strong></Form.Label>
              <Form.Control
                autoFocus
                type="text"
                name="fullName"
                placeholder="What should I call you?"
                onChange={handlechange}
                value={data.fullName}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="email">
              <Form.Label><strong>Email</strong></Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                onChange={handlechange}
                value={data.email}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="contactNumber">
              <Form.Label><strong>Contact Number</strong></Form.Label>
              <Form.Control
                type="text"
                name="contactNumber"
                placeholder="+27 00 000 0000"
                onChange={handlechange}
                value={data.contactNumber}
              />
            </Form.Group>
            <Form.Group controlId="descriptionOfWebSite">
              <Form.Label><strong>Short Description Of WebSite Needed</strong></Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="descriptionOfWebSite"
                placeholder="
                What is your reasonable deadline?
                Is your deadline a hard stop or can it be extended if needed?
                What is your budget for the website to be designed?
                How many pages will you need to be designed
                and what functions do they need to have within them?"
                onChange={handlechange}
                value={data.descriptionOfWebSite}
              />
            </Form.Group>
            <Form.Group controlId="haveAllContent">
              <p>
                <strong>
                  Do you have all the content needed for the web site?
                </strong>
                <br />
                Picures, Written content and any data needed
              </p>
              <Form.Label>
                <Form.Check
                  label="Yes"
                  type="radio"
                  name="haveAllContent"
                  value="Yes"
                  onChange={handlechange}
                />
              </Form.Label>
              <br />
              <Form.Label>
                <Form.Check
                  label="No"
                  type="radio"
                  name="haveAllContent"
                  value="No"
                  onChange={handlechange}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group controlId="haveAllContentNo">
              <Form.Label><strong>If No - What do you still need?</strong></Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="haveAllContentNo"
                placeholder="I.e. - Picture, Written content"
                onChange={handlechange}
                value={data.haveAllContentNo}
              />
            </Form.Group>
            <Form.Group controlId="otherComments">
              <Form.Label><strong>Anything else that is important?</strong></Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="otherComments"
                placeholder="Any thing you think I should know before our first meeting"
                onChange={handlechange}
                value={data.otherComments}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleclose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleclose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

ContactFormComp.propTypes = {
  handlechange: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired,
  handleclose: PropTypes.func.isRequired,
  handleshow: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
};
export default ContactFormComp;
