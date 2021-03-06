import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector component', () => {
  it('renders TextSelector', () => {
    const wrapper = shallow(<TextSelector text='testing' onTextChange={() => { }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
