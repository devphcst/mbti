import React from 'react';
import IntroButtonGroup from './IntroButtonGroup';

const Intro = ({ info, setMode }) => {
  return (
    <div>
      <h1>{info?.mainTitle}</h1>
      <h2>{info?.subTitle}</h2>
      <img
        onClick={() => setMode('quiz')}
        style={{ width: '100%', cursor: 'pointer' }}
        src={info?.mainImage}
        alt={info?.mainTitle}
      />
      <p>
        <span style={{ fontWeight: 'bold', color: 'brown' }}>
          {info?.mainTitle}
        </span>
        로 여러분의 성향을 테스트해보세요!
      </p>
      <IntroButtonGroup />
    </div>
  );
};

export default Intro;
