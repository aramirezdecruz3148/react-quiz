import React, { Component } from 'react';
import TextSelector from '../nametag-pieces/TextSelector';
import ColorSelector from '../nametag-pieces/ColorSelector';
import Shape from '../nametag-pieces/Shape';

export default class NameTag extends Component {
  state = {
    text: '',
    backgroundColor: '',
    textColor: '',
  }
  onInputChange = ({ target }) => {
    this.setState({ 
      [target.name]: target.value, 
      [target.name]: target.value, 
      [target.name]: target.value 
    });
  }

  render() {
    const { text, backgroundColor, textColor } = this.state;
    return (
      <>
        <TextSelector 
          text={text} 
          onTextChange={this.onInputChange} 
        />
        <ColorSelector 
          textColor={textColor} 
          backgroundColor={backgroundColor} 
          onBackgroundChange={this.onInputChange}
          onTextColorChange={this.onInputChange}
        />
        <Shape 
          text={text}
          backgroundColor={backgroundColor}
          textColor={textColor}
        />
      </>
    );
  }
}
