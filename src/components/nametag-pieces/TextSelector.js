import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, onTextChange }) {
  return (
  <>  
    <input 
      style={{ marginRight: '10px', marginLeft: '10px' }} 
      type='text' 
      name='text'
      placeholder='Name' 
      value={text} 
      onChange={onTextChange} />
  </>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired
};

export default TextSelector;
