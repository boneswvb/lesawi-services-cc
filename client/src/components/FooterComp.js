import React from 'react';

import Media from 'react-bootstrap/Media';

import '../App.css';

function FooterComp() {
  return (
    <div className="container">
      <div className="blackFonts">
        <hr />
        <Media>
          <Media.Body>
            <h4>LeSaWi Services CC</h4>
            <h6>Web App Development</h6>
          </Media.Body>
          <Media.Body>
            <h1>&nbsp;</h1>
            <h5>&nbsp;</h5>
          </Media.Body>
          <Media.Body>
            <h1>&nbsp;</h1>
            <h5>&nbsp;</h5>
          </Media.Body>
          <Media.Body>
            <h1>&nbsp;</h1>
            <h5>&nbsp;</h5>
          </Media.Body>
          <Media.Body>
            <h4>Contact Details</h4>
            <p>
              Cell: 071 099 2811
              <br />
              <a href="mailto: info@lesawi.co.za">
                <p>Email: info@lesawi.co.za</p>
              </a>
            </p>
          </Media.Body>
        </Media>
      </div>
    </div>
  );
}

export default FooterComp;
