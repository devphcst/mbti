import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CatogoryBtns = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [language, setLanguage] = useState('Kor');

  useEffect(() => {
    const currentLang = searchParams.get('lang') || 'Kor';
    setLanguage(currentLang);
  }, [searchParams]);

  const onCategoryButtonClick = (category) => {
    if (category === 'all') {
      navigate(`/?lang=${language}`);
    } else if (category === 'love' || category === 'characteristic') {
      navigate(`/?lang=${language}&cat=${category}`);
    } else {
      alert('잘못된 카테고리입니다.');
      navigate(`/?lang=${language}`);
    }
  };

  return (
    <div>
      {/* ulr.com | url.com/?lang=Eng */}
      <button onClick={() => onCategoryButtonClick('all')}>ALL</button>
      <button onClick={() => onCategoryButtonClick('love')}>연애</button>
      <button onClick={() => onCategoryButtonClick('characteristic')}>
        성격
      </button>
    </div>
  );
};

export default CatogoryBtns;

// url.com/?lang=Kor&cat=love

// lang=kor | cat=love|char|all

// cat=love | lang=Kor|Eng|JP
