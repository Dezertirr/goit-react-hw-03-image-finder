import React from 'react';
import { DotLoader } from 'react-spinners';

const Loader = () => {
  return (
<div >
          <DotLoader color="#36d7b7" size={100} loading={true} />
        </div>
  );
};

export default Loader;
