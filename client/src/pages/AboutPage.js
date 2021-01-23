import React from 'react';

import { Helmet } from 'react-helmet';

import AboutComp from '../components/AboutComp';

function AboutPage() {
  return (
    <div>
      <Helmet>
        <meta
          name="keywords"
          content="service"
        />
        <meta name="description" content="Agents" />
        <title>Lesawi Services CC - Your one stop web app solution</title>
      </Helmet>
      <AboutComp />
    </div>
  );
}

export default AboutPage;
