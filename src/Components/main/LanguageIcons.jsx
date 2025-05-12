import React from 'react';
import { CircleFlag } from 'react-circle-flags';
import { useNavigate } from 'react-router-dom';
import styles from './languageIcons.module.css';

const LanguageIcons = () => {
  const navigate = useNavigate();

  const onButtonClick = (lang) => {
    navigate(`/?lang=${lang}`);
  };
  return (
    <div>
      <CircleFlag
        className={styles.flagIcons}
        onClick={() => {
          onButtonClick('Kor');
        }}
        countryCode='kr'
        height={48}
        width={48}
      />
      <CircleFlag
        className={styles.flagIcons}
        onClick={() => {
          onButtonClick('Eng');
        }}
        countryCode='us'
        height={48}
        width={48}
      />
      <CircleFlag
        className={styles.flagIcons}
        onClick={() => {
          onButtonClick('JP');
        }}
        countryCode='jp'
        height={48}
        width={48}
      />
    </div>
  );
};

export default LanguageIcons;
