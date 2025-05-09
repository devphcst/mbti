import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  XIcon,
} from 'react-share';
import { baseUrl } from '../../App';

const ShareButtonGroup = ({ testParam, resultParam, renderTestInfo }) => {
  // console.log('renderTestInfo', renderTestInfo.info.mainUrl);
  return (
    <div>
      <h3>친구에게 공유하기</h3>
      <div>
        <FacebookShareButton
          url={`${baseUrl}/${testParam}/result/${resultParam}`}
          hashtag={`#${renderTestInfo?.info.mainTitle}`}
        >
          <FacebookIcon round={true} size={48} />
        </FacebookShareButton>
        <TwitterShareButton
          title={renderTestInfo?.info.mainTitle}
          url={`#${renderTestInfo?.info.mainTitle}`}
          hashtag={[renderTestInfo?.info.mainTitle]}
        >
          <XIcon round={true} size={48} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default ShareButtonGroup;
