import { Result } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ResultButtonGroup from '../Components/testResult/ResultButtonGroup';
import ResultThumbnailList from '../Components/testResult/ResultThumbnailList';
import ShareButtonGroup from '../Components/testResult/ShareButtonGroup';
import TestResultRender from '../Components/testResult/TestResultRender';
import { TESTS } from '../data/TESTS';

//  path='/:testParam/result/:resultParam'

const TestResult = () => {
  const navigate = useNavigate();
  const { testParam, resultParam } = useParams();
  const [renderResultInfo, setRenderResultInfo] = useState({});
  const [renderTestInfo, setRenderTestInfo] = useState();

  useEffect(() => {
    const testInfo = TESTS?.find((test) => test.info.mainUrl === testParam);
    if (!testInfo) {
      alert('존재하지 않는 테스트입니다.');
      navigate('/');
    }
    setRenderTestInfo(testInfo);
    // console.log('컴포넌트 렌더링됨', renderTestInfo);

    const resultInfo = testInfo?.results?.find(
      (result) => result.query === resultParam
    );
    if (!resultInfo) {
      alert('존재하지 않는 결과값입니다.');
      navigate(`/${testInfo?.info?.mainUrl}`);
    }
    setRenderResultInfo(resultInfo);
  }, [testParam, resultParam, navigate]);

  return (
    <div>
      <TestResultRender renderResultInfo={renderResultInfo} />
      {renderTestInfo && (
        <ShareButtonGroup
          testParam={testParam}
          resultParam={resultParam}
          renderTestInfo={renderTestInfo}
        />
      )}
      <ResultButtonGroup
        testParam={testParam}
        resultParam={resultParam}
        renderTestInfo={renderTestInfo}
      />
      <ResultThumbnailList />
    </div>
  );
};

export default TestResult;
