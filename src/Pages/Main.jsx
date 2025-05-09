import React from 'react';

import LanguageIcons from '../Components/main/LanguageIcons';
import MainBanner from '../Components/main/MainBanner';
import CatogoryBtns from '../Components/main/CatogoryBtns';
import ThumbnailLists from '../Components/main/ThumbnailLists';

const Main = () => {
  return (
    <>
      <LanguageIcons />
      <MainBanner />
      <CatogoryBtns />
      <ThumbnailLists />
    </>
  );
};

export default Main;
