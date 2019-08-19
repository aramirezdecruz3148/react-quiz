import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text, textColor, backgroundColor }) {
  return (
    <div style={{ background: backgroundColor }}>
      <h3 style={{ color: textColor }}>{text}</h3>
    </div>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default Shape;
