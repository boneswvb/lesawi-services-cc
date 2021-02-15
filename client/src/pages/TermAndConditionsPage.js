import React from 'react';

import { Helmet } from 'react-helmet';

import TermAndConditionsComp from '../components/TermAndConditionsComp';

function TermAndConditionsPage() {
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
      <TermAndConditionsComp />
    </div>
  );
}

export default TermAndConditionsPage;
