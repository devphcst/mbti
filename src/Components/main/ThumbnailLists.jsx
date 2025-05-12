import React, { useEffect, useState } from 'react';
import { TESTS } from '../../data/TESTS';
import { Link, useSearchParams } from 'react-router-dom';
import { baseUrl } from '../../App';

const ThumbnailLists = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [testList, setTestList] = useState(TESTS);

  useEffect(() => {
    const currentLanguage = searchParams.get('lang') || 'Kor';
    const currentCategory = searchParams.get('cat');
    if (currentCategory) {
      const filteredTests = TESTS.filter(
        (test) =>
          test?.info?.lang === currentLanguage &&
          test?.info?.category === currentCategory
      );
      setTestList(filteredTests);
    } else {
      const filteredTests = TESTS?.filter(
        (test) => test?.info?.lang === currentLanguage
      );
      setTestList(filteredTests);
    }
  }, [searchParams]);
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
