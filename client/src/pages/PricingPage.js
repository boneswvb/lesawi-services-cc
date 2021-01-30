import React from 'react';

import { Helmet } from 'react-helmet';

import PricingComp from '../components/PricingComp';

function PricingPage() {
  return (
    <div>
      <Helmet>
        <meta
          name="keywords"
          content="service"
        />
        <meta name="description" content="Agents" />
        <title>Lesawi Services CC - Pricing</title>
      </Helmet>
      <PricingComp />
    </div>
  );
}

export default PricingPage;
