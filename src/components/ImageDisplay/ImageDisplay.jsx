import React, { useState } from 'react';
import styles from './ImageDisplay.module.scss';

const ImageDisplay = () => {
  const imageKeywords = {
    keyword1: 'джерело',
    keyword2: 'змія',
    keyword3: 'фонтан',
    keyword4: 'потяг',
    keyword5: 'спорт',
    keyword6: 'замок',
  };

  const imageSources = {
    keyword1: 'https://3.bp.blogspot.com/-vpQ2dAyw37o/WnsGAgN1DvI/AAAAAAAAAGw/rZNUS7_O6Ns43ikhAGT80GI7Qc7Qh_ylgCEwYBhgL/s1600/37%25D0%25B1.jpg',
    keyword2: 'https://cdn.pixabay.com/photo/2014/07/30/19/28/king-cobra-405623_1280.jpg',
    keyword3: 'https://cdn.pixabay.com/photo/2023/10/16/10/57/fountain-8318963_1280.jpg',
    keyword4: 'https://cdn.pixabay.com/photo/2016/10/10/14/44/train-1728537_1280.jpg',
    keyword5: 'https://cdn.pixabay.com/photo/2021/03/25/21/09/boxing-6124217_1280.jpg',
    keyword6: 'https://cdn.pixabay.com/photo/2015/01/15/16/17/love-600488_1280.jpg',
  };

  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
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
    <div className={styles.container}>
      {[1, 2, 3, 4, 5, 6].map((number) => (
        <div className={styles.inputWrapper} key={number}>
          <input
            className={styles.imageInput}
            type="text"
            value={inputValues[`input${number}`]}
            onChange={(e) => handleInputChange(e, `input${number}`)}
          />
          <div className={styles.imageContainer}>
            {shouldShowImage(`input${number}`, `keyword${number}`) && (
              <img className={styles.image} src={imageSources[`keyword${number}`]} alt={number} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};


export default ImageDisplay;
