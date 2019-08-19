import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, onTextChange }) {
  return (
  <>  
    <input type='text' name='text' value={text} onChange={onTextChange} />
  </>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired
};

export default TextSelector;
