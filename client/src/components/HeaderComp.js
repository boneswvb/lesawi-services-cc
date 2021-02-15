import React from 'react';

import Media from 'react-bootstrap/Media';

function HeaderComp() {
  return (
    <div className="container" id="top">
      <Media>
        <Media.Body>
          <h1>LeSaWi Services CC</h1>
          <h5>Web App Development</h5>
        </Media.Body>
        <Media.Body>
          <h1>Contact Details</h1>
          <p>Cell: 071 099 2811</p>
          <a href="mailto: info@lesawi.co.za">
            <p>Email: info@lesawi.co.za</p>
          </a>
        </Media.Body>
      </Media>
      <hr />
    </div>
  );
}

export default HeaderComp;
