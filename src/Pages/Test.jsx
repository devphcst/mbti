import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import IntroRenderer from '../Components/test/IntroRenderer';
import { TESTS } from '../data/TESTS';

const Test = () => {
  const { testParam } = useParams();
  const navigate = useNavigate();
  const [currentTest, setCurrentTest] = useState({});

  useEffect(() => {
    const theTest = TESTS?.find((test) => test?.info?.mainUrl === testParam);

    if (!theTest) {
      alert('해당 테스트는 존재하지 않습니다.');
      return navigate('/');
    }
    setCurrentTest(theTest);
  }, [testParam, navigate]);

  return (
    <div>
      <IntroRenderer currentTest={currentTest} />
    </div>
  );
};

export default Test;
