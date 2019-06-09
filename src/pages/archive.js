import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Work from '../components/works/work';
import archivedWorks from '../components/data/archivedWorks';

const Archive = () => (
  <Layout>
    <SEO title="Archive" lang="ru" keywords={[`archive`, `old projects`]} />
    <h2>Архив</h2>
    {archivedWorks.map(work => (
      <Work contents={work} key={work.name} />
    ))}
  </Layout>
);

export default Archive;
