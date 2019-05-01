import React from 'react';

import Work from './work';
import works from './works';

const WorksContainer = () => (
  <>
    <h2>Работы:</h2>
    {works.map(({ name, img, desc, stack }) => (
      <Work key={name} img={img} name={name} desc={desc} stack={stack} />
    ))}
  </>
);

export default WorksContainer;
