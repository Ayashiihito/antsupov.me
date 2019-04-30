import React from 'react';

import Work from './work';
import works from './works';

const WorksContainer = () => (
  <>
    <h2>Работы:</h2>
    {works.map(work => (
      <Work
        img={work.img}
        name={work.name}
        desc={work.desc}
        stack={work.stack}
      />
    ))}
  </>
);

export default WorksContainer;
