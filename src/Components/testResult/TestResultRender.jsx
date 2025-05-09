import React from 'react';

const TestResultRender = ({ renderResultInfo }) => {
  return (
    <div>
      <h3>{renderResultInfo?.type}</h3>
      <img
        style={{ width: '100%' }}
        src={renderResultInfo?.img_src}
        alt={renderResultInfo?.type}
      />
    </div>
  );
};

export default TestResultRender;
