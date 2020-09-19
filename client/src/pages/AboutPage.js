import React from "react";

import AboutComp from "../components/AboutComp";

import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return(
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
  )
}

export default AboutPage;