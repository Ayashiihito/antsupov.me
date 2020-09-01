import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Works from '../components/works';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      lang="en"
      keywords={[`Web Developer`, `react`, `full-stuck`, `node.js`]}
    />
    <Hero />
    <Works />
  </Layout>
);

export default IndexPage;
