import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ onBackgroundChange, onTextColorChange, textColor, backgroundColor }) {
  return (
    <>
      <input name='textColor' value={textColor} type='color' onChange={onTextColorChange} />
      <input name='backgroundColor' value={backgroundColor} type='color' onChange={onBackgroundChange} />
    </>
  );
}

ColorSelector.propTypes = {
  onBackgroundChange: PropTypes.func.isRequired,
  onTextColorChange: PropTypes.func.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default ColorSelector;
