import React, { useState } from 'react';

const ImageDisplay = () => {
  const imageKeywords = {
    keyword1: 'карась',
    keyword2: 'кобра',
    keyword3: 'Дуб',
    keyword4: 'міст',
    keyword5: 'фонтан',
  };

  const imageSources = {
    keyword1: 'https://cdn.pixabay.com/photo/2019/10/02/20/18/koi-4521885_1280.jpg',
    keyword2: 'https://cdn.pixabay.com/photo/2014/07/30/19/28/king-cobra-405623_1280.jpg',
    keyword3: 'https://cdn.pixabay.com/photo/2017/01/29/17/36/oak-tree-2018822_1280.jpg',
    keyword4: 'https://cdn.pixabay.com/photo/2016/11/29/09/49/blonde-1868815_1280.jpg',
    keyword5: 'https://cdn.pixabay.com/photo/2023/10/16/10/57/fountain-8318963_1280.jpg',
  };

  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  });

  const handleInputChange = (e, inputNumber) => {
    const value = e.target.value;
    setInputValues({ ...inputValues, [inputNumber]: value });
  };

  const shouldShowImage = (inputNumber, keyword) => {
    const inputValue = inputValues[inputNumber];
    return inputValue === imageKeywords[keyword];
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((number) => (
        <div key={number}>
          <input
            type="text"
            value={inputValues[`input${number}`]}
            onChange={(e) => handleInputChange(e, `input${number}`)}
          />
          <br />
          {shouldShowImage(`input${number}`, `keyword${number}`) && (
            <img src={imageSources[`keyword${number}`]} alt={number} style={{ maxWidth: '300px' }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
