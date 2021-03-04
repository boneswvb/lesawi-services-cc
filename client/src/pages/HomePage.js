import React from 'react';

import { Helmet } from 'react-helmet';

import HomeComp from '../components/HomeComp';

function HomePage() {
  return (
    <div>
      <Helmet>
        <meta
          name="keywords"
          content="Lesawi Services CC, Lesawi Services CC White River, Web development, Web app development, Responsive web design, Web conversions, React web app, Phone compatible, Phone compatible web sites, Phone compatible web app, Single page application web sites, HTML and CSS web sites, Affordable web sites,  Affordable web app, Dependable, Reliable, No monthly contract,"
        />
        <meta name="description" content="Agents" />
        <title>Lesawi Services CC - Your one stop web app solution</title>
      </Helmet>
      <HomeComp />
    </div>
  );
}

export default HomePage;
