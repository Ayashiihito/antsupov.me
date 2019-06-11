import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Work from '../components/works/work';
import archivedWorks from '../components/data/archivedWorks';

const Archive = () => (
  <Layout>
    <SEO title="Archive" lang="ru" keywords={[`archive`, `old projects`]} />
    <h2
      css={`
        padding: 2rem;
      `}
    >
      Архив
    </h2>
    {archivedWorks.map(work => (
      <Work contents={work} key={work.name} />
    ))}
  </Layout>
);

export default Archive;
