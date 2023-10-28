import React, { useState } from 'react';

const ImageDisplay = () => {
  const [images] = useState({
    карась: '/images/karas.jpg',
    мойва: '/images/moyva.jpg',
    Дуб: '/images/dub.jpg',
    міст: '/images/mist.jpg',
    фонтан: '/images/fontan.jpg',
  });

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

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValues.input1}
          onChange={(e) => handleInputChange(e, 'input1')}
        />
        {inputValues.input1 && <img src={process.env.PUBLIC_URL + images[inputValues.input1]} alt="1" />}
      </div>
      <div>
        <input
          type="text"
          value={inputValues.input2}
          onChange={(e) => handleInputChange(e, 'input2')}
        />
        {inputValues.input2 && <img src={process.env.PUBLIC_URL + images[inputValues.input2]} alt="2" />}
      </div>
      <div>
        <input
          type="text"
          value={inputValues.input3}
          onChange={(e) => handleInputChange(e, 'input3')}
        />
        {inputValues.input3 && <img src={process.env.PUBLIC_URL + images[inputValues.input3]} alt="3" />}
      </div>
      <div>
        <input
          type="text"
          value={inputValues.input4}
          onChange={(e) => handleInputChange(e, 'input4')}
        />
        {inputValues.input4 && <img src={process.env.PUBLIC_URL + images[inputValues.input4]} alt="4" />}
      </div>
      <div>
        <input
          type="text"
          value={inputValues.input5}
          onChange={(e) => handleInputChange(e, 'input5')}
        />
        {inputValues.input5 && <img src={process.env.PUBLIC_URL + images[inputValues.input5]} alt="5" />}
      </div>
    </div>
  );
};

export default ImageDisplay;
