import React from 'react';

import Media from 'react-bootstrap/Media';
import Image from 'react-bootstrap/Image';

import PropTypes from 'prop-types';

import TopOfPage from '../utils/TopOfPage';

function ProjectsComp({
  id,
  projectName,
  image,
  hrefLink,
  alt,
  target,
  comment,
}) {
  return (
    <div className="container">
      <Media id={`pj${id}`}>
        <a alt={`${alt}`} href={`${hrefLink}`} target={`${target}`}>
          <Image
            width={104}
            height={164}
            className="mr-3 m-2"
            src={`${image}`}
            alt={`${alt}`}
            thumbnail
          />
        </a>
        <Media.Body>
          <h2>{`${projectName}`}</h2>
          <p>
            Comments
            {`${comment}`}
          </p>
        </Media.Body>
      </Media>
      <TopOfPage />
    </div>
  );
}

ProjectsComp.propTypes = {
  id: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  hrefLink: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default ProjectsComp;
