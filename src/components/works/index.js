import React from 'react';

import Work from './work';
import works from '../data/works';

const WorksContainer = () => (
  <>
    <h2>My works:</h2>
    {works.map(work => (
      <Work contents={work} key={work.name} />
    ))}
  </>
);

export default WorksContainer;
