import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/loading-animation.json';
import { useNavigate } from 'react-router-dom';

const Loading = ({ mbtiScore, currentTest }) => {
  const navigate = useNavigate();
  const [finalQuery, setFinalQuery] = useState('');
  const defaultOption = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    // 4개의 슬롯 [[E, I], [N, S], [T, F], [J, P]]
    const mbtiPairs = [
      ['E', 'I'],
      ['N', 'S'],
      ['T', 'F'],
      ['J', 'P'],
    ];
    // 비어있는 문자열
    let resultType = '';
    // 배열 순회 -> 각 슬롯의 위너 선정 -> 문자열 추가
    for (let pair of mbtiPairs) {
      let firstType = pair[0];
      let secondType = pair[1];
      let firstTypeScore = mbtiScore[firstType];
      let secondTypeScore = mbtiScore[secondType];

      firstTypeScore > secondTypeScore
        ? (resultType += firstType)
        : (resultType += secondType);
    }

    const resultQuery = currentTest?.results?.find(
      (result) => result?.type === resultType
    )?.query;
    setFinalQuery(resultQuery);
  }, [mbtiScore, currentTest]);

  const loadingTime = 3700; //ms
  useEffect(() => {
    let timeOut = setTimeout(() => {
      finalQuery &&
        navigate(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`);
    }, loadingTime);
    return () => {
      clearTimeout(timeOut);
    };
  }, [loadingTime, navigate, finalQuery, currentTest?.info?.mainUrl]);

  return (
    <Lottie
      options={defaultOption}
      height={250}
      width={250}
      style={{ marginTop: '10rem' }}
    />
  );
};

export default Loading;

// 로딩 애니메이션
// mbti score calculation
// n초 돌아간 뒤 result page로 라우팅 :: baseUrl/personalColor/result/:resultParam
