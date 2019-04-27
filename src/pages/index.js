import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/hero';
import Skills from '../components/skills';
import Portfolio from '../components/portfolio';

const IndexPage = () => (
  <Layout>
    <SEO keywords={[`Web Developer`, `react`, `full-stuck`]} />
    <Hero />
    <Skills />
    <Portfolio />
  </Layout>
);

export default IndexPage;
