import React from 'react';
import copy from 'copy-to-clipboard';
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../App';
import {
  PaperClipOutlined,
  RedoOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import styles from './resultButtonGroup.module.css';

const ResultButtonGroup = ({ testParam, resultParam }) => {
  const linkCopy = () => {
    alert('링크가 복사되었습니다.');
    copy(`${baseUrl}/${testParam}/result/${resultParam}`);
  };

  const navigate = useNavigate();
  const onClickRedoBtn = () => {
    navigate(`/${testParam}`);
  };
  const onClickHomeBtn = () => {
    navigate('/');
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.upperDiv}>
        <button className={styles.upperButton} onClick={linkCopy}>
          <PaperClipOutlined />
          &nbsp; 링크 복사
        </button>

        <button className={styles.upperButton} onClick={onClickRedoBtn}>
          <RedoOutlined />
          &nbsp; 다시 하기
        </button>
      </div>
      <div className={styles.bottomDiv}>
        <button className={styles.bottomButton} onClick={onClickHomeBtn}>
          <HomeOutlined />
          &nbsp; 다른 테스트 하러 가기
        </button>
      </div>
    </div>
  );
};

export default ResultButtonGroup;
