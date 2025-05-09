import React, { useState } from 'react';
import { TESTS } from '../../data/TESTS';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../App';

const ThumbnailLists = () => {
  const [testList, setTestList] = useState(TESTS);
  return (
    <div>
      {testList?.map((test) => (
        <Link
          to={`${baseUrl}/${test?.info?.mainUrl}`}
          key={test?.info?.mainUrl}
        >
          <img
            style={{ width: '100%' }}
            src={test?.info?.thumbImage}
            alt={test?.info?.mainUrl}
          />
        </Link>
      ))}
    </div>
  );
};

export default ThumbnailLists;
