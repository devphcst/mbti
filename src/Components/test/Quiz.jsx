import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './quiz.module.css';
import { Flex, Progress } from 'antd';
import { arrayShuffler } from '../../tools/tool';

const Quiz = ({ setMode, questions, mbtiScore, setMbtiScore }) => {
  const [questionNum, setQuestionNum] = useState(0);
  const onOptionClick = (type) => {
    setQuestionNum((prev) => prev + 1);

    setMbtiScore((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  useEffect(() => {
    if (questionNum === questions.length) {
      setMode('loading');
    }
  }, [questions.length, questionNum, setMode, mbtiScore]);

  return (
    <div>
      <h3 className={styles.questionText}>
        {questions[questionNum]?.question}
      </h3>

      {questions[questionNum]?.answers &&
        arrayShuffler(questions[questionNum]?.answers)?.map((option) => (
          <button
            className={styles.optionButton}
            onClick={() => onOptionClick(option.type)}
            key={option.content}
          >
            {option.content}
          </button>
        ))}

      {/* <button
        className={styles.optionButton}
        onClick={() => onOptionClick(questions[questionNum]?.answers[0]?.type)}
      >
        {questions[questionNum]?.answers[0]?.content}
      </button>

      <button
        className={styles.optionButton}
        onClick={() => onOptionClick(questions[questionNum]?.answers[1]?.type)}
      >
        {questions[questionNum]?.answers[1]?.content}
      </button> */}

      <div>
        <Flex gap='small' vertical>
          <Progress
            percent={(questionNum * 100) / questions.length}
            percentPosition={{ align: 'center', type: 'inner' }}
            size={[400, 20]}
            strokeColor='blue'
            showInfo={false}
          />
        </Flex>
        <h4>{questionNum} / 12</h4>
      </div>
    </div>
  );
};

export default Quiz;
