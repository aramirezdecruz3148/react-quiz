import React from 'react';
import { shallow } from 'enzyme';
import Shape from './Shape';

describe('Shape component', () => {
  it('renders Shape', () => {
    const wrapper = shallow(<Shape text='testing' backgroundColor='white' textColor='purple' />);
    expect(wrapper).toMatchSnapshot();
  });
});
