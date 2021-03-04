import React from 'react';

import { Helmet } from 'react-helmet';

import PricingComp from '../components/PricingComp';

function PricingPage() {
  return (
    <div>
      <Helmet>
        <meta
          name="keywords"
          content="Lesawi Services CC, Lesawi Services CC White River, Web development, Web app development, Responsive web design, Web conversions, React web app, Phone compatible, Packages from 4000.00, Quotes for custom web sites, Quotes for custom web app, Flexible payments, Once off payment,Affordable maintenance"
        />
        <meta name="description" content="Agents" />
        <title>Lesawi Services CC - Pricing</title>
      </Helmet>
      <PricingComp />
    </div>
  );
}

export default PricingPage;
