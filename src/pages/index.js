import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Skills from '../components/skills';
import Works from '../components/works';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      lang="ru"
      keywords={[`Web Developer`, `react`, `full-stuck`]}
    />
    <Hero />
    <Skills />
    <Works />
  </Layout>
);

export default IndexPage;
