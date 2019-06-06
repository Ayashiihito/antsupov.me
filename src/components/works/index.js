import React from 'react';

import Work from './work';
import works from './works';

const WorksContainer = () => (
  <>
    <h2>Работы:</h2>
    {works.map(work => (
      <Work contents={work} key={work.name} />
    ))}
  </>
);

export default WorksContainer;
