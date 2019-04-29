import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import SkillsContainer from '../components/skillsContainer';
import WorksContainer from '../components/worksContainer';

import skills from '../skills';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      lang="ru"
      keywords={[`Web Developer`, `react`, `full-stuck`]}
    />
    <Hero />
    <SkillsContainer skills={skills} />
    <WorksContainer />
  </Layout>
);

export default IndexPage;
