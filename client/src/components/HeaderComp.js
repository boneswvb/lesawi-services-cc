import React from 'react';

import Media from 'react-bootstrap/Media';
import Image from 'react-bootstrap/Image';

function HeaderComp() {
  return (
    <div className="container">
      <Media>
        <Image
          className="noDisplay"
          alt="Wim von Benecke"
          src="https://res.cloudinary.com/wimvb/image/upload/v1539829865/Wim_new_yizq80.jpg"
          width={134}
          height={164}
          rounded
        />
        <Media.Body>
          <h1>LeSaWi Services CC</h1>
          <h5>Web App Development</h5>
        </Media.Body>
        <Media.Body>
          <h1>Contact Details</h1>
          <p>Cell: 071 099 2811</p>
          <p>Email: info@lesawi.co.za</p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default HeaderComp;
