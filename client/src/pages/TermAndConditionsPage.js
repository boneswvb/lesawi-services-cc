import React from 'react';

import { Helmet } from 'react-helmet';

import TermAndConditionsComp from '../components/TermAndConditionsComp';

function TermAndConditionsPage() {
  return (
    <div>
      <Helmet>
        <meta
          name="keywords"
          content="Lesawi Services CC, Lesawi Services CC White River, Web development, Web app development, Responsive web design, Web conversions, React web app, Phone compatible, Easy understandable contract, Free limited support"
        />
        <meta name="description" content="Agents" />
        <title>Lesawi Services CC - Your one stop web app solution</title>
      </Helmet>
      <TermAndConditionsComp />
    </div>
  );
}

export default TermAndConditionsPage;
