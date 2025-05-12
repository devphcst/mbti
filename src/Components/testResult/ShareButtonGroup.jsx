import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  XIcon,
} from 'react-share';
import { baseUrl } from '../../App';
import styles from './shareButtonGroup.module.css';
import copy from 'copy-to-clipboard';

const ShareButtonGroup = ({ testParam, resultParam, renderTestInfo }) => {
  const copyToClipBoard = () => {
    alert('링크가 복사되었습니다.');
    copy(`${baseUrl}/${testParam}/result/${resultParam}`);
  };
  // console.log('renderTestInfo', renderTestInfo.info.mainUrl);
  return (
    <div>
      <h3>친구에게 공유하기</h3>
      <div className={styles.shareButtonDiv}>
        <FacebookShareButton
          url={`${baseUrl}/${testParam}/result/${resultParam}`}
          hashtag={`#${renderTestInfo?.info.mainTitle}`}
        >
          <FacebookIcon
            round={true}
            size={48}
            className={styles.socialMediaIcon}
          />
        </FacebookShareButton>
        <TwitterShareButton
          title={renderTestInfo?.info.mainTitle}
          url={`#${renderTestInfo?.info.mainTitle}`}
          hashtag={[renderTestInfo?.info.mainTitle]}
        >
          <XIcon round={true} size={48} className={styles.socialMediaIcon} />
        </TwitterShareButton>
        <button className={styles.urlShareButton} onClick={copyToClipBoard}>
          URL
        </button>
      </div>
    </div>
  );
};

export default ShareButtonGroup;
