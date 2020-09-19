import React from "react";

import HomeComp from "../components/HomeComp";

import { Helmet } from 'react-helmet';

const HomePage = () => {
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
      <HomeComp />
    </div>
  )
}

export default HomePage;